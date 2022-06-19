import {
  StyledPageContainer,
  StyledRecipeDetails,
  StyledButton,
  StyledHeader,
  StyledHeaderIcons,
  StyledA,
  StyledButtonIcon,
  StyledList,
} from '../../components/StyledComponents';
import Link from 'next/link';
import Image from 'next/image';
import PenIcon from '../../public/penicon.svg';
import ArrowLeft from '../../public/arrowleft.svg';
import bakingPic from '../../public/baking-recipe-muffins-medium.jpg';
import cookingPic from '../../public/cooking-recipe-ingredients-medium.jpg';
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
            {recipe.processing === 'Cooking' && (
              <Image src={cookingPic} alt="Cooking ingredients" />
            )}
            {recipe.processing === 'Baking' && (
              <Image src={bakingPic} alt="Baking-muffins" />
            )}
            <h1>{recipe.recipeTitle}</h1>
            <StyledList>
              <li>Autor:</li>
              <li>{recipe.bookAuthor}</li>
              <li>Buch:</li>
              <li>{recipe.bookTitle}</li>
              <li>Seite {recipe.bookPage}</li>
            </StyledList>
          </StyledRecipeDetails>
        );
      case 'Website':
        return (
          <StyledRecipeDetails>
            {recipe.processing === 'Cooking' && (
              <Image src={cookingPic} alt="Cooking ingredients" />
            )}
            {recipe.processing === 'Baking' && (
              <Image src={bakingPic} alt="Baking-muffins" />
            )}
            <h1>{recipe.recipeTitle}</h1>
            <StyledList>
              <li>Website:</li>
              <li>{recipe.websiteName}</li>
            </StyledList>

            <Link passHref href={recipe.websiteUrl}>
              <StyledButton>Zur Website</StyledButton>
            </Link>
          </StyledRecipeDetails>
        );
      case 'Other':
        return (
          <StyledRecipeDetails>
            {recipe.processing === 'Cooking' && (
              <Image src={cookingPic} alt="Cooking ingredients" />
            )}
            {recipe.processing === 'Baking' && (
              <Image src={bakingPic} alt="Baking-muffins" />
            )}
            <h1>{recipe.recipeTitle}</h1>
            <StyledList>
              <li>Quelle:</li>
              <li>{recipe.otherSource}</li>
              <li>Aufbewahrungsort:</li>
              <li>{recipe.otherLocation}</li>
              <li>Zutaten:</li>
              <li className="li--structure">{recipe.otherIngredients}</li>
              <li>Zubereitung:</li>
              <li className="li--structure">{recipe.otherInstructions}</li>
            </StyledList>
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
        </StyledHeader>
        {origin()}
      </StyledPageContainer>
    </div>
  );
};

export default RecipeDetailPage;
