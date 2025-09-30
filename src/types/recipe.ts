export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: string;
  cookingTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  ingredients: Ingredient[];
  steps: CookingStep[];
  tips: string[];
  image: string;
  isSignature?: boolean;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface CookingStep {
  stepNumber: number;
  instruction: string;
  duration?: string;
  temperature?: string;
}

export interface RecipeCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}