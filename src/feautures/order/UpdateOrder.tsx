import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";


const UpdateOrder : React.FC = () => {
  
  const fetcher = useFetcher();
  
  return (
    <div>
      <fetcher.Form method="PATCH" className="text-right">
        <Button type="primary" >Make Priority</Button>
      </fetcher.Form>
    </div>
  )
  
}


export default UpdateOrder;





