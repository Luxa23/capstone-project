import {
  StyledPageContainer,
  StyledRecipeDetails,
  StyledButton,
  StyledHeader,
  StyledHeaderIcons,
  StyledA,
  StyledButtonIcon,
} from '../../components/StyledComponents';
import PenIcon from '../../public/penicon.svg';
import ArrowLeft from '../../public/arrowleft.svg';

import Link from 'next/link';

import { useRouter } from 'next/router';
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
            {recipe.processing === 'Cooking' && <p>Kochrezept</p>}
            {recipe.processing === 'Baking' && <p>Backrezept</p>}
            <p>Autor: {recipe.bookAuthor}</p>
            <h3>Buch: {recipe.bookTitle}</h3>
            <p>Seite {recipe.bookPage}</p>
          </StyledRecipeDetails>
        );
      case 'Website':
        return (
          <StyledRecipeDetails>
            {recipe.processing === 'Cooking' && <p>Kochrezept</p>}
            {recipe.processing === 'Baking' && <p>Backrezept</p>}
            <p>Website: {recipe.websiteName}</p>
            <Link passHref href={recipe.websiteUrl}>
              <StyledButton>Zur Website</StyledButton>
            </Link>
          </StyledRecipeDetails>
        );
      case 'Other':
        return (
          <StyledRecipeDetails>
            {recipe.processing === 'Cooking' && <p>Kochrezept</p>}
            {recipe.processing === 'Baking' && <p>Backrezept</p>}
            <p>Quelle:</p>
            <p>{recipe.otherSource}</p>
            <p>Aufbewahrungsort:</p>
            <p>{recipe.otherLocation}</p>
            <p>Zutaten:</p>
            <p> {recipe.otherIngredients}</p>
            <p>Zubereitung:</p>
            <p> {recipe.otherInstructions}</p>
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
          <StyledHeaderIcons>
            <>
              <Link passHref href="/">
                <StyledA>
                  <ArrowLeft width="20px" height="20px" />
                  back
                </StyledA>
              </Link>
              <Link passHref href={`/edit-recipe/${recipe.id}`}>
                <StyledButtonIcon id={recipe.id} key={recipe.id}>
                  <PenIcon width="20px" height="20px" />
                </StyledButtonIcon>
              </Link>
            </>
          </StyledHeaderIcons>
          <h1>{recipe.recipeTitle}</h1>
        </StyledHeader>
        {origin()}
      </StyledPageContainer>
    </div>
  );
};

export default RecipeDetailPage;
