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
        deleteRecipe: id => {
          set(state => {
            return {
              recipeList: state.recipeList.filter(
                recipeTitle_ => recipeTitle_.id !== id
              ),
            };
          });
        },
      };
    },
    {
      name: 'recipeList',
      getStorage: () => ({
        setItem: (...args) => window.localStorage.setItem(...args),
        getItem: async (...args) =>
          new Promise(resolve => {
            if (typeof window === 'undefined') {
              resolve(null);
            } else {
              setTimeout(() => {
                resolve(window.localStorage.getItem(...args));
              }, 0);
            }
          }),
        removeItem: (...args) => window.localStorage.removeItem(...args),
      }),
    }
  )
);

export default useStore;
