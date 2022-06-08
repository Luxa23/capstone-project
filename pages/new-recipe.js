import {
  StyledH1,
  StyledPageContainer,
  StyledHeader,
} from '../components/StyledComponents';
import RecipeForm from '../components/RecipeForm';
import StyledA from '../components/StyledComponents/StyledA';
import Link from 'next/link';
import Arrowleft from '../public/arrowleft.svg';

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
        <StyledH1>Add new recipe</StyledH1>
      </StyledHeader>
      <RecipeForm />
    </StyledPageContainer>
  );
}
