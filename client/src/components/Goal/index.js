import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Goal(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <p>Based on entered infromation you shoud reach your goal by:</p>

    </section>
  );
}
export default Goal;