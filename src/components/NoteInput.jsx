import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      titleCharLimit: 50, //Batasan karakter untuk judul
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputValue = event.target.value;
    const remainingChars = this.state.titleCharLimit - inputValue.length;

    if (remainingChars >= 0) {
      this.setState(() => {
        return {
          title: inputValue,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const { title, body } = this.state;

    // pastikan kedua input diisi
    if (title.trim() === "" || body.trim() === "") {
      alert("Judul dan keterangan harus diisi");
      return;
    }

    this.props.addNote(this.state);

    // agar kolom input kembali kosong
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const remainingChars = this.state.titleCharLimit - this.state.title.length;
    return (
      <div className="note-app__body note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter: {remainingChars} </p>
          <input className="note-input__title " type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" name="" id="" cols="30" rows="10" placeholder="Tulis catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit" className="button ">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
