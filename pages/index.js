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
  const [searchTerm, setSearchTerm] = useState('');
  const hydrated = useHydration();
  const hasRecipes = recipeList.length > 0;
  const hasFound = recipesToShow.length > 0;

  // const recipeTitlesList = recipeList.map(recipeTitle => {
  //   return recipeTitle.recipeTitle;
  // });
  // const [sortList, setSortList] = useState(recipeTitlesList.sort());

  // console.log(sortList);

  function handleSorting(asc = true) {
    const sorted = [...recipesToShow].sort((a, b) => {
      if (asc) {
        return a.recipeTitle.localeCompare(b.recipeTitle, 'de', {
          sensitivity: 'base',
        });
      } else {
        return b.recipeTitle.localeCompare(a.recipeTitle, 'de', {
          sensitivity: 'base',
        });
      }
    });
    setRecipesToShow(sorted);
  }

  useEffect(() => {
    setRecipesToShow(
      recipeList.filter(recipe =>
        searchTerm === ''
          ? true
          : recipe.recipeTitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [recipeList, searchTerm]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
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
                placeholder="Suche..."
                onChange={handleSearch}
              ></input>
            </StyledSearch>

            <button onClick={handleSorting}>Sortieren A-Z</button>
            <button
              onClick={() => {
                handleSorting(false);
              }}
            >
              Sortieren Z-A
            </button>

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
