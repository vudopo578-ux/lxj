import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, Users, Heart, ArrowLeft, ChefHat, Lightbulb, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getRecipeById } from '@/data/recipes';
import { useFavorites } from '@/hooks/useFavorites';
import type { Recipe } from '@/types/recipe';

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const recipe = id ? getRecipeById(id) : null;

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <ChefHat className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">菜谱不存在</h2>
          <p className="text-gray-500 mb-6">抱歉，您查找的菜谱不存在或已被删除</p>
          <Link to="/recipes">
            <Button className="bg-green-600 hover:bg-green-700">
              返回菜谱列表
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="text-green-600 border-green-600 hover:bg-green-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => toggleFavorite(recipe.id)}
                className={`${
                  isFavorite(recipe.id)
                    ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                    : 'text-gray-600 hover:text-red-600 hover:border-red-200'
                }`}
              >
                <Heart 
                  className={`h-4 w-4 mr-2 ${
                    isFavorite(recipe.id) ? 'fill-red-500' : ''
                  }`} 
                />
                {isFavorite(recipe.id) ? '已收藏' : '收藏'}
              </Button>
              <Link to="/recipes">
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  浏览更多
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-800">{recipe.name}</h1>
            {recipe.isSignature && (
              <Badge className="bg-red-500 hover:bg-red-600">
                <Star className="h-3 w-3 mr-1" />
                招牌菜
              </Badge>
            )}
          </div>
          <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
          
          {/* Recipe Image */}
          <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden mb-6">
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
              <ChefHat className="h-24 w-24 text-green-600" />
            </div>
          </div>

          {/* Recipe Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">烹饪时间</div>
                <div className="font-semibold">{recipe.cookingTime}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">份量</div>
                <div className="font-semibold">{recipe.servings} 人份</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <ChefHat className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">难度</div>
                <Badge className={getDifficultyColor(recipe.difficulty)}>
                  {getDifficultyText(recipe.difficulty)}
                </Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Heart className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-500">收藏状态</div>
                <div className="font-semibold">
                  {isFavorite(recipe.id) ? '已收藏' : '未收藏'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">食材清单</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{ingredient.name}</span>
                      <span className="text-gray-600 font-medium">
                        {ingredient.amount} {ingredient.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cooking Steps */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">制作步骤</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recipe.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {step.stepNumber}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 mb-2">{step.instruction}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          {step.duration && (
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {step.duration}
                            </div>
                          )}
                          {step.temperature && (
                            <div className="flex items-center">
                              <span className="mr-1">🔥</span>
                              {step.temperature}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cooking Tips */}
        {recipe.tips.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                烹饪小贴士
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipe.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={() => toggleFavorite(recipe.id)}
            className={`${
              isFavorite(recipe.id)
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            <Heart className={`h-4 w-4 mr-2 ${isFavorite(recipe.id) ? 'fill-white' : ''}`} />
            {isFavorite(recipe.id) ? '取消收藏' : '收藏菜谱'}
          </Button>
          <Link to="/recipes">
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
              浏览更多菜谱
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;