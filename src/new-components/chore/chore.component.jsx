import React from 'react';

import './chore.styles.scss';

const Chore = ({  choreName, assignedTo, isComplete, onRemove  }) => (

    <div className='chore-container'>
      <h2 className='chore-name'>Chore Name: {choreName}</h2>
      <h3 className='chore-attribute-item'>assigned to: {assignedTo}</h3>
      <h3 className='chore-attribute-item'>{isComplete}</h3>
      <button onClick={onRemove}>delete</button> 
    </div>
  );

export default Chore;