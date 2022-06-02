import RecipeForm from '../components/RecipeForm';
import StyledA from '../components/StyledComponents/StyledA';
import Link from 'next/link';
import Arrowleft from '../public/arrowleft.svg';

export default function NewRecipe() {
  return (
    <>
      <Link passHref href="/">
        <StyledA>
          <Arrowleft width="20px" height="20px" />
          back
        </StyledA>
      </Link>

      <RecipeForm />
    </>
  );
}
