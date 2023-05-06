import logoColisao from '../../assets/logoColisao.png'
export function Loading() {
  return (
    <div className="grid grid-cols-1  mt-16 sm:mt-0 mx-3">
      <div className="flex justify-center items-center mb-2"></div>
      <div className="flex flex-col justify-center items-center  h-screen">
        <img
          src={logoColisao}
          className="w-36 animate-pulse-colisao "
          alt="Logo colisao"
        />
      </div>
    </div>
  )
}
