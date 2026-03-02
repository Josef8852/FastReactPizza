import { isRouteErrorResponse, useNavigate, useRouteError} from 'react-router-dom';

const NotFound :React.FC = ()  => {
  const navigate = useNavigate();
  const error  = useRouteError();

  
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {isRouteErrorResponse(error) ? <h1>{error.status} - {error.data}</h1> : null}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
