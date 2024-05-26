import { Component, OnInit } from "@angular/core";
import { NotesServise } from "../../services/note.service";

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.scss'
})


export class NotesFormComponent implements OnInit {


  constructor(
    readonly notesServise: NotesServise
  ){}

  ngOnInit(): void {
    this.notesServise.findAll()
  }


  deleted(id: number){
    this.notesServise.delete(id)
  }
  
}
