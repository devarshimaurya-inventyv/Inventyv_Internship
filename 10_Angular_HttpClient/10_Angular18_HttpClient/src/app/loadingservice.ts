import { Injectable , signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loadingservice {
   load = signal(false);

   show(){

    this.load.set(true);
   }

   hide(){

        this.load.set(false);

   }
}
