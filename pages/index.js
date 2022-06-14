import ListEntry from '../components/ListEntry';
import {
  StyledButton,
  StyledUl,
  StyledTextHome,
  StyledSearch,
  StyledPageContainerHome,
} from '../components/StyledComponents';

import { useState } from 'react';
import Link from 'next/link';
import useHydration from '../hooks/useHydration';
import useStore from '../hooks/useStore';
import PlusIcon from '../public/plusicon.svg';
import HeaderHome from '../components/HeaderHome';

export default function Home() {
  const recipeList = useStore(state => state.recipeList);
  const [searchTerm, setSearchTerm] = useState('');
  const hydrated = useHydration();
  return (
    <>
      {hydrated && (
        <>
          <StyledPageContainerHome>
            <HeaderHome />

            <StyledSearch>
              <input
                type="text"
                placeholder="Search..."
                onChange={event => {
                  setSearchTerm(event.target.value);
                }}
              ></input>
            </StyledSearch>

            {recipeList.length === 0 && (
              <StyledTextHome>
                Welcome to my app &quot;my recipes&quot;. Add your first recipe
                with the plus-icon.
              </StyledTextHome>
            )}
            <StyledUl>
              {recipeList
                .filter(val => {
                  if (searchTerm == '') {
                    return val;
                  } else if (
                    val.recipeTitle
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map(recipe => {
                  return (
                    <ListEntry id={recipe.id} key={recipe.id} recipe={recipe}>
                      {recipe.recipeTitle}
                    </ListEntry>
                  );
                })}
            </StyledUl>

            <Link passHref href="/new-recipe">
              <StyledButton className="button--plusicon">
                <PlusIcon width="75px" height="75px" />
              </StyledButton>
            </Link>
          </StyledPageContainerHome>
        </>
      )}
    </>
  );
}
