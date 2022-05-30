import {
  StyledForm,
  StyledButton,
  StyledInput,
} from '../components/StyledComponents';
import { useState } from 'react';
import useStore from '../hooks/useStore';

export default function RecipeForm() {
  const [inputValue, setInputValue] = useState('');

  const addRecipe = useStore(state => state.addRecipe);

  return (
    <>
      <StyledForm
        onSubmit={event => {
          event.preventDefault();
          const trimmedValue = inputValue.trim();
          console.log(trimmedValue.length);
          if (trimmedValue.length > 0) {
            addRecipe(trimmedValue);
            setInputValue('');
          }
        }}
      >
        <StyledInput
          required
          type="text"
          size="30"
          minLength={2}
          maxLength={100}
          placeholder="Add recipe title"
          value={inputValue}
          onChange={event => {
            setInputValue(event.target.value);
          }}
        />

        <StyledButton type="submit">Save</StyledButton>
      </StyledForm>
    </>
  );
}
