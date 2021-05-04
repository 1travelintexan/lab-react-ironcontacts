import React, { Component } from "react";
import data from "../contacts.json";
import ContactDetail from "./ActorDetail";

class Contacts extends Component {
  state = {
    contacts: data.slice(0, 5),
  };

  //sorting the actors
  handleSort = () => {
    // when you use array methods that mutate/change the original array always deep clone it
    const { contacts } = this.state;
    let clonedContact = JSON.parse(JSON.stringify(contacts));

    clonedContact.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });

    //update the original state after sort is done
    this.setState({
      contacts: clonedContact,
    });
  };

  //add button for list on render
  handleAdd = () => {
    // grab a random value from data
    // add it to students
    let randomIndex = Math.floor(Math.random() * data.length);
    let elem = data[randomIndex];

    // using the spread operator to grab all elemtents of students one by one and store it in the new array
    // [...this.state.students]
    this.setState({
      contacts: [elem, ...this.state.contacts],
    });
  };

  handleDelete = (someId) => {
    const { contacts } = this.state;

    // keep all the elements that do not match the id
    let filteredContacts = contacts.filter((single) => {
      // return is a condition on how to filter elements
      return single.id !== someId;
    });

    this.setState({
      contacts: filteredContacts,
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <button onClick={this.handleSort}>Sort by popularity</button>
        <button onClick={this.handleAdd}>ADD</button>
        {contacts.map((singleContact, index) => {
          return (
            <ContactDetail
              key={index}
              contact={singleContact}
              onDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Contacts;
