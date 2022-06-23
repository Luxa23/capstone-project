import ListEntry from '../components/ListEntry';
import {
  StyledPageContainerHome,
  StyledRadioButtonsThree,
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
  const [sort, setSort] = useState(null);
  const hydrated = useHydration();
  const hasRecipes = recipeList.length > 0;
  const hasFound = recipesToShow.length > 0;

  useEffect(() => {
    setRecipesToShow(
      recipeList
        .filter(recipe =>
          /*  TODO not necessary to compare against empty string **/

          searchTerm === ''
            ? true
            : recipe.recipeTitle
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          if (sort) {
            return a.recipeTitle.localeCompare(b.recipeTitle, 'de', {
              sensitivity: 'base',
            });
          } else if (sort === false) {
            return b.recipeTitle.localeCompare(a.recipeTitle, 'de', {
              sensitivity: 'base',
            });
          } else {
            return 0;
          }
        })
    );
  }, [recipeList, searchTerm, sort]);

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
            <div className="radio-buttons">
              <StyledRadioButtonsThree>
                <input
                  type="radio"
                  id="A-Z"
                  name="sorting"
                  value="A-Z"
                  onClick={() => {
                    setSort(true);
                  }}
                />
                <label htmlFor="A-Z">A-Z</label>
              </StyledRadioButtonsThree>
              <StyledRadioButtonsThree>
                <input
                  type="radio"
                  id="Z-A"
                  name="sorting"
                  value="Z-A"
                  onClick={() => {
                    setSort(false);
                  }}
                />
                <label htmlFor="Z-A">Z-A</label>
              </StyledRadioButtonsThree>
              <StyledRadioButtonsThree>
                <input
                  type="radio"
                  id="noSorting"
                  name="sorting"
                  value="noSorting"
                  onClick={() => {
                    setSort();
                  }}
                />
                <label htmlFor="noSorting">keine Sortierung</label>
              </StyledRadioButtonsThree>
            </div>

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
