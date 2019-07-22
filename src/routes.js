import Home from './common/containers/Home';
import News from './common/containers/News';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true,
  },
  {
    path: '/news/category/:category',
    component: News,
    name: 'News',
    exact: true
  },
];

export default routes;
