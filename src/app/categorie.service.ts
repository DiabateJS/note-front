import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './categorie';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  urlBase: string = "";
  constructor(private http: HttpClient) {
    this.urlBase = "http://localhost:85/note-api/index.php?";
  }

  getCategories(): Observable<Categorie[]> {
    const url = this.urlBase + "entity=categorie&method=getall&params=";
    return this.http.get<Categorie[]>(url);
  }

  getCategorieById(id){
    const url = this.urlBase + "entity=categorie&method=get&params="+id;
    this.http.get(url).subscribe(data => {
      console.log(data);
    });
  }
}
