interface ButtonStyledProps {
  children: React.ReactNode,
  type?: string,
  onClick?: (e: any) => void | undefined,
}


const ButtonStyled: React.FC<ButtonStyledProps> = ({ children, type = "submit", onClick }) => {
  return (
    <button 
    type="submit" 
    onClick={onClick} 
    className="items-center justify-center flex-row w-64 h-12 py-2 px-4 flex text-center rounded leading-5 text-white bg-[#FF8D00] border border-[#FF8D00] hover:text-white hover:bg-[#db7c07]  hover:ring-0 hover:border-[#db7c07]  focus:bg-[#db7c07] focus:border-[#db7c07]  focus:outline-none focus:ring-0 " >
      {children}
    </button>
  );
}

export default ButtonStyled;