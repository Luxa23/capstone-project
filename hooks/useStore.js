import create from 'zustand';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';

const toastTypes = {
  ADD: 1,
};

const useStore = create(
  persist(
    set => {
      return {
        recipeList: [],
        toasts: [
          {
            id: toastTypes.ADD,
            shown: false,
            title: 'Saved',
            description: 'We saved your recipe',
          },
        ],

        addRecipe: recipe => {
          set(state => {
            state.toggleToast(toastTypes.ADD);
            return {
              recipeList: [
                {
                  id: nanoid(),
                  ...recipe,
                },
                ...state.recipeList,
              ],
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

        editRecipe: currentRecipe => {
          set(state => {
            return {
              recipeList: state.recipeList.map(recipe =>
                recipe.id === currentRecipe.id ? currentRecipe : recipe
              ),
            };
          });
        },

        toggleToast: toastId => {
          set(state => {
            return {
              toasts: state.toasts.map(toast =>
                toast.id === toastId ? { ...toast, shown: true } : toast
              ),
            };
          });
          setTimeout(() => {
            set(state => {
              return {
                toasts: state.toasts.map(toast => ({ ...toast, shown: false })),
              };
            });
          }, 3000);
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
