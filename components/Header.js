import {
  StyledHeader,
  StyledA,
  StyledHeaderIcons,
  StyledButtonIcon,
} from './StyledComponents';

import Penicon from '../public/penicon.svg';
import Arrowleft from '../public/arrowleft.svg';
import Link from 'next/link';
import useStore from '../hooks/useStore';

export default function Header({ id }) {
  const recipeList = useStore(state => state.recipeList);

  const recipe = recipeList.find(recipe => recipe.id === id) || {};

  return (
    <StyledHeader>
      <StyledHeaderIcons>
        <Link passHref href="/">
          <StyledA>
            <Arrowleft width="20px" height="20px" />
            back
          </StyledA>
        </Link>
        <Link passHref href="/edit-recipe/${recipe.id}">
          <StyledButtonIcon id={recipe.id} key={recipe.id}>
            <Penicon width="20px" height="20px" />
          </StyledButtonIcon>
        </Link>
      </StyledHeaderIcons>
      <h1>{recipe.recipeTitle}</h1>
    </StyledHeader>
  );
}
