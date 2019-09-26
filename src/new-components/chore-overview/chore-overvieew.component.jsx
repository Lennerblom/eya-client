import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Chore from '../chore/chore.component';
import { choreDelete } from '../../lib/choresReducer';
import './chore-overview.styles.scss';

const ChoreOverview = ({ choreDelete, chore }) => {
  console.log('chore:', chore)

  return(
    <div className='chore-overview-comtainer'>
        <h1>chore overview of all chores</h1>
    {chore[0].map(item => 
      <Link to={`/chore-detail/${item._id}`}>
      <Chore key={item._id} className='chore-overview-individual'

        choreName={item.choreName} 
        assignedTo={item.assignedTo}
        onRemove={() => choreDelete(item._id)} 
      />
      </Link>
    )}
    </div>
  );
};

const mapStateToProps = state => ({
    chore: state.chore
});

const mapDispatchToProps = dispatch => ({
    choreDelete: chore => dispatch(choreDelete(chore))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoreOverview);