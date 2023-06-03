import logoColisao from '../../assets/logoColisao.png'
import logoAdversario from '../../assets/logoAdversario.png'
import { LogoSvg } from '../../components/LogoSvg'
type FirstMatchProps = {
  primeiro: {
    primeiroColisao: number
    primeiroAdversario: number
  }
  nomeTimeAdversario: string
}

export function FirstMatch({ primeiro, nomeTimeAdversario }: FirstMatchProps) {
  const { primeiroAdversario, primeiroColisao } = primeiro
  return (
    <div className="flex justify-center items-center flex-col mb-6 ">
      <h1>1° Quadro</h1>
      <div className="flex flex-row  justify-between items-center">
        <div className="relative w-80">
          <LogoSvg />
          <img
            src={logoColisao}
            alt="logo colisao"
            className="w-24 h-24 absolute top-[5%]"
          />
          <div className="absolute left-[37%] top-[36%] ">
            <span className="text-black font-semibold text-lg">
              {primeiroColisao}
            </span>
          </div>
          <p className="w-24 h-24 absolute top-[40%] left-[70%]">
            {nomeTimeAdversario}
          </p>
          <div className="absolute left-[56%] top-[36%] ">
            <span className="text-black font-semibold text-lg">
              {primeiroAdversario}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
