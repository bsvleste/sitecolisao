import logoColisao from '../../assets/logoColisao.png'
import logoAdversario from '../../assets/logoAdversario.png'

type CardMatchProps = {
  segundo: {
    segundoColisao: number
    segundoAdversario: number
  }
}

export function SecondMatch({ segundo }: CardMatchProps) {
  const { segundoColisao, segundoAdversario } = segundo
  return (
    <>
      <div className="text-yellow-500 mt-8 w-full sm:w-[35.5rem] rounded-t-md  h-48 flex flex-col items-center">
        <h1 className="mb-8">Segundo Quadro</h1>
        <div className="flex items-center ">
          <div className="flex justify-start items-center ">
            <div className="bg-black  border-t-2 border-t-yellow-500 w-[120px] h-[80px] flex justify-center items-center">
              <img
                src={logoColisao}
                className="w-16 h-16 rounded-full"
                alt="Logo Colisao"
              />
            </div>
            <div className="placarColisao">
              <span className="">
                <h1>{segundoColisao}</h1>
              </span>
            </div>
          </div>
          <strong>X</strong>
          <div className="flex justify-start items-center ">
            <div className="placarAdversario">
              <span className="">
                <h1 className="texto">{segundoAdversario}</h1>
              </span>
            </div>
            <div className="bg-black  border-t-2 border-t-yellow-500 w-[120px] h-[80px] flex justify-center items-center">
              <img
                src={logoAdversario}
                className="w-16 h-16 rounded-full"
                alt="Logo Colisao"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-black mt-8 w-full sm:w-[35.5rem] rounded-t-md bg-yellow-500 h-48 flex flex-col  items-center">
        <h3 className="mt-4 font-bold">2° Quadro</h3>
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
            {segundoColisao} X {segundoAdversario}
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
      </div> */}
    </>
  )
}
