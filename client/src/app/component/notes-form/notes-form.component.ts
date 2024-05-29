import { Component, OnInit } from "@angular/core";
import { NotesService } from "../../services/note.service";


@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.scss'
})


export class NotesFormComponent implements OnInit {


    constructor(
      readonly notesService: NotesService
    ){}

    ngOnInit(): void {
      this.notesService.findAll()
    }


    deleted(id: number){
      this.notesService.delete(id)
    }
  
}
