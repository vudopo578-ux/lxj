import { ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">老乡鸡菜谱</span>
            </div>
            <p className="text-gray-300 mb-4">
              传承经典美味，分享烹饪智慧。229道精选菜谱，让每一道菜都成为家的味道。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-green-400 transition-colors">首页</a></li>
              <li><a href="/recipes" className="hover:text-green-400 transition-colors">菜谱大全</a></li>
              <li><a href="/favorites" className="hover:text-green-400 transition-colors">我的收藏</a></li>
              <li><a href="/recipes?category=signature" className="hover:text-green-400 transition-colors">招牌菜</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">菜谱分类</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/recipes?category=signature" className="hover:text-green-400 transition-colors">招牌菜</a></li>
              <li><a href="/recipes?category=homestyle" className="hover:text-green-400 transition-colors">家常菜</a></li>
              <li><a href="/recipes?category=soup" className="hover:text-green-400 transition-colors">汤品</a></li>
              <li><a href="/recipes?category=chicken" className="hover:text-green-400 transition-colors">鸡肉料理</a></li>
              <li><a href="/recipes?category=vegetable" className="hover:text-green-400 transition-colors">素食</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            2025 老乡鸡菜谱网站
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;