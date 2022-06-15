import {
  StyledPageContainer,
  StyledHeader,
  StyledHeaderIcons,
  StyledA,
} from '../components/StyledComponents';
import Link from 'next/link';
import ArrowLeft from '../public/arrowleft.svg';

export default function FavoriteRecipes() {
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
    </StyledPageContainer>
  );
}
