import {
  StyledPageContainer,
  StyledHeader,
  StyledA,
  StyledHeaderIcons,
  StyledButtonIcon,
} from '../../components/StyledComponents';
import Link from 'next/link';
import Arrowleft from '../../public/arrowleft.svg';
import Tickicon from '../../public/tickicon.svg';

export default function EditRecipe() {
  return (
    <>
      <StyledPageContainer>
        <StyledHeader>
          <StyledHeaderIcons>
            <Link passHref href="/">
              <StyledA>
                <Arrowleft width="20px" height="20px" />
                back
              </StyledA>
            </Link>
            <Link passHref href="/">
              <StyledButtonIcon>
                <Tickicon width="20px" height="20px" />
              </StyledButtonIcon>
            </Link>
          </StyledHeaderIcons>
          <h1>Edit recipe</h1>
        </StyledHeader>
      </StyledPageContainer>
    </>
  );
}
