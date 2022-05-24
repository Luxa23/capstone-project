import ListEntry from '../components/ListEntry';
import RecipeForm from '../components/recipeForm';

export default function Home() {
  return (
    <>
      <ListEntry>Strawberry Cake</ListEntry>
      <ListEntry>Muffins</ListEntry>
      <ListEntry>Coffee Cake</ListEntry>
      <RecipeForm></RecipeForm>
    </>
  );
}
