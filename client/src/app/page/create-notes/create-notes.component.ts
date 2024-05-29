import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { NotesService } from "../../services/note.service";
import { CollectionService } from "../../services/collection.service";

@Component({
  selector: 'createNotes',
  templateUrl: './create-notes.component.html',
  styleUrl: './create-notes.component.scss'
})
export class CreateNotesComponent {

    notesForm: FormGroup


    constructor(public notesService: NotesService, public collectionService: CollectionService){
      this.notesForm = new FormGroup({
        title: new FormControl('', Validators.required),
        coordinate: new FormControl('', Validators.required),
        text: new FormControl('', Validators.required),
        collection: new FormControl('' , null),
      })
    }

    
    onSubmit(){
      if(this.notesForm.valid ) {
        console.log(this.notesForm.value)
        this.notesService.create(this.notesForm.value)
        this.notesForm.reset()
      } 
    }
}
