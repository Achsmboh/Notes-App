import React from "react";
import { getInitialData } from "../utils/index";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      searchQuery: "",
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);

    this.onSearchInputChange = this.onSearchInputChange.bind(this);

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onSearchInputChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        data: [
          ...prevState.data,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const data = this.state.data.filter((datum) => datum.id !== id);
    this.setState({ data });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedData = prevState.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            archived: !item.archived,
          };
        }
        return item;
      });

      return {
        data: updatedData,
      };
    });
  }

  render() {
    const { data, searchQuery } = this.state;

    // filter berdasarkan pencarian
    const filterData = data.filter((item) => item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));

    // memisahkan catatan berdasarkan status archived
    const activeNotes = filterData.filter((item) => !item.archived);
    const archivedNotes = filterData.filter((item) => item.archived);

    return (
      <>
        <NoteHeader onSearchInputChange={this.onSearchInputChange} searchQuery={searchQuery} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <div className="notes-list">
            <NoteList data={activeNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} />
          </div>

          <h2>Arsip</h2>
          {archivedNotes.length !== 0 ? (
            <div className="notes-list">
              <NoteList data={archivedNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} />
            </div>
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
        <div className="note-app__body note-input">
          <p className="notes-list__empty-message">Copyright @ Achmad Maulana Achsan | 2023</p>
        </div>
      </>
    );
  }
}

export default NotesApp;
