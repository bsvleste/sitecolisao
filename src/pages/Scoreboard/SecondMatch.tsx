import logoColisao from '../../assets/logoColisao.png'
import logoAdversario from '../../assets/logoAdversario.png'
import { LogoSvg } from '../../components/LogoSvg'

type CardMatchProps = {
  segundo: {
    segundoColisao: number
    segundoAdversario: number
  }
}

export function SecondMatch({ segundo }: CardMatchProps) {
  const { segundoColisao, segundoAdversario } = segundo
  return (
    <div className="flex justify-center items-center flex-col mt-4 mb-6 ">
      <h1>2° Quadro</h1>
      <div className="flex flex-row  justify-between items-center">
        <div className="relative w-80 ">
          <LogoSvg />
          <img
            src={logoColisao}
            alt="logo colisao"
            className="w-24 h-24 absolute top-[8%]"
          />
          <div className="absolute left-[37%] top-[35%] ">
            <span className="text-black font-semibold text-lg">
              {segundoColisao}
            </span>
          </div>
          <img
            src={logoAdversario}
            alt="logo colisao"
            className="w-24 h-24 absolute top-[8%] left-[65%]"
          />
          <div className="absolute left-[56%] top-[35%] ">
            <span className="text-black font-semibold text-lg">
              {segundoAdversario}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
