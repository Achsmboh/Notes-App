import React from "react";

function NoteHeader({ onSearchInputChange, searchQuery }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan..." value={searchQuery} onChange={onSearchInputChange} />
      </div>
    </div>
  );
}

export default NoteHeader;
