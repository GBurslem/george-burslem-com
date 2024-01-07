import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/**
 * Triggers a page to scroll to the top when it renders.
 *
 * @return {void} - This component doesn't render any content
 */
function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
