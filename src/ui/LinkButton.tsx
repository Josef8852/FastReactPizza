import { type LinkButtonProps } from "./UITypes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LinkButton:React.FC<LinkButtonProps> = ({children ,route}) =>  {

  const navigate = useNavigate();
  const className :string = "hover:cursor-pointer text-sm text-blue-500 hover:text-blue-600";
  
  if (route === "-1") {
    return (
        <button className={className} onClick={() => navigate(-1)}>&larr; Go back</button>
    )
  }
  
  return (
    <Link to={route} className={className} >{children}</Link>
  )
}


export default LinkButton ;
