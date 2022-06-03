import RecipeForm from '../components/RecipeForm';
import StyledA from '../components/StyledComponents/StyledA';
import { StyledPageContainer } from '../components/StyledComponents';
import Link from 'next/link';
import Arrowleft from '../public/arrowleft.svg';

export default function NewRecipe() {
  return (
    <>
      <StyledPageContainer>
        <Link passHref href="/">
          <StyledA>
            <Arrowleft width="20px" height="20px" />
            back
          </StyledA>
        </Link>

        <RecipeForm />
      </StyledPageContainer>
    </>
  );
}
