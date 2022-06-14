import ListEntry from '../components/ListEntry';
import {
  StyledButton,
  StyledUl,
  StyledTextHome,
  StyledSearch,
  StyledPageContainerHome,
} from '../components/StyledComponents';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import useHydration from '../hooks/useHydration';
import useStore from '../hooks/useStore';
import PlusIcon from '../public/plusicon.svg';
import HeaderHome from '../components/HeaderHome';

export default function Home() {
  const recipeList = useStore(state => state.recipeList);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const hydrated = useHydration();

  const foundRecipes = recipeList.filter(recipe => {
    if (searchTerm === '') {
      return null;
    } else if (
      recipe.recipeTitle.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return recipe;
    }
  });

  useEffect(() => {
    if (recipeList.length === 0 && searchTerm === '') {
      return setMessage(
        'Welcome to my app my recipes. Add your first recipe with the plus-icon.'
      );
    }

    if (searchTerm !== '' && foundRecipes.length === 0) {
      return setMessage(
        'Es wurden leider keine Einträge gefunden. Es werden alle Einträge angezeigt.'
      );
    }
    setMessage('');
  }, [searchTerm, recipeList, foundRecipes]);

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
            {message === '' ? null : <StyledTextHome>{message}</StyledTextHome>}

            <StyledUl>
              {foundRecipes.length > 0
                ? foundRecipes?.map(recipe => {
                    return (
                      <ListEntry id={recipe.id} key={recipe.id} recipe={recipe}>
                        {recipe.recipeTitle}
                      </ListEntry>
                    );
                  })
                : recipeList.map(recipe => {
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
