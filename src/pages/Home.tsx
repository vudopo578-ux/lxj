import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Users, Star, ChefHat } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getFeaturedRecipes, categories } from '@/data/recipes';
import type { Recipe } from '@/types/recipe';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredRecipes = getFeaturedRecipes();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/recipes?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const getDifficultyColor = (difficulty: Recipe['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: Recipe['difficulty']) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return '未知';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="h-16 w-16 mr-4" />
            <h1 className="text-5xl font-bold">老乡鸡菜谱</h1>
          </div>
          <p className="text-xl mb-8 text-green-100">
            传承经典美味，分享烹饪智慧 · 229道精选菜谱等你探索
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="搜索菜谱名称或食材..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-10 py-3 text-lg bg-white/95 border-0 focus:bg-white"
              />
            </div>
            <Button 
              onClick={handleSearch}
              size="lg"
              className="bg-green-800 hover:bg-green-900 px-8"
            >
              搜索
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">菜谱分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/recipes?category=${category.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-green-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ChefHat className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{category.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {category.count} 道菜
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">招牌推荐</h2>
            <p className="text-lg text-gray-600">老乡鸡经典招牌菜品，传承正宗美味</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden">
                      <img 
                        src={recipe.image} 
                        alt={recipe.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full flex items-center justify-center">
                        <ChefHat className="h-16 w-16 text-green-600" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                      <Star className="h-3 w-3 mr-1" />
                      招牌
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-gray-800">{recipe.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {recipe.cookingTime}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {recipe.servings}人份
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-between items-center">
                      <Badge className={getDifficultyColor(recipe.difficulty)}>
                        {getDifficultyText(recipe.difficulty)}
                      </Badge>
                      <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                        查看详情
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/recipes">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                查看全部菜谱
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">229+</div>
              <div className="text-green-100">精选菜谱</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-green-100">菜系分类</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">详细步骤</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;