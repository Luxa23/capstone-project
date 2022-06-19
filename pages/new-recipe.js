import {
  StyledA,
  StyledHeader,
  StyledPageContainer,
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
            zurück
          </StyledA>
        </Link>
        <h1>Neues Rezept</h1>
      </StyledHeader>
      <RecipeForm />
      <Navigation />
    </StyledPageContainer>
  );
}
