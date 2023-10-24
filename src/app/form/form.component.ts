import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formData: FormGroup;

  formSubmitted: boolean = false;

  constructor(private dataService: DataService, private fb: FormBuilder){
    this.formData = this.fb.group({
      name: ['', Validators.required],
      username: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    if (this.formData.valid) {
      console.log('Submitted data', this.formData.value);
      this.dataService.postData(this.formData.value);
      this.formSubmitted = true;
    } else {
      console.log('Invalid data');
    }
  }

}
