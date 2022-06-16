import { StyledNavigation } from './StyledComponents';

import Link from 'next/link';
import HomeIcon from '../public/homeicon.svg';
import StarIcon from '../public/staricon.svg';
import PlusIcon from '../public/plusicon.svg';

export default function Navigation() {
  return (
    <>
      <StyledNavigation>
        <button>
          <Link passHref href="/">
            <HomeIcon width="40px" height="40px" />
          </Link>
        </button>
        <button>
          <Link passHref href="/new-recipe">
            <PlusIcon width="40px" height="40px" />
          </Link>
        </button>
        <button>
          <Link passHref href="/favorite-recipes">
            <StarIcon width="40px" height="40px" />
          </Link>
        </button>
      </StyledNavigation>
    </>
  );
}
