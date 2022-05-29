import create from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create(set => {
  return {
    recipeList: [
      { id: nanoid(), recipeTitle: 'Cheesecake' },
      { id: nanoid(), recipeTitle: 'Carrotcake' },
    ],
    addRecipe: recipeTitle => {
      set(state => {
        return {
          recipeList: [{ id: nanoid(), recipeTitle }, ...state.recipeList],
        };
      });
    },
  };
});

export default useStore;
