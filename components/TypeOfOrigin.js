import { StyledRadioButtonGroup } from './StyledComponents';

export default function TypeOfOrigin() {
  return (
    <>
      <StyledRadioButtonGroup>
        <fieldset>
          <legend>Select the origin of the recipe</legend>

          <div>
            <input type="radio" id="Book" name="origin" value="Book"></input>
            <label htmlFor="Book">Book</label>
          </div>
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
        </fieldset>
      </StyledRadioButtonGroup>
    </>
  );
}
