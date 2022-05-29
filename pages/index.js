import ListEntry from '../components/ListEntry';
import RecipeForm from '../components/RecipeForm';

export default function Home() {
  return (
    <>
      <ul>
        <ListEntry>Strawberry Cake</ListEntry>
        <ListEntry>Chocolate Muffins</ListEntry>
        <ListEntry>Coffee Cake</ListEntry>
      </ul>

      <RecipeForm />
    </>
  );
}
