import StyledInput from './StyledComponents/StyledInput';
import StyledButton from './StyledComponents/StyledButton';
import StyledForm from './StyledComponents/StyledForm';

export default function RecipeForm() {
  return (
    <>
      <StyledForm>
        <label>
          <StyledInput></StyledInput>
        </label>

        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </>
  );
}
