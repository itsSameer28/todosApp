import React from "react";
import moment from "moment";

const NoteView = ({ currentNote, closeNote }) => {
  return (
    <div className="note-view">
      <h2>{currentNote.title}</h2>
      <p>{currentNote.body}</p>
      <div>
        <p className="note-body">Created At: {moment(currentNote.createdAt).format("YYYY-MM-DD HH:mm:ss")}</p>
        <p className="note-body">Updated At: {moment(currentNote.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</p>
      </div>
      <button onClick={closeNote} className="back-button" > Back </button>
    </div>
  );
};

export default NoteView;
