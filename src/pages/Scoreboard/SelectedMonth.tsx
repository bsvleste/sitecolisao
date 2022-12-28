import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

type SelectedMonthProps = {
  handleChangeDate: (action: 'next' | 'prev') => void
  selectedDate: Date
}

export function SelectedMonth({
  handleChangeDate,
  selectedDate,
}: SelectedMonthProps) {
  return (
    <div className="flex justify-between w-56 items-center mt-8">
      <div
        onClick={() => {
          handleChangeDate('prev')
        }}
      >
        <ArrowCircleLeft
          size={46}
          className="text-colisao-500 cursor-pointer"
        />
      </div>
      <div className="text-colisao-500 font-bold font">
        <h1> {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}</h1>
      </div>
      <div
        onClick={() => {
          handleChangeDate('next')
        }}
      >
        <ArrowCircleRight
          size={46}
          className="text-colisao-500 cursor-pointer"
        />
      </div>
    </div>
  )
}
