import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils";

function NoteList({ data, onDelete, onArchived }) {
  return (
    <>
      {data.map((item) => (
        <NoteItem key={item.id} {...item} onDelete={onDelete} title={item.title} description={item.body} date={showFormattedDate(item.createdAt)} isArchived={item.archived} onArchived={onArchived} />
      ))}
    </>
  );
}

export default NoteList;
