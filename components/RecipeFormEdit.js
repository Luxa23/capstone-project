import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledRadioButtonGroup,
  StyledRadioButtonToolbar,
  StyledTextarea,
} from './StyledComponents';
import useStore from '../hooks/useStore';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RecipeFormEdit({ id }) {
  const recipeList = useStore(state => state.recipeList);
  const recipe = recipeList.find(recipe => recipe.id === id) || {};

  const updateRecipe = useStore(state => state.updateRecipe);
  const [recipeEdit, setRecipeEdit] = useState(recipe);

  const { push } = useRouter();

  return (
    <>
      <StyledForm
        onSubmit={event => {
          event.preventDefault();

          const trimmedValue = recipeEdit.recipeTitle.trim();
          if (trimmedValue.length > 0) {
            updateRecipe(recipeEdit);
            setRecipeEdit('');
          }
          push(`/recipe/${id}`);
        }}
        isActive={recipe.origin === 'Other'}
        className="form--other-active"
      >
        <StyledInput
          required
          type="text"
          minLength={2}
          maxLength={60}
          placeholder="Name des Rezepts"
          value={recipeEdit.recipeTitle}
          onChange={event => {
            setRecipeEdit({ ...recipeEdit, recipeTitle: event.target.value });
          }}
        />
        <div>
          <StyledRadioButtonToolbar>
            <input
              type="radio"
              id="Baking"
              name="processing"
              value="Baking"
              required
              checked={recipeEdit.processing === 'Baking'}
              onChange={event => {
                setRecipeEdit({
                  ...recipeEdit,
                  processing: event.target.value,
                });
              }}
            />
            <label htmlFor="Baking">Backrezept</label>
          </StyledRadioButtonToolbar>
          <StyledRadioButtonToolbar>
            <input
              type="radio"
              id="Cooking"
              name="processing"
              value="Cooking"
              required
              checked={recipeEdit.processing === 'Cooking'}
              onChange={event => {
                setRecipeEdit({
                  ...recipeEdit,
                  processing: event.target.value,
                });
              }}
            />
            <label htmlFor="Cooking">Kochrezept</label>
          </StyledRadioButtonToolbar>
        </div>

        <StyledRadioButtonGroup>
          <p>Ursprung des Rezepts</p>
          <div>
            <input
              type="radio"
              id="Book"
              name="origin"
              value="Book"
              required
              checked={recipeEdit.origin === 'Book'}
              onChange={event => {
                setRecipeEdit({ ...recipeEdit, origin: event.target.value });
              }}
            />
            <label htmlFor="Book">Buch</label>
          </div>
          <div>
            <input
              type="radio"
              id="Website"
              name="origin"
              value="Website"
              checked={recipeEdit.origin === 'Website'}
              onChange={event => {
                setRecipeEdit({ ...recipeEdit, origin: event.target.value });
              }}
            ></input>
            <label htmlFor="website">Webseite</label>
          </div>
          <div>
            <input
              type="radio"
              id="Other"
              name="origin"
              value="Other"
              checked={recipeEdit.origin === 'Other'}
              onChange={event => {
                setRecipeEdit({ ...recipeEdit, origin: event.target.value });
              }}
            ></input>
            <label htmlFor="Other">Anderer</label>
          </div>
        </StyledRadioButtonGroup>

        {recipeEdit.origin === 'Book' && (
          <>
            <StyledInput
              required
              type="text"
              minLength={2}
              maxLength={100}
              placeholder="Buchtitel"
              value={recipeEdit.bookTitle}
              onChange={event => {
                setRecipeEdit({ ...recipeEdit, bookTitle: event.target.value });
              }}
            ></StyledInput>
            <StyledInput
              required
              type="text"
              minLength={2}
              maxLength={100}
              placeholder="Autor/in"
              value={recipeEdit.bookAuthor}
              onChange={event => {
                setRecipeEdit({
                  ...recipeEdit,
                  bookAuthor: event.target.value,
                });
              }}
            ></StyledInput>
            <StyledInput
              required
              type="number"
              minLength={1}
              maxLength={3}
              placeholder="Seite"
              value={recipeEdit.bookPage}
              onChange={event => {
                setRecipeEdit({ ...recipeEdit, bookPage: event.target.value });
              }}
            ></StyledInput>
          </>
        )}
        {recipeEdit.origin === 'Website' && (
          <>
            <StyledInput
              required
              type="test"
              minLength={1}
              maxLength={100}
              placeholder="Webseite"
              value={recipeEdit.websiteName}
              onChange={event => {
                setRecipeEdit({
                  ...recipeEdit,
                  websiteName: event.target.value,
                });
              }}
            ></StyledInput>
            <StyledInput
              required
              type="url"
              minLength={1}
              maxLength={100}
              placeholder="URL"
              value={recipeEdit.websiteUrl}
              onChange={event => {
                setRecipeEdit({
                  ...recipeEdit,
                  websiteUrl: event.target.value,
                });
              }}
            ></StyledInput>
          </>
        )}
        {recipeEdit.origin === 'Other' && (
          <>
            <StyledInput
              type="text"
              minLength={1}
              maxLength={100}
              placeholder="(pers??nliche) Quelle"
              value={recipeEdit.otherSource}
              onChange={event => {
                setRecipeEdit({
                  ...recipeEdit,
                  otherSource: event.target.value,
                });
              }}
            ></StyledInput>
            <StyledInput
              type="text"
              minLength={1}
              maxLength={100}
              placeholder="Wo befindet sich das Rezept?"
              value={recipeEdit.otherLocation}
              onChange={event => {
                setRecipeEdit({
                  ...recipeEdit,
                  otherLocation: event.target.value,
                });
              }}
            ></StyledInput>
            <StyledTextarea
              rows="5"
              placeholder="Zutaten"
              defaultValue={recipeEdit.otherIngredients}
              maxLength="2000"
              onChange={event => {
                setRecipeEdit({
                  ...recipe,
                  otherIngredients: event.target.value,
                });
              }}
            ></StyledTextarea>

            <StyledTextarea
              rows="5"
              placeholder="Zubereitung"
              defaultValue={recipeEdit.otherInstructions}
              maxLength="2000"
              onChange={event => {
                setRecipeEdit({
                  ...recipe,
                  otherInstructions: event.target.value,
                });
              }}
            ></StyledTextarea>
          </>
        )}

        <StyledButton type="submit" className="button--other-active">
          ??nderungen speichern
        </StyledButton>
      </StyledForm>
    </>
  );
}
