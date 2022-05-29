import create from 'zustand';

const useStore = create(set => {
  return {
    recipeList: [{ recipeTitle: 'Cheesecake' }, { recipeTitle: 'Carrotcake' }],
    addRecipe: recipeTitle => {
      set(state => {
        return { recipeList: [{ recipeTitle }, ...state.recipeList] };
      });
    },
  };
});

export default useStore;
