import { Link } from 'react-router-dom';
import { Heart, ChefHat, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recipes } from '@/data/recipes';
import { useFavorites } from '@/hooks/useFavorites';
import type { Recipe } from '@/types/recipe';

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

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
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                <Heart className="h-8 w-8 text-red-500 mr-3 fill-red-500" />
                我的收藏
              </h1>
              <p className="text-gray-600 mt-1">
                共收藏了 {favoriteRecipes.length} 道菜谱
              </p>
            </div>
            <div className="flex gap-2">
              <Link to="/">
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  返回首页
                </Button>
              </Link>
              <Link to="/recipes">
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  浏览菜谱
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {favoriteRecipes.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">还没有收藏任何菜谱</h3>
            <p className="text-gray-500 mb-6">去发现一些美味的菜谱并收藏它们吧！</p>
            <Link to="/recipes">
              <Button className="bg-green-600 hover:bg-green-700">
                浏览菜谱
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteRecipes.map((recipe) => (
              <Card key={recipe.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                <Link to={`/recipe/${recipe.id}`}>
                  <div className="relative">
                    <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden">
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
                        <ChefHat className="h-12 w-12 text-green-600" />
                      </div>
                    </div>
                    {recipe.isSignature && (
                      <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-xs">
                        招牌
                      </Badge>
                    )}
                  </div>
                </Link>
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <Link to={`/recipe/${recipe.id}`}>
                      <CardTitle className="text-lg hover:text-green-600 transition-colors">
                        {recipe.name}
                      </CardTitle>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(recipe.id);
                      }}
                      className="p-1 h-8 w-8"
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          isFavorite(recipe.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-400 hover:text-red-500'
                        }`} 
                      />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {recipe.cookingTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {recipe.servings}人份
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge className={getDifficultyColor(recipe.difficulty)} variant="secondary">
                      {getDifficultyText(recipe.difficulty)}
                    </Badge>
                    <Link to={`/recipe/${recipe.id}`}>
                      <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 text-xs">
                        查看详情
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;