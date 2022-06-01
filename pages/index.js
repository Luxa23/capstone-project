import ListEntry from '../components/ListEntry';
import { StyledImage } from '../components/StyledComponents';
import Image from 'next/image';
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
      <StyledImage>
        <Image src={'/plus-icon.svg'} width="75px" height="75px" />
      </StyledImage>
    </>
  );
}
