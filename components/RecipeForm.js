import {
  StyledForm,
  StyledButton,
  StyledInput,
  StyledRadioButtonGroup,
  StyledTextarea,
} from '../components/StyledComponents';
import { useState } from 'react';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import Toast from './Toast';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

export default function RecipeForm({ id }) {
  const emptyRecipe = {
    recipeTitle: '',
    processing: '',
    origin: '',
    bookTitle: '',
    bookAuthor: '',
    bookPage: '',
    websiteName: '',
    websiteUrl: '',
    otherSource: '',
    otherLocation: '',
    otherIngredients: '',
    otherInstructions: '',
    isLiked: false,
    id: nanoid(),
  };

  const [recipe, setRecipe] = useState(emptyRecipe);

  const addRecipe = useStore(state => state.addRecipe);

  const { push } = useRouter();
  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <StyledForm
          onSubmit={event => {
            event.preventDefault();
            const trimmedValue = recipe.recipeTitle.trim();
            if (trimmedValue.length > 0) {
              addRecipe(recipe);
              setRecipe(emptyRecipe);
            }

            push(`/recipe/${recipe.id}`);
          }}
          isActive={recipe.origin === 'Other'}
          className="form--other-active"
        >
          <StyledInput
            required
            type="text"
            minLength={2}
            maxLength={60}
            placeholder="recipe title"
            value={recipe.recipeTitle}
            onChange={event => {
              setRecipe({ ...recipe, recipeTitle: event.target.value });
            }}
          />
          <StyledRadioButtonGroup className="radiobuttons-nextToEachOther">
            <div>
              <input
                type="radio"
                id="Baking"
                name="processing"
                value="Baking"
                required
                checked={recipe.processing === 'Baking'}
                onChange={event => {
                  setRecipe({ ...recipe, processing: event.target.value });
                }}
              />
              <label htmlFor="Baking">Baking</label>
            </div>
            <div>
              <input
                type="radio"
                id="Cooking"
                name="processing"
                value="Cooking"
                required
                checked={recipe.processing === 'Cooking'}
                onChange={event => {
                  setRecipe({ ...recipe, processing: event.target.value });
                }}
              />
              <label htmlFor="Cooking">Cooking</label>
            </div>
          </StyledRadioButtonGroup>

          <StyledRadioButtonGroup>
            <p>Select the origin of the recipe:</p>
            <div>
              <input
                type="radio"
                id="Book"
                name="origin"
                value="Book"
                required
                checked={recipe.origin === 'Book'}
                onChange={event => {
                  setRecipe({ ...recipe, origin: event.target.value });
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
                checked={recipe.origin === 'Website'}
                onChange={event => {
                  setRecipe({ ...recipe, origin: event.target.value });
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
                checked={recipe.origin === 'Other'}
                onChange={event => {
                  setRecipe({ ...recipe, origin: event.target.value });
                }}
              ></input>
              <label htmlFor="Other">Other</label>
            </div>
          </StyledRadioButtonGroup>
          {/* book entry */}
          {recipe.origin === 'Book' && (
            <>
              <StyledInput
                required
                type="text"
                minLength={2}
                maxLength={100}
                placeholder="book title"
                value={recipe.bookTitle}
                onChange={event => {
                  setRecipe({ ...recipe, bookTitle: event.target.value });
                }}
              ></StyledInput>
              <StyledInput
                required
                type="text"
                minLength={2}
                maxLength={100}
                placeholder="author"
                value={recipe.bookAuthor}
                onChange={event => {
                  setRecipe({ ...recipe, bookAuthor: event.target.value });
                }}
              ></StyledInput>
              <StyledInput
                required
                type="number"
                minLength={1}
                maxLength={3}
                placeholder="page"
                value={recipe.bookPage}
                onChange={event => {
                  setRecipe({ ...recipe, bookPage: event.target.value });
                }}
              ></StyledInput>
            </>
          )}
          {/* website */}
          {recipe.origin === 'Website' && (
            <>
              <StyledInput
                required
                type="test"
                minLength={1}
                maxLength={100}
                placeholder="website"
                value={recipe.websiteName}
                onChange={event => {
                  setRecipe({ ...recipe, websiteName: event.target.value });
                }}
              ></StyledInput>
              <StyledInput
                required
                type="url"
                minLength={1}
                maxLength={100}
                placeholder="url"
                value={recipe.websiteUrl}
                onChange={event => {
                  setRecipe({ ...recipe, websiteUrl: event.target.value });
                }}
              ></StyledInput>
            </>
          )}
          {/* other */}
          {recipe.origin === 'Other' && (
            <>
              <StyledInput
                type="text"
                minLength={1}
                maxLength={100}
                placeholder="personal source"
                value={recipe.otherSource}
                onChange={event => {
                  setRecipe({ ...recipe, otherSource: event.target.value });
                }}
              ></StyledInput>
              <StyledInput
                required
                type="text"
                minLength={1}
                maxLength={100}
                placeholder="location of recipe"
                value={recipe.otherLocation}
                onChange={event => {
                  setRecipe({ ...recipe, otherLocation: event.target.value });
                }}
              ></StyledInput>
              <StyledTextarea
                placeholder="Zutaten"
                maxLength="2000"
                onChange={event => {
                  setRecipe({
                    ...recipe,
                    otherIngredients: event.target.value,
                  });
                }}
              ></StyledTextarea>

              <StyledTextarea
                placeholder="Zubereitung"
                maxLength="2000"
                onChange={event => {
                  setRecipe({
                    ...recipe,
                    otherInstructions: event.target.value,
                  });
                }}
              ></StyledTextarea>
            </>
          )}
          <StyledButton type="submit" className="button--other-active">
            Save
          </StyledButton>
        </StyledForm>
      )}
      <Toast />
    </>
  );
}
