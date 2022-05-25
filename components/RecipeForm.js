import {
  StyledForm,
  StyledButton,
  StyledInput,
} from '../components/StyledComponents';

export default function RecipeForm() {
  return (
    <>
      <StyledForm>
        <label>
          <StyledInput type="text" size="30" placeholder="Add recipe title" />
        </label>

        <StyledButton>Save</StyledButton>
      </StyledForm>
    </>
  );
}
