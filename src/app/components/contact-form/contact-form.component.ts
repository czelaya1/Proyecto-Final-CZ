import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formNewData: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formBuild();
  }

  private formBuild(){
    this.formNewData = this.formBuilder.group({
      fullName: ['', [Validators.required,Validators.maxLength(80), Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{1,80}$/)]],
      email: ['',[Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)]],
      affair: ['',[Validators.maxLength(40), Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)]],
      detail: ['',[]]
    })
  }

  validField(formControlName: string){
    return this.formNewData.get(formControlName)?.touched && this.formNewData.get(formControlName)?.valid;
  }

  nonValidField(formControlName: string){
    return this.formNewData.get(formControlName)?.touched && this.formNewData.get(formControlName)?.invalid;
  }

  showError(element:string, errorType: string){
    return this.formNewData.get(element)?.hasError(errorType);
  }

}
