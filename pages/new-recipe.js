import RecipeForm from '../components/RecipeForm';
import Image from 'next/image';
import StyledA from '../components/StyledComponents/StyledA';
import Link from 'next/link';

export default function NewRecipe() {
  return (
    <>
      <Link passHref href="/">
        <StyledA>
          <Image src={'/arrow-left.svg'} width="20px" height="20px" />
          back
        </StyledA>
      </Link>

      <RecipeForm />
    </>
  );
}
