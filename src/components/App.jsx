import css from "./App.module.css"
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList"
import SearchBox from "./SearchBox/SearchBox"
// import contacts from "./contacts.json"
// import { useState } from "react";


function App() {


  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
}

export default App
