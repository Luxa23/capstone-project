import RecipeForm from '../components/RecipeForm';
import Image from 'next/image';
import StyledImageBack from '../components/StyledComponents/StyledImageBack';
import Link from 'next/link';

export default function NewRecipe() {
  return (
    <>
      <Link passHref href="/">
        <StyledImageBack>
          <Image src={'/arrow-left.svg'} width="20px" height="20px" />
        </StyledImageBack>
      </Link>

      <RecipeForm />
    </>
  );
}
