import React from "react";

export default function NoteForm({
  currentNote,
  updateNote,
  addNote,
  closeNote,
}) {
  const defaultValueTitle = currentNote ? currentNote.title : "";
  const defaultValueBody = currentNote ? currentNote.body : "";
  return (
    <div>
      <form className="note-form" onSubmit={currentNote ? updateNote : addNote}>
        <input
          type="text"
          name="title"
          className="form-input"
          placeholder="Enter Title"
          required="required"
          defaultValue={defaultValueTitle}
        />
        <textarea
          name="body"
          className="form-input"
          placeholder="Enter Body"
          required="required"
          defaultValue={defaultValueBody}
        ></textarea>
        <div className="form-buttons">
          <button className="form-submit" type="submit">
            {currentNote ? "Update" : "Add"}
          </button>
          {currentNote && (
            <button className="form-cancel" type="button" onClick={closeNote}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}