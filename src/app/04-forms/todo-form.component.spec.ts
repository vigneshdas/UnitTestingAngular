import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent();
  });

  it('Should create Form with 2 controller', () => {
    expect(component.form1.contains('name')).toBe(true)
  
    //expect(component.form1.contains('email')).toBe(true)
  });

  it('Should make name controller required', () => {
    const nameController = component.form1.get('name');
    nameController.setValue('')
    expect(nameController.valid).toBe(false);

    nameController.setValue('test')
    expect(nameController.valid).toBe(true);
  });
});