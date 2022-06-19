import {
  StyledA,
  StyledHeader,
  StyledHeaderIcons,
  StyledPageContainer,
} from '../../components/StyledComponents';
import Link from 'next/link';
import ArrowLeft from '../../public/arrowleft.svg';
import RecipeFormEdit from '../../components/RecipeFormEdit';
import useStore from '../../hooks/useStore';
import { useRouter } from 'next/router';

export default function EditRecipe() {
  const recipeList = useStore(state => state.recipeList);

  const router = useRouter();
  const { id } = router.query;

  const recipe = recipeList.find(recipe => recipe.id === id) || {};

  return (
    <>
      <StyledPageContainer>
        <StyledHeader>
          <StyledHeaderIcons>
            <Link passHref href="/">
              <StyledA>
                <ArrowLeft width="20px" height="20px" />
                zurück
              </StyledA>
            </Link>
          </StyledHeaderIcons>
          <h1>Rezept ändern</h1>
        </StyledHeader>
        <RecipeFormEdit id={recipe.id} />
      </StyledPageContainer>
    </>
  );
}
