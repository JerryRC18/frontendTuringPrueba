
const Alerta = ({alerta}) => {
  return (
      <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-[#00df9a] to-[#099367]'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
          {alerta.msg}
      </div>
  )
};

export default Alerta;
