import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Clock, Users, Heart, ChefHat, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { recipes, categories, searchRecipes, getRecipesByCategory } from '@/data/recipes';
import { useFavorites } from '@/hooks/useFavorites';
import type { Recipe } from '@/types/recipe';

const RecipeList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [sortBy, setSortBy] = useState('name');
  
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    let result = recipes;

    // 分类筛选
    if (selectedCategory !== 'all') {
      result = getRecipesByCategory(selectedCategory);
    }

    // 搜索筛选
    if (searchQuery.trim()) {
      result = searchRecipes(searchQuery).filter(recipe => 
        selectedCategory === 'all' || recipe.category === selectedCategory
      );
    }

    // 排序
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'cookingTime':
          return parseInt(a.cookingTime) - parseInt(b.cookingTime);
        case 'difficulty':
          const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        default:
          return 0;
      }
    });

    setFilteredRecipes(result);
  }, [searchQuery, selectedCategory, sortBy]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('search', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    setSearchParams(params);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('search', searchQuery);
    if (category !== 'all') params.set('category', category);
    setSearchParams(params);
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

  const getCategoryName = (categoryId: string) => {
    if (categoryId === 'all') return '全部菜谱';
    return categories.find(cat => cat.id === categoryId)?.name || '未知分类';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">菜谱大全</h1>
              <p className="text-gray-600 mt-1">
                共找到 {filteredRecipes.length} 道菜谱
                {selectedCategory !== 'all' && ` · ${getCategoryName(selectedCategory)}`}
              </p>
            </div>
            <Link to="/">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                返回首页
              </Button>
            </Link>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="搜索菜谱名称或食材..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="选择分类" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部分类</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">按名称排序</SelectItem>
                <SelectItem value="cookingTime">按时间排序</SelectItem>
                <SelectItem value="difficulty">按难度排序</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
              搜索
            </Button>
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16">
            <ChefHat className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">没有找到相关菜谱</h3>
            <p className="text-gray-500">试试调整搜索条件或浏览其他分类</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
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

export default RecipeList;