import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './custom-card.styles.scss';

const CustomCard = ({ title, description, history, linkUrl, match }) => {
    return (
    <div className='card-container'>
      <Link to={linkUrl}>
        <div className='card-content'>
          <h1 className='card-title'>{title}</h1>
          <span className='card-description'>{description}</span>
        </div>
      </Link>
    </div>
);
}

export default withRouter(CustomCard);

//onClick={() => history.push(`${match.url}${linkUrl}`)}>