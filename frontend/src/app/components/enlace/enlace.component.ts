import { Component } from '@angular/core';
import { EnlaceService } from 'src/app/services/enlace.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-enlace',
   templateUrl: './enlace.component.html',
   styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent {
   private enlaces: any[];
   constructor(private active: ActivatedRoute, private sEnlace: EnlaceService,private router: Router) {

      sEnlace.$enlaces.subscribe(val => {
         if (val) {
            this.enlaces = val;
         }
      });

   }

   mostrar() {
      var input = document.getElementById('enlace') as HTMLInputElement;
      let enlace = this.enlaces.filter((v) => v['identificacion'] == input.value);

      if (enlace.length > 0) {
         this.router.navigate(['../usuario',enlace[0]['identificacion']]);
      }
   }
}
