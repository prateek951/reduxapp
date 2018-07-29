import React, { Component } from "react";
import Contact from "./Contact";
import axios from "axios";
import { types } from "../../actions/actiontypes";
import store from "../../store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Contacts extends Component {
  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {this.props.contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
      getContacts: () => dispatch({type: types.GET_CONTACTS})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
