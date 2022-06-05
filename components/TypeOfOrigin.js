import { StyledRadioButtonGroup } from './StyledComponents';

export default function TypeOfOrigin() {
  return (
    <>
      <StyledRadioButtonGroup>
        <p>Select the origin of the recipe:</p>
        <label htmlFor="Book">
          <input type="radio" id="Book" name="origin" value="Book" />
          Book
        </label>

        <div>
          <input
            type="radio"
            id="Website"
            name="origin"
            value="Website"
          ></input>
          <label htmlFor="Website">Website</label>
        </div>
        <div>
          <input type="radio" id="Other" name="origin" value="Other"></input>
          <label htmlFor="Other">Other</label>
        </div>
      </StyledRadioButtonGroup>
    </>
  );
}
