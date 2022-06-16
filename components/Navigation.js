import { StyledNavigation } from './StyledComponents';

import Link from 'next/link';
import HomeIcon from '../public/homeicon.svg';
import StarIcon from '../public/starIcon.svg';
import PlusIcon from '../public/plusicon.svg';

export default function Navigation() {
  return (
    <>
      <StyledNavigation>
        <button>
          <Link passHref href="/">
            <HomeIcon width="50px" height="50px" />
          </Link>
        </button>
        <button>
          <Link passHref href="/new-recipe">
            <PlusIcon width="50px" height="50px" />
          </Link>
        </button>
        <button>
          <Link passHref href="/favorite-recipes">
            <StarIcon width="50px" height="50px" />
          </Link>
        </button>
      </StyledNavigation>
    </>
  );
}