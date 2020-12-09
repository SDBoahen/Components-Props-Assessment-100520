import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from "./Containers/NotesContainer";

class App extends Component {
  render() {
    const text = "🙌🏾Hello World🙌🏾"
    return (
      <>
        <Header text={text} />
        <NotesContainer/>
      </>
    )}

}
export default App;
