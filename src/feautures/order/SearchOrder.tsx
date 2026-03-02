import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchOrder : React.FC = () => {
  
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  
  const handleSubmit = (e : React.SubmitEvent) => {
    e.preventDefault();
    if (!query) return; 
    navigate(`/order/${query}`);
    setQuery("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Search Order #" value={query} onChange={(e => setQuery(e.target.value))} />
    </form>
  )
  
  
}


export default SearchOrder;