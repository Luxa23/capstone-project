import ListEntry from '../components/ListEntry';

import useStore from '../hooks/useStore';

export default function Home() {
  const recipeList = useStore(state => state.recipeList);
  return (
    <>
      <ul>
        {recipeList.map(recipeName => {
          return (
            <ListEntry id={recipeName.id} key={recipeName.id}>
              {recipeName.recipeTitle}
            </ListEntry>
          );
        })}
      </ul>
    </>
  );
}
