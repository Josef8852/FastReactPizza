import { Link } from "react-router-dom";
import { type ButtonProps, type Styles } from "./UITypes";


const Button: React.FC<ButtonProps> = ({ children, disabled, route  , type}) => {
  


  const base: string = `text-sm 
     inline-block 
     rounded-full
     bg-yellow-500  
     font-semibold 
     tracking-wide 
     text-stone-800 
     uppercase 
     transition-colors 
     duration-300  
     hover:cursor-pointer 
     hover:bg-yellow-400 
     focus:bg-yellow-300 
     focus:ring 
     focus:ring-yellow-300 
     focus:ring-offset-2 
     disabled:cursor-not-allowed`
  
  const styles : Styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " py-2 md:px-5 md:py-2.5 text-xs", 
    secondary: `
    text-sm 
    px-4 
    py-2.5 
    md:px-6 
    md:py-3.5 
    inline-block 
    rounded-full 
    border-2 
    border-stone-300  
    font-semibold 
    tracking-wide 
    text-stone-400 
    uppercase 
    transition-colors 
    duration-300
    hover:text-stone-800
    hover:cursor-pointer
    hover:bg-stone-300
    focus:bg-stone-300 
    focus:ring 
    focus:ring-stone-200 
    focus:text-stone-800 
    focus:ring-offset-2 
    disabled:cursor-not-allowed`
  }
  
  if (route) return (<Link to={route} className={styles[type]} >{children}</Link>)
  
  return (
  <button disabled={disabled} className={styles[type]} >
  {children}
  </button>
  )
}


export default Button ;
