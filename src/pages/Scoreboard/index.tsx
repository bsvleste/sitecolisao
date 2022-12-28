import { addMonths, subMonths } from 'date-fns'
import { SoccerBall } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { CardMatch } from './CardMatch'
import { SelectedMonth } from './SelectedMonth'
export interface ScoreboardMatchProps {
  _id: number
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
const data: ScoreboardMatchProps[] = [
  {
    _id: 1,
    segundoQuadro: {
      segundoAdversario: 2,
      segundoColisao: 4,
    },
    primeiroQuadro: {
      primeiroAdversario: 5,
      primeiroColisao: 6,
    },
    dataPartida: '2022-12-28T01:48:20.062Z',
  },
  {
    _id: 2,
    segundoQuadro: {
      segundoAdversario: 2,
      segundoColisao: 4,
    },
    primeiroQuadro: {
      primeiroAdversario: 5,
      primeiroColisao: 6,
    },
    dataPartida: '2022-12-15T01:48:20.062Z',
  },
  {
    _id: 3,
    segundoQuadro: {
      segundoAdversario: 2,
      segundoColisao: 4,
    },
    primeiroQuadro: {
      primeiroAdversario: 5,
      primeiroColisao: 6,
    },
    dataPartida: '2022-11-08T01:48:20.062Z',
  },
]
export function Scoreboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [scoreboard, setScoreboard] = useState<ScoreboardMatchProps[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date())

  async function getScoreboard() {
    const resultsMont = data.filter(
      (res: ScoreboardMatchProps) =>
        new Date(res.dataPartida).getMonth() === selectedDate.getMonth() &&
        new Date(res.dataPartida).getFullYear() === selectedDate.getFullYear(),
    )
    setScoreboard(resultsMont)
  }
  useEffect(() => {
    getScoreboard()
  }, [selectedDate, isModalOpen])

  function handleChangeDate(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1))
    } else {
      setSelectedDate(subMonths(selectedDate, 1))
    }
  }
  return (
    <div className="mx-3 sm:mx-auto">
      <div className="container flex flex-col justify-center mb-8 items-center w-full ">
        <div className="w-full sm:w-[35.5rem] flex justify-between tems-center mt-3 ">
          <Button.Root color="bg-yellow" size="lg">
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
          scoreboard.map((data) => (
            <CardMatch key={data._id} info={data} isFetching={isFetching} />
          ))
        )}
      </div>
    </div>
  )
}
