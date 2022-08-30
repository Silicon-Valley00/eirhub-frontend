import PageNotFoundStyles from './PageNotFound.module.css';
import NotFound from '../../assets/Notfound.svg';
import { Link, useNavigate } from 'react-router-dom';

function PageNotFound() {
   const navigate = useNavigate();
   return (
      <div className={PageNotFoundStyles.PNFcontainer}>
         <h1 className={PageNotFoundStyles.header1}>Eirhub</h1>
         <div className={PageNotFoundStyles.Para}>
            <h1>Oooops!!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <button
               className={PageNotFoundStyles.button}
               onClick={() => navigate(-2)}
            >
               Go back
            </button>
         </div>
         <div className={PageNotFoundStyles.PNFimage}>
            <img src={NotFound} alt="not-found"></img>
         </div>
      </div>
   );
}

export default PageNotFound;
