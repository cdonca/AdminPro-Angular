import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 
    this.subscription = this.getObservable().subscribe( 
      success => console.log( 'Subs ', success ),
      error => console.error( 'Error', error ),
      () => console.log('Observable has finish it')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Page is goint to close");
    this.subscription.unsubscribe();
  }

  getObservable (): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let counter = 0;

      const interval = setInterval( () => {
        counter += 1;

        const output = {
          value: counter
        };  

        observer.next( output );

        // if ( counter === 3 ) {
        //   clearInterval(interval);
        //   observer.complete();
        // } 
        
        // if ( counter === 2 ) {
        //   observer.error('Auxilio!');          
        // }

      }, 1000); 
    }).pipe(
      map ( res => res.value ),
      filter ( ( value, index ) => {
        if ( (value % 2) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      }),
    );
  }
}
