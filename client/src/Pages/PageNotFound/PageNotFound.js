import PageNotFoundStyles from '../PageNotFound/PageNotFound.module.css';
import NotFound from '../../assets/404page.svg';

function PageNotFound() {
   return (
      <div className={PageNotFoundStyles.PNFcontainer}>
         <h1 className={PageNotFoundStyles.header1}>Eirhub</h1>
         <div className={PageNotFoundStyles.Para}>
            <h1>Oooops!!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <button>Back to Home</button>
         </div>
         <div className={PageNotFoundStyles.PNFimage}>
            <img src={NotFound}></img>
         </div>
      </div>
   );
}

export default PageNotFound;
