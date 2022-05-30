import create from 'zustand';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    set => {
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
    },
    { name: 'recipeList' }
  )
);

export default useStore;
