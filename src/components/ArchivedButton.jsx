import React from "react";

function ArchivedButton({ onArchived, isArchived, id }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchived(id)}>
      {isArchived ? "Pindahkan" : "Archived"}
    </button>
  );
}

export default ArchivedButton;
