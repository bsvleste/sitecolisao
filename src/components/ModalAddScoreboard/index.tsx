import { FormEvent, useState } from 'react'
import { Button } from '../Button'
import {
  Calendar,
  Envelope,
  LockKey,
  MinusCircle,
  PaperPlane,
  PaperPlaneTilt,
  Plus,
  XCircle,
} from 'phosphor-react'
import { data, ScoreboardMatchProps } from '../../pages/Scoreboard'
import { Modal } from '../Modal'

interface ModalAddScoreboardProps {
  setIsOpen: () => void
  isOpen: boolean
}
export function ModalAddScoreboard({
  isOpen,
  setIsOpen,
}: ModalAddScoreboardProps) {
  const [segundoColisao, setSegundoColisao] = useState(0)
  const [segundoAdversario, setSegundoAdversario] = useState(0)
  const [primeiroColisao, setPrimeiroColisao] = useState(0)
  const [primeiroAdversario, setPrimeiroAdversario] = useState(0)
  const [dataPartida, setDataPartida] = useState('')

  function handleChekIsLessThanZero(e: FormEvent) {
    switch (e.currentTarget.id) {
      case 'segundoColisao':
        if (segundoColisao <= 0) {
          return
        }
        setSegundoColisao((count) => count - 1)
        break
      case 'segundoAdv':
        if (segundoAdversario <= 0) {
          return
        }
        setSegundoAdversario((count) => count - 1)
        break
      case 'primeiroColisao':
        if (primeiroColisao <= 0) {
          return
        }
        setPrimeiroColisao((count) => count - 1)
        break
      case 'primeiroAdv':
        if (primeiroAdversario <= 0) {
          return
        }
        setPrimeiroAdversario((count) => count - 1)
        break

      default:
        break
    }
  }
  function handleSaveScorebaord(e: FormEvent) {
    e.preventDefault()
    const score: ScoreboardMatchProps = {
      _id: 4,
      segundoQuadro: {
        segundoColisao,
        segundoAdversario,
      },
      primeiroQuadro: {
        primeiroColisao,
        primeiroAdversario,
      },
      dataPartida,
    }
    data.push(score)
    console.log(data)
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <header>
        <div className="flex justify-center items-center">
          <div className="flex justify-center w-11/12">
            <span className="">Criar Placar</span>
          </div>
          <XCircle
            size={32}
            weight="fill"
            onClick={setIsOpen}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-4 ">
          <label className="relative block">
            <span className="absolute inset-y-0 right-2 flex items-center pl-2">
              <Calendar size={32} className="cursor-pointer" />
            </span>
            <input
              className="
                placeholder:italic placeholder:text-yellow-500
                focus:border-text-yellow-500 focus:ring-text-yellow-500 focus:ring-1
                w-full
                py-2 pl-9 pr-3
                shadow-sm
                focus:none
                bg-black
                border-2 border-yellow-500
              
              "
              placeholder="Escolha uma Data"
              required
              type="date"
              name="date"
              onChange={(e) => setDataPartida(e.target.value)}
            />
          </label>
          <p className="hidden">A data da partida ?? um campo obrigatorio</p>
        </div>
      </header>
      <form onSubmit={handleSaveScorebaord}>
        <main className="flex flex-col justify-between items-center mt-4">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-lg text-yellow-500">
              Segundo Quadro
            </h1>
            <div className="flex gap-32">
              <div className="flex flex-col justify-center items-center">
                <span className="font-bold text-md ">Colisao</span>
                <div className="flex flex-row items-center gap-4 mt-2 text-xxl">
                  <Plus
                    onClick={() => setSegundoColisao((count) => count + 1)}
                    className="cursor-pointer"
                  />
                  <span>{segundoColisao}</span>
                  <MinusCircle
                    onClick={(e) => handleChekIsLessThanZero(e)}
                    className="cursor-pointer"
                    id="segundoColisao"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="font-bold text-md ">Adversario</span>
                <div className="flex flex-row items-center gap-4 mt-2 text-xxl">
                  <Plus
                    onClick={() => setSegundoAdversario((count) => count + 1)}
                  />
                  <span>{segundoAdversario}</span>
                  <MinusCircle
                    onClick={(e) => handleChekIsLessThanZero(e)}
                    className="cursor-pointer"
                    id="segundoAdv"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col h-48 ">
            <h1 className="font-bold text-xl text-yellow-500">
              Primeiro Quadro
            </h1>
            <div className="flex gap-32">
              <div className="flex flex-col justify-center items-center">
                <span className="font-bold text-md ">Colisao</span>
                <div className="flex flex-row items-center gap-4 mt-2 text-xxl">
                  <Plus
                    onClick={() => setPrimeiroColisao((count) => count + 1)}
                  />
                  <span>{primeiroColisao}</span>
                  <MinusCircle
                    onClick={(e) => handleChekIsLessThanZero(e)}
                    className="cursor-pointer"
                    id="primeiroColisao"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="font-bold text-md ">Adversario</span>
                <div className="flex flex-row items-center gap-4 mt-2 text-xxl">
                  <Plus
                    onClick={() => setPrimeiroAdversario((count) => count + 1)}
                  />
                  <span>{primeiroAdversario}</span>
                  <MinusCircle
                    onClick={(e) => handleChekIsLessThanZero(e)}
                    className="cursor-pointer"
                    id="primeiroAdv"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Button.Root size="lg" type="submit">
          Cadastar
          <Button.Icon>
            <PaperPlaneTilt />
          </Button.Icon>
        </Button.Root>
      </form>
    </Modal>
  )
}
