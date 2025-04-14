import { Component, OnInit } from '@angular/core';

import { CategorieService } from '../categorie.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  categories: Categorie[];

  constructor(private categorieService: CategorieService) {
    this.categorieService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }

  ngOnInit(): void {
  }

  createNote(){

  }

  cleanForm(){

  }

}
