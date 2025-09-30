import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useFavorites } from '@/hooks/useFavorites';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const menuItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/recipes', label: '菜谱大全', icon: BookOpen },
    { path: '/favorites', label: '我的收藏', icon: Heart, badge: favorites.length }
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold">菜单</h2>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 mr-3" />
                        {item.label}
                      </div>
                      {item.badge && item.badge > 0 && (
                        <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {item.badge > 99 ? '99+' : item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;