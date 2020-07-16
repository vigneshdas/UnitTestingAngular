
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

export class TodoFormComponent { 
  /**form: FormGroup; 

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }**/

  form1 = new FormGroup({
    name : new FormControl('',
      Validators.required
    )

  });
}