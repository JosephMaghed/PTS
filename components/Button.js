const Button = ({ children, onClick, color }) => {
  if (!color) color = '#222222'
  return (
    <button
      className={`bg-[${color}] flex w-fit items-center justify-center gap-3  rounded-full bg-[color] py-3 px-7 font-semibold text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
