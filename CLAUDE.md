# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **老乡鸡菜谱网站 (Lao Xiang Ji Recipe Website)** - a recipe browsing application built with React, TypeScript, and Vite. The application showcases 229 recipes across 5 categories with search, filtering, and favorites functionality.

**Important Context:**
- This is a Miaoda (秒哒) generated application from https://www.miaoda.cn
- The project uses a custom Miaoda plugin (`miaoda-sc-plugin`) for development
- App ID: `app-6cxbs0ad5og1` (defined in `.env`)

## Development Commands

**Linting (Primary Command):**
```bash
npm run lint
```
This runs three checks:
1. `tsgo -p tsconfig.check.json` - TypeScript type checking
2. `biome lint --only=correctness/noUndeclaredDependencies` - Dependency validation
3. `ast-grep scan` - Custom AST-based linting (rules in `./rules/` directory)

**Note:** `npm run dev` and `npm run build` are intentionally disabled in this codebase. Only use `npm run lint` for validation.

## Architecture Overview

### Core Recipe System
- **Data Source:** All 229 recipes are stored in `src/data/recipes.ts` as a static TypeScript array
- **Type Definitions:** `src/types/recipe.ts` defines the `Recipe`, `Ingredient`, `CookingStep`, and `RecipeCategory` interfaces
- **Categories:** 5 recipe categories - signature (招牌菜), homestyle (家常菜), soup (汤品), chicken (鸡肉料理), vegetable (素食)

### State Management
- Uses **localStorage** for favorites persistence via `src/hooks/useFavorites.ts`
- No global state management library - relies on React hooks and local state
- `FAVORITES_KEY = 'recipe-favorites'` stores array of recipe IDs

### Routing Structure
Defined in `src/routes.tsx`:
- `/` - Home page with featured recipes and categories
- `/recipes` - Full recipe list with search and filters
- `/favorites` - User's saved favorite recipes
- `/recipe/:id` - Individual recipe detail page (not visible in navigation)

### Component Architecture
- **Layout Components:** `Header` and `Footer` in `src/components/common/`
- **UI Components:** Reusable UI elements in `src/components/ui/` (Radix UI based)
- **Page Components:** Main views in `src/pages/`
- **Path Alias:** `@/` maps to `src/` directory

### Authentication (Currently Disabled)
- Code includes commented-out `miaoda-auth-react` integration
- When enabled, wrap app with `<AuthProvider client={supabase}>` and use `<RequireAuth whiteList={[...]}>` for route protection
- AuthProvider **must be inside Router** (it uses `useNavigate`)

## Key Technical Details

### Recipe Data Structure
Each recipe includes:
- Basic info: name, description, category, cooking time, difficulty, servings
- Ingredients: with name, amount, and unit
- Steps: numbered instructions with optional duration/temperature
- Tips: cooking advice array
- Image: CDN URLs from `miaoda-img.cdn.bcebos.com` or `miaoda-site-img.cdn.bcebos.com`
- Signature flag: marks featured recipes

### Search & Filter Implementation
- Search across: recipe name, description, and ingredient names (case-insensitive)
- Filter by: category, difficulty level
- Implemented in `RecipeList.tsx` using local state and array filtering

### Styling
- **Tailwind CSS** with custom config in `tailwind.config.js`
- **Primary Color:** Old Countryside Chicken brand green
- **UI Library:** Radix UI components (accordion, dialog, dropdown, etc.)
- **Animations:** `tailwindcss-animate` plugin
- **Responsive:** Mobile-first design with breakpoint utilities

### Build Tools
- **Vite** with `@vitejs/plugin-react` for fast development
- **SVG Support:** `vite-plugin-svgr` for importing SVGs as React components
- **TypeScript Config:** Multiple tsconfig files for different contexts:
  - `tsconfig.json` - Base config
  - `tsconfig.app.json` - Frontend code
  - `tsconfig.node.json` - Node/Vite config
  - `tsconfig.check.json` - Used by lint command

### Available APIs
Reference `api_list.md` for available Baidu AI services including:
- Web summarization, AI search, image generation
- Text-to-speech, speech recognition
- Face recognition and management
- OCR for various document types
- Translation services
- Weather and map services
- Stock market data

## Development Workflow

1. **Type Checking:** Always run `npm run lint` before committing
2. **Adding Recipes:** Edit `src/data/recipes.ts` and follow existing recipe structure
3. **New Routes:** Add to `src/routes.tsx` array with name, path, element, and optional visibility
4. **Custom Hooks:** Place in `src/hooks/` (see `useFavorites.ts` as example)
5. **Utility Functions:** Add to `src/lib/utils.ts`

## Recipe Content Standards

From `RECIPE_AUDIT.md`, each recipe must include:
- ✅ Name and description
- ✅ Cooking time and difficulty
- ✅ Servings count
- ✅ Detailed ingredients with amounts
- ✅ Step-by-step instructions
- ✅ Cooking tips
- ✅ High-quality food image
- ✅ Category classification

**Current Status:** 10 complete recipes, 219 remaining to reach 229 total target.