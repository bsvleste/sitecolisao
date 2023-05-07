import { Pencil, Trash } from 'phosphor-react'
import { SecondMatch } from './SecondMatch'
import { FirstMatch } from './FirstMatch'
import { Button } from '../../components/Button'
import { ScoreboardMatchProps } from '.'
import { ModalEditScoreboard } from '../../components/ModalEditScoreboard'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import clsx from 'clsx'
import { deleteDoc, doc } from 'firebase/firestore'
import { firestore } from '../../firebase/firebaseConfig'
import { toast } from 'react-toastify'
type CardMatchProps = {
  info: ScoreboardMatchProps
  isFetching: boolean
}
export function CardMatch({ info, isFetching }: CardMatchProps) {
  const { user } = useContext(AuthContext)
  const { id, dataPartida, primeiroQuadro, segundoQuadro } = info
  const teste = info
  const [isModalOpen, setIsModalOpen] = useState(false)
  function togleModal() {
    setIsModalOpen(!isModalOpen)
  }
  async function handleDeletePlacar(id: string) {
    deleteDoc(doc(firestore, 'scoreboards', id))
      .then(() => {
        toast.success('Placar deletado com sucesso ')
      })
      .catch(() => {
        toast.error(
          'Ops!🤡 Ocorreu um erro e não foi possivel deletar o placar',
        )
      })
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
      <div className="w-full sm:w-[35.5rem] flex justify-between sm:justify-around tems-center mb-10">
        {user?.isAdmin && (
          <>
            <Button.Root color="bg-black" size="sm" onClick={togleModal}>
              <Button.Icon>
                <Pencil />
              </Button.Icon>
              Editar
            </Button.Root>
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <Button.Root color="bg-red" size="sm">
                  <Button.Icon>
                    <Trash />
                  </Button.Icon>
                  Deletar
                </Button.Root>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 z-20 bg-black opacity-80" />
                <AlertDialog.Content
                  className={clsx(
                    'fixed z-50',
                    'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
                    'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
                    'bg-black',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                  )}
                >
                  <AlertDialog.Title className="text-sm font-bold text-grays-300 0">
                    Certeza que voçê vai deletar esse resultado?
                  </AlertDialog.Title>
                  <AlertDialog.Description className="mt-2 mb-4 text-sm font-normal text-grays-600 ">
                    Esta ação não podera ser desfeita.O placar selecionado será
                    apagado permanentemente.
                  </AlertDialog.Description>
                  <div
                    style={{
                      display: 'flex',
                      gap: 25,
                      justifyContent: 'flex-end',
                    }}
                  >
                    <AlertDialog.Cancel asChild>
                      <Button.Root color="bg-black">Cancelar</Button.Root>
                    </AlertDialog.Cancel>
                    <AlertDialog.Cancel asChild>
                      <Button.Root
                        color="bg-red"
                        onClick={() => handleDeletePlacar(id)}
                      >
                        Deletar
                      </Button.Root>
                    </AlertDialog.Cancel>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </>
        )}
      </div>
      <ModalEditScoreboard
        isOpen={isModalOpen}
        setIsOpen={togleModal}
        editingScoreboard={info}
      />
    </>
  )
}
