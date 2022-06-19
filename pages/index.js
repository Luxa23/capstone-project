import ListEntry from '../components/ListEntry';
import {
  StyledPageContainerHome,
  StyledSearch,
  StyledTextHome,
  StyledUl,
} from '../components/StyledComponents';

import { useState, useEffect } from 'react';
import useHydration from '../hooks/useHydration';
import useStore from '../hooks/useStore';
import HeaderHome from '../components/HeaderHome';
import Navigation from '../components/Navigation';

export default function Home() {
  const recipeList = useStore(state => state.recipeList);
  const [recipesToShow, setRecipesToShow] = useState([]);
  const hydrated = useHydration();
  const hasRecipes = recipeList.length > 0;
  const hasFound = recipesToShow.length > 0;

  useEffect(() => {
    setRecipesToShow(recipeList);
  }, [recipeList]);

  function handleSearch(event) {
    const searchTerm = event.target.value;
    setRecipesToShow(
      recipeList.filter(recipe =>
        recipe.recipeTitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

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
                onChange={handleSearch}
              ></input>
            </StyledSearch>

            {!hasFound && hasRecipes && (
              <StyledTextHome>
                Es wurden keine Einträge gefunden.
              </StyledTextHome>
            )}
            {!hasRecipes && (
              <StyledTextHome>
                Willkommen zu &quot;my recipes&quot;. Füge dein erstes Rezept
                mit dem Plus hinzu.
              </StyledTextHome>
            )}

            <StyledUl>
              {recipesToShow.map(recipe => {
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
          </StyledPageContainerHome>
        </>
      )}
    </>
  );
}
