import "./App.css";
import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import shortid from "shortid";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    this.setState((prev) => {
      if (this.state.contacts.find((e) => e.name === name)) {
        alert(`${name} is already in contacts.`);
        return;
      }
      return {
        contacts: [...prev.contacts, { id: shortid.generate(), name, number }],
      };
    });
  };

  deleteContact = (id) => {
    this.setState({ contacts: this.state.contacts.filter((e) => e.id !== id) });
  };

  updateFilter = (e) => {
    const value = e.currentTarget.value;
    this.setState(() => ({ filter: value }));
  };

  getFiltered = () => {
    return this.state.contacts.filter((e) => {
      return e.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    return (
      <>
        <ContactForm addNewContact={this.addContact} />
        <Filter value={this.state.filter} func={this.updateFilter} />
        <ContactList list={this.getFiltered()} btnDelete={this.deleteContact} />
      </>
    );
  }
}

export default App;
