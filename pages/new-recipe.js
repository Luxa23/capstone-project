import {
  StyledPageContainer,
  StyledHeader,
  StyledA,
} from '../components/StyledComponents';
import RecipeForm from '../components/RecipeForm';
import Link from 'next/link';
import Arrowleft from '../public/arrowleft.svg';
import Navigation from '../components/Navigation';

export default function NewRecipe() {
  return (
    <StyledPageContainer>
      <StyledHeader>
        <Link passHref href="/">
          <StyledA>
            <Arrowleft width="20px" height="20px" />
            back
          </StyledA>
        </Link>
        <h1>Add new recipe</h1>
      </StyledHeader>
      <RecipeForm />
      <Navigation />
    </StyledPageContainer>
  );
}
