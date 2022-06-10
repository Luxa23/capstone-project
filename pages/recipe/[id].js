import {
  StyledPageContainer,
  StyledRecipeDetails,
  StyledButton,
} from '../../components/StyledComponents';
import Link from 'next/link';

import { useRouter } from 'next/router';
import useStore from '../../hooks/useStore';

import Header from '../../components/Header';

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
        <Header />
        {origin()}
      </StyledPageContainer>
    </div>
  );
};

export default RecipeDetailPage;
