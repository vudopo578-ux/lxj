import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'recipe-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
        setFavorites([]);
      }
    }
  }, []);

  const addToFavorites = (recipeId: string) => {
    const newFavorites = [...favorites, recipeId];
    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (recipeId: string) => {
    const newFavorites = favorites.filter(id => id !== recipeId);
    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  const toggleFavorite = (recipeId: string) => {
    if (favorites.includes(recipeId)) {
      removeFromFavorites(recipeId);
    } else {
      addToFavorites(recipeId);
    }
  };

  const isFavorite = (recipeId: string) => {
    return favorites.includes(recipeId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
};