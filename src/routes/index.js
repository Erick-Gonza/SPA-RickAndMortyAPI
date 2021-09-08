import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import resolveRouts from '../utils/resolveRouts';
import getHash from '../utils/getHash';

const routes = {
  '/': Home,
  '/:id': Character,
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer');

  header.innerHTML = await Header();
  footer.innerHTML = await Footer();

  let hash = getHash();
  let route = await resolveRouts(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
