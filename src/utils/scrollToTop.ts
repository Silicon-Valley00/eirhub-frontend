import { useEffect } from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function ScrollToTop() {
   useEffect(() => {
      const unlisten = history.listen(() => {
         window.scrollTo(0, 0);
      });
      return () => {
         unlisten();
      };
   }, []);

   return null;
}

export default ScrollToTop;
