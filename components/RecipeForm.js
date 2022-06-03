import {
  StyledForm,
  StyledButton,
  StyledInput,
} from '../components/StyledComponents';
import { useState } from 'react';
import useStore from '../hooks/useStore';
import useHydration from '../hooks/useHydration';
import Toast from './Toast';

export default function RecipeForm() {
  const [inputValue, setInputValue] = useState('');

  const addRecipe = useStore(state => state.addRecipe);

  const hydrated = useHydration();

  return (
    <>
      {hydrated && (
        <StyledForm
          onSubmit={event => {
            event.preventDefault();
            const trimmedValue = inputValue.trim();
            if (trimmedValue.length > 0) {
              addRecipe(trimmedValue);
              setInputValue('');
            }
          }}
        >
          <StyledInput
            required
            type="text"
            minLength={2}
            maxLength={100}
            placeholder="Add recipe titles"
            value={inputValue}
            onChange={event => {
              setInputValue(event.target.value);
            }}
          />

          <StyledButton type="submit">Save</StyledButton>
        </StyledForm>
      )}
      <Toast />
    </>
  );
}
