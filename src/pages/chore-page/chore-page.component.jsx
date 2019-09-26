import React from 'react';
import { connect } from 'react-redux';

// import { addChore, choreFetch, choreAdd } from '../../redux/chore/chore.actions';

import { addChore, choreFetch, choreAdd, choreDelete } from '../../lib/choresReducer';

import Chore from '../../new-components/chore/chore.component';
import CreateChoreForm from '../../new-components/create-chore/create-chore.component';

import './chore-page.styles.scss';

// const ChorePage = ({ chore, choreDelete, choreAdd }) => {
//   console.log('chore page',chore);
// return (
class ChorePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: false
    }
  }
  componentDidMount() {
    this.props.choreFetch();
  }

// ({chore, addChore, choreFetch}) => {

render() {
  //  console.log(chore);
   return (
    <div className='chore-page'>
      <CreateChoreForm onFormSubmit={choreAdd}/>
      {this.props.chore.map((chore) => (
      <Chore 
        key={this.props.chore.id}
        chore={chore}
        onRemove={() => choreDelete(chore)}
        choreName={this.props.chore.choreName}
        assignedTo={this.props.chore.assignedTo}
      />)
      )} 
    </div>
);
      }
  // );
}
// }
const mapStateToProps = state => ({
    chore: state.chore
  });
  
  const mapDispatchToProps = dispatch => ({
    //addChore: chore => dispatch(addChore(chore)),
    choreFetch: chore => dispatch(choreFetch(chore)),
    choreAdd: chore => dispatch(choreAdd(chore)),
    choreDelete: chore => dispatch(choreDelete(chore))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChorePage);