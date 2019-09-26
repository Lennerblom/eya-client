// import React from 'react';

// import './custom-button.styles.scss';

// const CustomButton = ( { children, ...otherProps}) => (
//   <button className='custom-button' {...otherProps}>
//     {children}
//   </button>
// );

// export default CustomButton;

//WITH STYLED COMPONENTS AND GOOGLES_SIGNIN

import React from 'react';

import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ( {children, ...props}) => (
    <CustomButtonContainer {...props}>
      {children} 
    </CustomButtonContainer>
);

export default CustomButton;