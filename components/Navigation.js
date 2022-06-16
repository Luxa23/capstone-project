import { StyledA, StyledNavigation } from './StyledComponents';
import { useRouter } from 'next/router';

import Link from 'next/link';
import HomeIcon from '../public/homeicon.svg';
import StarIcon from '../public/starIcon.svg';
import PlusIcon from '../public/plusicon.svg';

export default function Navigation(isActive) {
  const router = useRouter();
  return (
    <>
      <StyledNavigation>
        <Link passHref href="/">
          <StyledA className="link--active" isActive={router.pathname === '/'}>
            <HomeIcon width="50px" height="50px" />
          </StyledA>
        </Link>

        <Link passHref href="/new-recipe">
          <StyledA
            className="link--active"
            isActive={router.pathname === '/new-recipe'}
          >
            <PlusIcon width="50px" height="50px" />
          </StyledA>
        </Link>

        <Link passHref href="/favorite-recipes">
          <StyledA
            className="link--active"
            isActive={router.pathname === '/favorite-recipes'}
          >
            <StarIcon width="50px" height="50px" />
          </StyledA>
        </Link>
      </StyledNavigation>
    </>
  );
}
