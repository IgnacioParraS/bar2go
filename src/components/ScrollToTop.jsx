import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top whenever the route pathname changes.
 * Must be rendered inside <BrowserRouter>.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}