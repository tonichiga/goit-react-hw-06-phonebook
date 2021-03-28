import s from './ButtonAddContact.module.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../redux/actions';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      // [number]: value,
    });
  };

  // Сброс инпутов
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  hanldesubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: Date.now(),
    });
    this.reset();
    // this.props.getContact;
  };

  render() {
    return (
      <form onSubmit={this.hanldesubmit}>
        <p>Name</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        ></input>

        <p>Number</p>

        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.number}
          name="number"
        ></input>

        <button type="submit" className={s.addButton}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(InputForm);
