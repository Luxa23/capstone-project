import {
  StyledForm,
  StyledButton,
  StyledInput,
  StyledRadioButtonGroup,
} from '../components/StyledComponents';
import { useState } from 'react';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import Toast from './Toast';

export default function RecipeForm() {
  const [inputValueRecipeTitle, setInputValueRecipeTitle] = useState('');
  const [inputValueBookTitle, setInputValueBookTitle] = useState('');
  const [inputValueBookAuthor, setInputValueBookAuthor] = useState('');
  const [inputValueBookPage, setInputValueBookPage] = useState('');
  const [inputValueWebsiteName, setInputValueWebsiteName] = useState('');
  const [inputValueWebsiteUrl, setInputValueWebsiteUrl] = useState('');
  const [inputValueOtherSource, setInputValueOtherSource] = useState('');
  const [inputValueOtherLocation, setInputValueOtherLocation] = useState('');

  const [origin, setOrigin] = useState('');
  const addRecipe = useStore(state => state.addRecipe);

  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <StyledForm
          onSubmit={event => {
            event.preventDefault();
            const trimmedValue = inputValueRecipeTitle.trim();
            if (trimmedValue.length > 0) {
              addRecipe(
                trimmedValue,
                origin,
                inputValueBookAuthor,
                inputValueBookPage,
                inputValueBookTitle,
                inputValueWebsiteName,
                inputValueWebsiteUrl,
                inputValueOtherLocation,
                inputValueOtherSource
              );
              setInputValueRecipeTitle('');
              setOrigin('');
              setInputValueBookAuthor('');
              setInputValueBookTitle('');
              setInputValueBookPage('');
              setInputValueWebsiteName(''),
                setInputValueWebsiteUrl(''),
                setInputValueOtherLocation(''),
                setInputValueOtherSource('');
            }
          }}
        >
          <StyledInput
            required
            type="text"
            minLength={2}
            maxLength={100}
            placeholder="Recipe title"
            value={inputValueRecipeTitle}
            onChange={event => {
              setInputValueRecipeTitle(event.target.value);
            }}
          />
          <StyledRadioButtonGroup>
            <p>Select the origin of the recipe:</p>
            <div>
              <input
                type="radio"
                id="Book"
                name="origin"
                value="Book"
                required
                checked={origin === 'Book'}
                onChange={event => {
                  setOrigin(event.target.value);
                }}
              />
              <label htmlFor="Book">Book</label>
            </div>
            <div>
              <input
                type="radio"
                id="Website"
                name="origin"
                value="Website"
                checked={origin === 'Website'}
                onChange={event => {
                  setOrigin(event.target.value);
                }}
              ></input>
              <label htmlFor="Website">Website</label>
            </div>
            <div>
              <input
                type="radio"
                id="Other"
                name="origin"
                value="Other"
                checked={origin === 'Other'}
                onChange={event => {
                  setOrigin(event.target.value);
                }}
              ></input>
              <label htmlFor="Other">Other</label>
            </div>
          </StyledRadioButtonGroup>
          {/* book entry */}
          {origin === 'Book' && (
            <>
              <StyledInput
                required
                type="text"
                minLength={2}
                maxLength={100}
                placeholder="Book title"
                value={inputValueBookTitle}
                onChange={event => {
                  setInputValueBookTitle(event.target.value);
                }}
              ></StyledInput>
              <StyledInput
                required
                type="text"
                minLength={2}
                maxLength={100}
                placeholder="Author"
                value={inputValueBookAuthor}
                onChange={event => {
                  setInputValueBookAuthor(event.target.value);
                }}
              ></StyledInput>
              <StyledInput
                required
                type="number"
                minLength={1}
                maxLength={3}
                placeholder="Page"
                value={inputValueBookPage}
                onChange={event => {
                  setInputValueBookPage(event.target.value);
                }}
              ></StyledInput>
            </>
          )}
          {/* website */}
          {origin === 'Website' && (
            <>
              <StyledInput
                required
                type="test"
                minLength={1}
                maxLength={100}
                placeholder="Website"
                value={inputValueWebsiteName}
                onChange={event => {
                  setInputValueWebsiteName(event.target.value);
                }}
              ></StyledInput>
              <StyledInput
                required
                type="url"
                minLength={1}
                maxLength={100}
                placeholder="url"
                value={inputValueWebsiteUrl}
                onChange={event => {
                  setInputValueWebsiteUrl(event.target.value);
                }}
              ></StyledInput>
            </>
          )}
          {/* other */}
          {origin === 'Other' && (
            <>
              <StyledInput
                type="text"
                minLength={1}
                maxLength={100}
                placeholder="personal source"
                value={inputValueOtherSource}
                onChange={event => {
                  setInputValueOtherSource(event.target.value);
                }}
              ></StyledInput>
              <StyledInput
                required
                type="text"
                minLength={1}
                maxLength={100}
                placeholder="location of recipe"
                value={inputValueOtherLocation}
                onChange={event => {
                  setInputValueOtherLocation(event.target.value);
                }}
              ></StyledInput>
            </>
          )}
          <StyledButton type="submit">Save</StyledButton>
        </StyledForm>
      )}
      <Toast />
    </>
  );
}
