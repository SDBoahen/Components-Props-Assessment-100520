import React from 'react';
import Note from '../Components/Note';


class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    renderNotes =()=> { return (
        this.apiResponse().map(note => <Note noteObj={note} />) )}
         //key={note.id} content={note.content} />) )}
         //console.log("renderNotes!!") }
  
      render() { return (<ul>{this.renderNotes()}</ul>) }

}
export default NotesContainer;

