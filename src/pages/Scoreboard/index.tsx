/* eslint-disable prettier/prettier */
import { addMonths, subMonths } from 'date-fns'
import { SignIn, SoccerBall } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { ModalAddScoreboard } from '../../components/ModalAddScoreboard'
import { CardMatch } from './CardMatch'
import { SelectedMonth } from './SelectedMonth'
import { collection, onSnapshot } from 'firebase/firestore'
import { NavLink, useNavigate } from 'react-router-dom'
import { firestore } from '../../firebase/firebaseConfig'
import { Loading } from '../../components/Loading'
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
  const [scoreboard, setScoreboard] = useState<any>([])
  const [resultsMonth, setResultsMonth] = useState<ScoreboardMatchProps[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isAdmin, setIsAdmin] = useState(false)


  useEffect(
    () =>
      onSnapshot(collection(firestore, 'scoreboards'), (snapshot) => {
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
          {
            isAdmin ? (
              <Button.Root color="bg-yellow" size="lg" onClick={togleModal}>
                <Button.Icon>
                  <SoccerBall />
                </Button.Icon>
                Novo Placar
              </Button.Root>
            ) : (
              <NavLink
                to='/login'
                className='w-full text-md py-4 px-4 transition-colors duration-300 flex items-center justify-center gap-2  border-2 rounded-md font-semibold border-black bg-yellow-500  text-black hover:border-yellow-500 hover:bg-black hover:text-yellow-500'>
                Login
                <SignIn size={32} />
              </NavLink>
            )
          }

        </div>
        <SelectedMonth
          selectedDate={selectedDate}
          handleChangeDate={handleChangeDate}
        />
        {isLoading ? (
          <Loading />
        ) : (
          scoreboard
            .filter(
              (res: ScoreboardMatchProps): boolean =>
                new Date(res.dataPartida).getMonth() ===
                selectedDate.getMonth() &&
                new Date(res.dataPartida).getFullYear() ===
                selectedDate.getFullYear(),
            )
            .map((data: any, index: any) => (
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
