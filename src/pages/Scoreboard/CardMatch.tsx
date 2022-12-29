import { Pencil, Trash } from 'phosphor-react'
import { SecondMatch } from './SecondMatch'
import { FirstMatch } from './FirstMatch'
import { Button } from '../../components/Button'
import { ScoreboardMatchProps } from '.'
import { ModalEditScoreboard } from '../../components/ModalEditScoreboard'
import { useState } from 'react'
type CardMatchProps = {
  info: ScoreboardMatchProps
  isFetching: boolean
}
export function CardMatch({ info, isFetching }: CardMatchProps) {
  const { _id, dataPartida, primeiroQuadro, segundoQuadro } = info
  const [isModalOpen, setIsModalOpen] = useState(false)
  function togleModal() {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <>
      {isFetching && <h1>Loading.....</h1>}

      <h1 className="font-bold mt-4 text-colisao-500 text-center">
        {Intl.DateTimeFormat('pt-Br', {
          timeZone: 'UTC',
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(dataPartida))}
      </h1>

      <SecondMatch segundo={segundoQuadro} />
      <FirstMatch primeiro={primeiroQuadro} />
      <div className="w-full sm:w-[35.5rem] flex justify-between tems-center mb-10">
        <Button.Root color="bg-yellow" size="md" onClick={togleModal}>
          <Button.Icon>
            <Pencil />
          </Button.Icon>
          Editar
        </Button.Root>

        <Button.Root color="bg-red" size="md">
          <Button.Icon>
            <Trash />
          </Button.Icon>
          Deletar
        </Button.Root>
      </div>
      <ModalEditScoreboard
        isOpen={isModalOpen}
        setIsOpen={togleModal}
        editingScoreboard={info}
      />
    </>
  )
}
