import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "L'exercice 1 du TD1";
  nom:string="Jean";
  verif:boolean=false;
  nb:number=2;
  etudiants:any[]=[
    {"nom":"Guillon","prenom":"Sarah","age":15},
    {"nom":"Dubois","prenom":"Nicolas","age":17},
    {"nom":"Cornebise","prenom":"Julien","age":16},
    {"nom":"Martin","prenom":"Henri","age":15},
  ]
choixClasse(isFirst:boolean,isLast:boolean, isEven:boolean)
{
  var ma_classe:string="";
  if (isFirst||isLast){
    ma_classe="first_last ";
  }
  if (isEven){
    ma_classe+="pair";
  }
  else{
    ma_classe+="impair"
  }
 
  return ma_classe;
}
}
