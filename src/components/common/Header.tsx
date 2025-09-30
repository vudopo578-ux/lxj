import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Heart, BookOpen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';
import { useFavorites } from '@/hooks/useFavorites';

const Header = () => {
  const location = useLocation();
  const { favorites } = useFavorites();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ChefHat className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">老乡鸡菜谱</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                className={`${
                  isActive('/') 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Home className="h-4 w-4 mr-2" />
                首页
              </Button>
            </Link>
            <Link to="/recipes">
              <Button 
                variant={isActive('/recipes') ? 'default' : 'ghost'}
                className={`${
                  isActive('/recipes') 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                菜谱大全
              </Button>
            </Link>
            <Link to="/favorites">
              <Button 
                variant={isActive('/favorites') ? 'default' : 'ghost'}
                className={`relative ${
                  isActive('/favorites') 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Heart className="h-4 w-4 mr-2" />
                我的收藏
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favorites.length > 99 ? '99+' : favorites.length}
                  </span>
                )}
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/favorites">
              <Button 
                variant="ghost" 
                size="sm"
                className="relative text-gray-600 hover:text-green-600 hover:bg-green-50"
              >
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {favorites.length > 9 ? '9+' : favorites.length}
                  </span>
                )}
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;