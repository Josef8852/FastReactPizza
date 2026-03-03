import { isRouteErrorResponse, useRouteError} from 'react-router-dom';
import LinkButton from './LinkButton';

const NotFound :React.FC = ()  => {
  const error  = useRouteError();

  
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {isRouteErrorResponse(error) ? <h1>{error.status} - {error.data}</h1> : null}
      <LinkButton route="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
