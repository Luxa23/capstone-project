import { StyledHeader, StyledA, StyledButtonIcon } from './StyledComponents';
import Penicon from '../public/penicon.svg';
import Arrowleft from '../public/arrowleft.svg';
import Link from 'next/link';
import useStore from '../hooks/useStore';

export default function Header({ id }) {
  const recipeList = useStore(state => state.recipeList);
  const recipe = recipeList.find(recipe => recipe.id === id) || {};

  return (
    <StyledHeader>
      <div>
        <Link passHref href="/">
          <StyledA>
            <Arrowleft width="20px" height="20px" />
            back
          </StyledA>
        </Link>
      </div>
      <StyledButtonIcon>
        <Penicon width="20px" height="20px" />
      </StyledButtonIcon>
      <h1>{recipe.recipeTitle}</h1>
    </StyledHeader>
  );
}
