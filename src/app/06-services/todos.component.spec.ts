import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable , from } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let services : TodoService;

  beforeEach(() => {
    services = new TodoService(null);
    component = new TodosComponent(services);
  });

  it('Should set Todos property with item returned from services', () => {

    spyOn(services,'getTodos').and.callFake( ()=>{
      return from([[1,2,3]]);
    });

    component.ngOnInit();
    console.log(component.todos.length)
    expect(component.todos.length).toBe(3);
  });
});