import {
  StyledForm,
  StyledButton,
  StyledInput,
} from '../components/StyledComponents';

export default function RecipeForm() {
  return (
    <>
      <StyledForm>
        <StyledInput type="text" size="30" placeholder="Add recipe title" />

        <StyledButton>Save</StyledButton>
      </StyledForm>
    </>
  );
}
