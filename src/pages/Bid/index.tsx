import agachadoPreto from '../../assets/agachadoPreto.png'
import agachadoColorido from '../../assets/agachadoColorido.png'
import { useEffect, useState } from 'react'

const jogadores = [
  {
    id: '1',
    jogor: agachadoPreto,
  },
  {
    id: '2',
    jogor: agachadoPreto,
  },
  {
    id: '3',
    jogor: agachadoPreto,
  },
  {
    id: '4',
    jogor: agachadoPreto,
  },
  {
    id: '5',
    jogor: agachadoPreto,
  },
]

export function Bid() {
  const [teste, setTeste] = useState([
    {
      id: '1',
      jogor: agachadoPreto,
    },
    {
      id: '2',
      jogor: agachadoPreto,
    },
    {
      id: '3',
      jogor: agachadoPreto,
    },
    {
      id: '4',
      jogor: agachadoPreto,
    },
    {
      id: '5',
      jogor: agachadoPreto,
    },
  ])

  function trocaJogador(e: any) {
    const id = String(Math.floor(Math.random() * (1 - 6) + 6))
    console.log(id)

    const trocaImagem = teste.findIndex((jogador) => jogador.id === id)
    setTeste((state: any) => [
      ...state,
      (teste[trocaImagem].jogor = agachadoColorido),
    ])
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        <ul className="grid grid-cols-3  m-10 max-w-md mx-auto">
          {teste.map((jogador, index) => (
            <li key={index} id={jogador.id} onClick={trocaJogador}>
              <img src={jogador.jogor} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="yes"
              name="answer"
              id="answer_yes"
              onClick={trocaJogador}
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_yes"
            >
              Yes
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👍
            </div>
          </li>
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="no"
              name="answer"
              id="answer_no"
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_no"
            >
              No
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👎
            </div>
          </li>

          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="maybe"
              name="answer"
              id="answer_maybe"
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_maybe"
            >
              Maybe
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              🤔
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
