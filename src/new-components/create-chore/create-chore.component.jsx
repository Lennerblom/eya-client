import React from 'react';
import { connect } from 'react-redux';

import { addChore, choreFetch, choreAdd, choreDelete } from '../../lib/choresReducer';
import FormInput from '../form-input/form-input.component';

import './create-chore.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class CreateChoreForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          choreName: '',
          assignedTo: '',
          isComplete: Boolean
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      choreAdd(this.state);

      this.setState({
        choreName: '',
        assignedTo: '',
        isComplete: Boolean
      })
    }

    handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({[name]: value});
    }

    render(){
      const { choreName, assignedTo, isComplete } = this.state;

      return(
          <div className='create-chore-form-container'>
            <h2 className='add-chore'>Create a new Chore</h2>
            <form className='create-chore-form' onSubmit={this.handleSubmit}>
              <FormInput
              type='text'
              name='choreName'
              value={choreName}
              onChange={this.handleChange}
              label='Chore Name'
              required
              />
              <FormInput
              type='text'
              name='assignedTo'
              value={assignedTo}
              onChange={this.handleChange}
              label='Assigned To'
              required
              />
              <FormInput
              type='text'
              name='isComplete'
              value={isComplete}
              onChange={this.handleChange}
              label='Completed?'
              required
              />
              <CustomButton type='submit'>SUBMIT NEW CHORE</CustomButton>
            </form>
            
            <div>{this.state.choreName}</div>
          </div>
      )
    }
}

const mapStateToProps = state => ({
  chore: state.chore
});
const mapDispatchToProps = dispatch => ({
  //addChore: chore => dispatch(addChore(chore)),
  choreFetch: chore => dispatch(choreFetch(chore)),
  choreAdd: chore => dispatch(choreAdd(chore)),
  choreDelete: chore => dispatch(choreDelete(chore))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateChoreForm);