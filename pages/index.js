import ListEntry from '../components/ListEntry';
import RecipeForm from '../components/RecipeForm';

import useStore from '../hooks/useStore';

export default function Home() {
  const recipeList = useStore(state => state.recipeList);
  return (
    <>
      <ul>
        {recipeList.map(recipeName => {
          return <ListEntry>{recipeName.recipeTitle}</ListEntry>;
        })}
      </ul>

      <RecipeForm />
    </>
  );
}
