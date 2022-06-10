import { StyledInput } from './StyledComponents';
import { useState, useStore } from 'react';

export default function GroupWebsite() {
  const emptyRecipe = {
    websiteName: '',
    websiteUrl: '',
  };
  const [recipe, setRecipe] = useState(emptyRecipe);
  const addRecipe = useStore(state => state.addRecipe);
  return (
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
  );
}
