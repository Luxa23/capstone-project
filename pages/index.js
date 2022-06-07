import ListEntry from '../components/ListEntry';
import {
  StyledButton,
  StyledPageContainer,
} from '../components/StyledComponents';

import Link from 'next/link';
import useStore from '../hooks/useStore';
import Plusicon from '../public/plusicon.svg';

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
      <Link passHref href="/new-recipe">
        <StyledButton className="button--plusicon">
          <Plusicon width="75px" height="75px" />
        </StyledButton>
      </Link>
    </>
  );
}
