import { useRouter } from 'next/router';
import useStore from '../../hooks/useStore';

const RecipeDetailPage = () => {
  const recipeList = useStore(state => state.recipeList);

  const router = useRouter();
  const { id } = router.query;

  const recipe = recipeList.find(recipe => recipe.id === id);
  console.log(recipe.origin);

  function origin() {
    switch (recipe.origin) {
      case 'Book':
        return <div>buch</div>;
      case 'Website':
        return <div>website</div>;
      case 'Other':
        return <div>other</div>;

      default:
        return null;
    }
  }

  return (
    <div>
      {origin()}
      <p>recipe id: {id}</p>
    </div>
  );
};

export default RecipeDetailPage;
