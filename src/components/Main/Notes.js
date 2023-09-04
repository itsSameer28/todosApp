import React, { useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  TIME_CONSTANT,
  TITLE_CONSTANT,
  CREATE_CONSTANT,
  UPDATED_CONSTANT,
} from "../../Constants/Constant";
import NavBar from "../Navbar/NavBar";
import ShowForm from "../ShowForm/ShowForm";
import NoteView from "../NoteView/NoteView";
import NoteForm from "../NoteForm/NoteForm";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [sort, setSort] = useState("title");
  const [searchQuery, setSearchQuery] = useState("");
  const toggleForm = () => {
    setViewForm(!viewForm);
    setCurrentNote(null);
  };

  //Add Note
  const addNote = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const note = {
      id: moment().format(TIME_CONSTANT),
      title,
      body,
      createdAt: moment().format(TIME_CONSTANT),
      updatedAt: moment().format(TIME_CONSTANT),
    };
    setNotes([...notes, note]);
    event.target.reset();
    toggleForm();
  };

  //Delete Note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    console.log(id);
    setNotes(updatedNotes);
  };

  //Edit Note
  const editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setCurrentNote(noteToEdit);
    setViewForm(true);
  };

  //Update Note
  const updateNote = (event) => {
    event.preventDefault();
    const newTitle = event.target.title.value;
    const newBody = event.target.body.value;
    const updatedNotes = notes.map((note) => {
      if (note.id === currentNote.id) {
        const updatedNote = {
          ...note,
          title: newTitle,
          body: newBody,
          updatedAt: moment().format(TIME_CONSTANT),
        };
        setCurrentNote(updatedNote);
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
    event.target.reset();
    toggleForm();
  };

  //View Note
  const viewNote = (id) => {
    setCurrentNote(notes.find((note) => note.id === id));
  };

  //Close the tabs
  const closeNote = () => {
    setCurrentNote(null);
    setViewForm(false);
  };

  //Sort the Notes Via Title,Time Created,Or time Of Updation
  const sortedNotes = [...notes].sort((a, b) => {
    switch (sort) {
      case TITLE_CONSTANT:
        return a.title.localeCompare(b.title);
      case CREATE_CONSTANT:
        return a.createdAt - b.createdAt;
      case UPDATED_CONSTANT:
        return moment(b.updatedAt).diff(moment(a.updatedAt));
      default:
        return 0;
    }
  });

  //Filter notes by title or body
  const newNotes = sortedNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <NavBar
        toggleForm={toggleForm}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sort={sort}
        setSort={setSort}
      />
      {viewForm ? (
        <NoteForm
          currentNote={currentNote}
          updateNote={updateNote}
          addNote={addNote}
          closeNote={closeNote}
        />
      ) : (
        <div className="notes-list">
          {currentNote ? (
            <NoteView currentNote={currentNote} closeNote={closeNote} />
          ) : (
            newNotes.map((value) => (
              <ShowForm
                value={value}
                FontAwesomeIcon={FontAwesomeIcon}
                faEdit={faEdit}
                editNote={editNote}
                faTrash={faTrash}
                deleteNote={deleteNote}
                faEye={faEye}
                viewNote={viewNote}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};
