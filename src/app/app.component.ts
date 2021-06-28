import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  noteList: MyNote[] = [];

  addNote(title: HTMLInputElement, text: HTMLTextAreaElement) {
    let now = new Date();

    let note: MyNote = {
      noteTitle: title.value,
      noteText: text.value,
      noteDate: now.toLocaleString(),
      noteId: this.noteList.length > 0
        ? this.noteList[this.noteList.length - 1].noteId + 1
        : 0
    };
    // title.value = "";
    // text.value = "";
    if (note.noteTitle != "") {
      console.log(note);
      this.noteList.push(note);
    }
    else alert("Заполните название!");
  }

  deleteNote(id: number) { 
    let index = this.noteList.findIndex((note) => note.noteId === id)
    if (index !== -1) {
      this.noteList.splice(index, 1);
    }
  }
}

interface MyNote {
  noteTitle: string;
  noteText: string;
  noteDate: string;
  noteId: number;
}
