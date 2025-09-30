import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <Home />
  },
  {
    name: '菜谱大全',
    path: '/recipes',
    element: <RecipeList />
  },
  {
    name: '我的收藏',
    path: '/favorites',
    element: <Favorites />
  },
  {
    name: '菜谱详情',
    path: '/recipe/:id',
    element: <RecipeDetail />,
    visible: false
  }
];

export default routes;