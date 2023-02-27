import { Injectable } from '@angular/core';
import { of, Subject, switchMap, take } from 'rxjs';
import { fromFetch } from 'rxjs/fetch'

export interface Mode{
  name: string,
  field: Number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  modes$: Subject<Mode[]> = new Subject<Mode[]>();

  constructor() { }

  fetchGameModes() {
   const serverModes = fromFetch('http://demo7919674.mockable.io/').pipe(
    switchMap((res: any) => {
      if (res) {
        return res.json()
      } else {
        return of({ error: true, message: `Error ${ res.status }` });
      }
    })
   );

   serverModes.pipe(take(1)).subscribe((modes) => {
    this.modes$.next(modes as Mode[]);
   })
  }
}

