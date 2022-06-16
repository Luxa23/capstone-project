import {
  StyledPageContainer,
  StyledHeader,
  StyledHeaderIcons,
  StyledA,
  StyledUl,
} from '../components/StyledComponents';
import Link from 'next/link';
import ArrowLeft from '../public/arrowleft.svg';
import ListEntry from '../components/ListEntry';
import useStore from '../hooks/useStore';
import Navigation from '../components/Navigation';

export default function FavoriteRecipes() {
  const likedRecipeList = useStore(state =>
    state.recipeList.filter(recipe => recipe.isLiked)
  );

  return (
    <StyledPageContainer>
      <StyledHeader>
        <StyledHeaderIcons>
          <Link passHref href="/">
            <StyledA>
              <ArrowLeft width="20px" height="20px" />
              back
            </StyledA>
          </Link>
        </StyledHeaderIcons>
        <h1>Favorite recipes</h1>
      </StyledHeader>

      <StyledUl>
        {likedRecipeList.map(recipe => {
          return (
            <ListEntry
              id={recipe.id}
              key={recipe.id}
              recipe={recipe}
              isActive={recipe.isLiked}
            >
              {recipe.recipeTitle}
            </ListEntry>
          );
        })}
      </StyledUl>
      <Navigation />
    </StyledPageContainer>
  );
}
