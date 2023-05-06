/* eslint-disable prettier/prettier */
import { addMonths, subMonths } from 'date-fns'
import { SoccerBall } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { ModalAddScoreboard } from '../../components/ModalAddScoreboard'
import { CardMatch } from './CardMatch'
import { SelectedMonth } from './SelectedMonth'
import { collection, onSnapshot } from 'firebase/firestore'
import db from '../../firebase'

export interface ScoreboardMatchProps {
  id: string
  segundoQuadro: {
    segundoColisao: number
    segundoAdversario: number
  }
  primeiroQuadro: {
    primeiroColisao: number
    primeiroAdversario: number
  }
  dataPartida: string
}

export function Scoreboard() {
  const [getDataFireBase, setGetDataFireBase] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [scoreboard, setScoreboard] = useState([])
  const [resultsMonth, setResultsMonth] = useState<ScoreboardMatchProps[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(
    () =>
      onSnapshot(collection(db, 'scoreboards'), (snapshot) => {
        return setScoreboard(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        )
      }),
    [],
  )
  // function getScoreboard() {
  //   const resultsMont = scoreboard.filter(
  //     (res: ScoreboardMatchProps) =>
  //       new Date(res.dataPartida).getMonth() === selectedDate.getMonth() &&
  //       new Date(res.dataPartida).getFullYear() === selectedDate.getFullYear(),
  //   )
  //   console.log(scoreboard)
  //   setScoreboard(resultsMont)
  // }

  // useEffect(() => {
  //   getScoreboard()
  // }, [selectedDate])

  function togleModal() {
    setIsModalOpen(!isModalOpen)
  }
  function handleChangeDate(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1))
    } else {
      setSelectedDate(subMonths(selectedDate, 1))
    }
  }
  return (
    <div className="mx-3 sm:mx-auto">
      <div className="flex flex-col justify-center mb-8 items-center w-full ">
        <div className="w-full sm:w-[35.5rem] flex justify-between tems-center mt-3 ">
          <Button.Root color="bg-yellow" size="lg" onClick={togleModal}>
            <Button.Icon>
              <SoccerBall />
            </Button.Icon>
            Novo Placar
          </Button.Root>
        </div>
        <SelectedMonth
          selectedDate={selectedDate}
          handleChangeDate={handleChangeDate}
        />
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          scoreboard
            .filter(
              (res: ScoreboardMatchProps): boolean =>
                new Date(res.dataPartida).getMonth() ===
                selectedDate.getMonth() &&
                new Date(res.dataPartida).getFullYear() ===
                selectedDate.getFullYear(),
            )
            .map((data, index) => (
              <CardMatch key={index} info={data} isFetching={isFetching} />
            ))
        )}

        <div className="flex justify-center items-center">
          <ModalAddScoreboard isOpen={isModalOpen} setIsOpen={togleModal} />
        </div>
      </div>
    </div>
  )
}
