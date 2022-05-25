import StyledInput from './StyledComponents/StyledInput';
import StyledButton from './StyledComponents/StyledButton';
import StyledForm from './StyledComponents/StyledForm';

export default function RecipeForm() {
  return (
    <>
      <StyledForm>
        <label>
          <StyledInput
            type="text"
            size="30"
            placeholder="Add recipe title"
          ></StyledInput>
        </label>

        <StyledButton>Save</StyledButton>
      </StyledForm>
    </>
  );
}
