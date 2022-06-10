import {
  StyledHeader,
  StyledA,
  StyledPageContainer,
  StyledRecipeDetails,
  StyledButton,
} from '../../components/StyledComponents';
import Link from 'next/link';
import Arrowleft from '../../public/arrowleft.svg';
import { useRouter } from 'next/router';
import ingredients from '../../public/ingredients.jpg';
import useStore from '../../hooks/useStore';

const RecipeDetailPage = () => {
  const recipeList = useStore(state => state.recipeList);

  const router = useRouter();
  const { id } = router.query;

  const recipe = recipeList.find(recipe => recipe.id === id) || {};

  function origin() {
    switch (recipe.origin) {
      case 'Book':
        return (
          <StyledRecipeDetails>
            <p>Autor: {recipe.bookAuthor}</p>
            <h3>Buch: {recipe.bookTitle}</h3>
            <p>Seite {recipe.bookPage}</p>
          </StyledRecipeDetails>
        );
      case 'Website':
        return (
          <StyledRecipeDetails>
            <p>Website: {recipe.websiteName}</p>
            <Link passHref href={recipe.websiteUrl}>
              <StyledButton>Visit website</StyledButton>
            </Link>
          </StyledRecipeDetails>
        );
      case 'Other':
        return (
          <StyledRecipeDetails>
            <p>Quelle: {recipe.otherSource}</p>
            <p>Aufbewahrungsort: {recipe.otherLocation}</p>
          </StyledRecipeDetails>
        );

      default:
        return null;
    }
  }

  return (
    <div>
      <StyledPageContainer>
        <StyledHeader>
          <Link passHref href="/">
            <StyledA>
              <Arrowleft width="20px" height="20px" />
              back
            </StyledA>
          </Link>
          <h1>{recipe.recipeTitle}</h1>
        </StyledHeader>

        {origin()}
      </StyledPageContainer>
    </div>
  );
};

export default RecipeDetailPage;
