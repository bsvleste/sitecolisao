/* eslint-disable prettier/prettier */
import { FormEvent, useState } from 'react'
import { Button } from '../Button'
import {
	Calendar,
	MinusCircle,
	PaperPlaneTilt,
	Plus,
	XCircle,
} from 'phosphor-react'
import { ScoreboardMatchProps } from '../../pages/Scoreboard'
import { Modal } from '../Modal'
import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../firebase/firebaseConfig'
import { toast } from 'react-toastify'
import { Text } from '../Text'
import { TextInput } from '../TextInput'

interface ScoreboardData {
	id: string,
	segundoQuadro: {
		segundoColisao: number
		segundoAdversario: number
	}
	primeiroQuadro: {
		primeiroColisao: number
		primeiroAdversario: number
	}
	dataPartida: string,
	nomeTimeAdversario: string
}
interface ModalEditScoreboardProps {
	setIsOpen: () => void
	isOpen: boolean
	editingScoreboard: ScoreboardData
}
export function ModalEditScoreboard({
	isOpen,
	setIsOpen,
	editingScoreboard
}: ModalEditScoreboardProps) {
	const { id, dataPartida: updateDate, segundoQuadro, primeiroQuadro, nomeTimeAdversario: adversario } = editingScoreboard
	const [segundoColisao, setSegundoColisao] = useState(segundoQuadro.segundoColisao)
	const [segundoAdversario, setSegundoAdversario] = useState(segundoQuadro.segundoAdversario)
	const [primeiroColisao, setPrimeiroColisao] = useState(primeiroQuadro.primeiroColisao)
	const [primeiroAdversario, setPrimeiroAdversario] = useState(primeiroQuadro.primeiroAdversario)
	const [dataPartida, setDataPartida] = useState(updateDate)
	const [nomeTimeAdversario, setNomeTimeAdversario] = useState(adversario)
	const [isLoading, setIsLoading] = useState(false)
	function handleChekIsLessThanZero(e: FormEvent) {
		switch (e.currentTarget.id) {
			case 'segundoColisao':
				if (segundoColisao <= 0) {
					return
				}
				setSegundoColisao(count => count - 1)
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
	async function handleUpdateScorebaord(e: FormEvent) {

		try {
			setIsLoading(true)
			e.preventDefault()
			const score: any = {
				nomeTimeAdversario,
				dataPartida,
				segundoQuadro: {
					segundoColisao,
					segundoAdversario,
				},
				primeiroQuadro: {
					primeiroColisao,
					primeiroAdversario,
				},
			}
			await setDoc(doc(firestore, "scoreboards", id), score)

			toast.success('Placar alterado com sucesso ⚽');
		} catch (error) {
			toast.error('Não foi possivel alterar o resuldado,tente novamente. 😤');
		} finally {
			setIsLoading(false)
		}

	}

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<header>
				<div className="flex justify-center items-center">
					<div className="flex justify-center w-11/12">
						<span className="">Editar Placar</span>
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
							value={dataPartida}
							onChange={(e) => setDataPartida(e.target.value)}
						/>
					</label>
				</div>
				<div className="mt-4 ">
					<Text size="sm">Time Adversario</Text>
					<TextInput.Root>
						<TextInput.Input
							type="text"
							placeholder="Digite o nome do Time Adversario"
							onChange={(e) => setNomeTimeAdversario(e.target.value)}
							value={nomeTimeAdversario}
						/>
					</TextInput.Root>
				</div>
			</header>
			<form onSubmit={handleUpdateScorebaord}>
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
										className="cursor-pointer"
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
										className="cursor-pointer"
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
										className="cursor-pointer"
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
				<Button.Root size="lg" type="submit" disabled={isLoading}>
					Cadastar
					<Button.Icon>
						<PaperPlaneTilt />
					</Button.Icon>
				</Button.Root>
			</form>
		</Modal>
	)
}
