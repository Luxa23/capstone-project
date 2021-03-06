import create from 'zustand';
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

        updateRecipe: currentRecipe => {
          set(state => {
            return {
              recipeList: state.recipeList.map(recipe =>
                recipe.id === currentRecipe.id
                  ? { ...recipe, ...currentRecipe }
                  : recipe
              ),
            };
          });
        },

        toggleIsLiked: id => {
          set(state => {
            return {
              recipeList: state.recipeList.map(recipe =>
                recipe.id === id
                  ? {
                      ...recipe,
                      isLiked: !recipe.isLiked,
                    }
                  : recipe
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
