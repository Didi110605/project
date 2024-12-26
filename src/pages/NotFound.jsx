
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../images/404.png'



function NotFoundPage() {

  const navigate = useNavigate()
    return (
      <div>
          <img width={500} src={NotFoundImg}/>
        <p>We're sorry, the page you reqested could not be found.
          Please go back to the homepage
        </p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }
  
  export default NotFoundPage;