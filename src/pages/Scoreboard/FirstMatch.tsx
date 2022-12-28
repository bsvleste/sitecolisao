import logoColisao from '../../assets/logoColisao.png'
import logoAdversario from '../../assets/logoAdversario.png'
type FirstMatchProps = {
  primeiro: {
    primeiroColisao: number
    primeiroAdversario: number
  }
}

export function FirstMatch({ primeiro }: FirstMatchProps) {
  const { primeiroAdversario, primeiroColisao } = primeiro
  return (
    <>
      <div className="w-full sm:w-[35.5rem] text-colisao-500 rounded-b-md bg-grays-900 h-48 flex flex-col justify-center items-center mb-3">
        <h3 className="mt-2 font-bold">1°Quadro</h3>
        <div className="w-full mb-8 flex justify-around items-center">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={logoColisao}
              className="w-16 h-16 rounded-full"
              alt="Logo Colisao"
            />
            <h1>Colisao</h1>
          </div>
          <h3 className="font-bold">
            {primeiroColisao} X {primeiroAdversario}
          </h3>
          <div className=" flex flex-col justify-center items-center">
            <img
              src={logoAdversario}
              className="w-16 h-16 rounded-full"
              alt="Logo Colisao"
            />
            <h1>Adversario</h1>
          </div>
        </div>
      </div>
    </>
  )
}
