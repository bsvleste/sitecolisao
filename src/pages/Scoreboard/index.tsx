/* eslint-disable prettier/prettier */
import { addMonths, subMonths } from 'date-fns'
import { SignIn, SoccerBall } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { ModalAddScoreboard } from '../../components/ModalAddScoreboard'
import { CardMatch } from './CardMatch'
import { SelectedMonth } from './SelectedMonth'
import { collection, onSnapshot } from 'firebase/firestore'
import { NavLink } from 'react-router-dom'
import { firestore } from '../../firebase/firebaseConfig'
import { Loading } from '../../components/Loading'
import { AuthContext } from '../../contexts/AuthContext'
import dayjs from 'dayjs'
import logoColisao from '../../assets/logoColisao.png'
import { Header } from '../../components/Header'
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
  const { user, isLogging } = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [scoreboard, setScoreboard] = useState<any>([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })
  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')
  const dataSelecionada = `${currentMonth} , ${currentYear}`
  useEffect(
    () =>
      onSnapshot(collection(firestore, 'scoreboards'), (snapshot) => {
        return setScoreboard(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        )
      }),
    [selectedDate],
  )
  const scoreboardSelected = scoreboard.filter(
    (res: ScoreboardMatchProps): boolean =>
      dayjs(res.dataPartida).month() ===
      selectedDate.getMonth() &&
      new Date(res.dataPartida).getFullYear() ===
      selectedDate.getFullYear(),
  )
  function togleModal() {
    setIsModalOpen(!isModalOpen)
  }
  function handleChangeDate(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1))
      const nextMonthDate = currentDate.add(1, 'month')
      setCurrentDate(nextMonthDate)
    } else {
      const previousMonthDate = currentDate.subtract(1, 'month')
      setSelectedDate(subMonths(selectedDate, 1))
      setCurrentDate(previousMonthDate)
    }

  }
  if (isLogging) {
    return <Loading />
  }
  return (
    <div className="mx-3 sm:mx-auto">
      <div className="flex flex-col justify-center mb-8 items-center w-full ">
        <div className="w-full sm:w-[35.5rem] flex justify-between tems-center mt-3 ">
          {
            user?.isAdmin ? (
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
          selectedDate={currentDate.toISOString()}
          handleChangeDate={handleChangeDate}
        />
        {
          scoreboardSelected.length > 0 ?
            (
              scoreboardSelected
                .map((data: any, index: any) => (
                  <CardMatch key={index} info={data} isFetching={isFetching} />
                ))
            ) :
            (
              <>
                <div className='flex justify-center items-center flex-col mt-8 text-grays-600'>
                  <img src={logoColisao} alt='logoColisao' className='w-16 h-16' />
                  <p>Este mês ainda não tem Placar cadastrado</p>
                  <p>Cadastre um agora!</p>
                </div>
              </>
            )

        }
        {user?.isAdmin && <Header />}
        <div className="flex justify-center items-center">
          <ModalAddScoreboard isOpen={isModalOpen} setIsOpen={togleModal} />
        </div>
      </div>
    </div>
  )
}
