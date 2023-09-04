import React from "react";

export default function ShowForm({
  value,
  FontAwesomeIcon,
  faEdit,
  editNote,
  faTrash,
  deleteNote,
  faEye,
  viewNote,
}) {
  return (
    <div>
      <div key={value.id} className="note-card">
        <h4>
          {value.title.length > 15
            ? value.title.substr(0, 15) + "..."
            : value.title}
        </h4>
        <h6>
          {value.body.length > 20
            ? value.body.substr(0, 20) + "..."
            : value.body}
        </h6>
        <p className="id">{value.id}</p>
        <div className="note-buttons">
          <FontAwesomeIcon
            className="edit-button"
            icon={faEdit}
            onClick={() => editNote(value.id)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-button"
            onClick={() => deleteNote(value.id)}
          />

          <FontAwesomeIcon
            icon={faEye}
            className="read-button"
            onClick={() => viewNote(value.id)}
          />
        </div>
      </div>
    </div>
  );
}