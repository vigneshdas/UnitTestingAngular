
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  getTodos() { 
    return this.http.get<any>('...').pipe();
    
  }

}