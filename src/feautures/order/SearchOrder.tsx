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
      <input className="focus:ring focus:ring-opacity-50 focus:outline-none focus:ring-yellow-600 transition-all duration-300  sm:w-64 sm:focus:w-72 rounded-full bg-yellow-100 px-4 py-2 text-sm
      placeholder:text-stone-400 w-28" placeholder="Search Order #" value={query} onChange={(e => setQuery(e.target.value))} />
    </form>
  )
  
  
}


export default SearchOrder;