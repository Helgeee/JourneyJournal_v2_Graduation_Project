import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { NotesServise } from "../../services/note.service";
import { CollectionService } from "../../services/collection.service";

@Component({
  selector: 'createNotes',
  templateUrl: './create-notes.component.html',
  styleUrl: './create-notes.component.scss'
})
export class CreateNotesComponent {

    notesForm: FormGroup


    constructor(public notesServise: NotesServise, public collectionService: CollectionService){
      this.notesForm = new FormGroup({
        title: new FormControl('', Validators.required),
        coordinate: new FormControl('', Validators.required),
        text: new FormControl('', Validators.required),
        collection: new FormControl('' , Validators.required),
      })
    }

    
    onSubmit(){
      
      if(this.notesForm.valid ) {
        console.log(this.notesForm.value)

        this.notesServise.create(this.notesForm.value)
        this.notesForm.reset()
      } else {
    
      }
    }
}
