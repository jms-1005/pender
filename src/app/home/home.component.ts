import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // pets:any[] = []



  constructor(private http:HttpClient){}

  // ngOnInit(): void{
  //   this.http.get<any>('https://cms.alexsumina.me/api/pender-app-screen?populate=*').subscribe(response=>{
  //     this.pets = response.data
  //     console.log(this.pets)
  //   })

  // }


}
