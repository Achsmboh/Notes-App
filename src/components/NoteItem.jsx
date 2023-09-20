import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NoteItem({ title, date, description, id, onDelete, onArchived, isArchived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{date}</p>
        <p className="note-item__body">{description}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchivedButton onArchived={onArchived} isArchived={isArchived} id={id} />
      </div>
    </div>
  );
}

export default NoteItem;
