import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './model/data.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'app-sum';
  data: Data;
  form: FormGroup;

  max_int_value_java: number = 2147483647; // dimensione massima valore intero in java

  constructor(public http: HttpClient, public fb: FormBuilder) {
    this.form = fb.group({
      'num1':['', Validators.required],
      'num2':['', Validators.required]
    });
  }

  ngOnInit(): void {console.log("Init!")}

  // Funzione di controllo dati inseriti
  check(tag: string): void {
    let numero: number = this.form.controls[tag].value;
    if(numero < this.max_int_value_java/2 && Number.isInteger(numero)) {
      this.form.controls[tag].setErrors(null);
    } else {
      this.form.controls[tag].setErrors({incorect: true});
    }
  }

  // Funzione che invia i dati attraverso una POST
  send() : void {
    if(!this.form.valid) {
      alert("Alcuni campi non sono validi!");
      return;
    }
    else {
      this.http.post<Data>('http://localhost:8080/sum', {
        num1: this.form.controls['num1'].value,
        num2: this.form.controls['num2'].value
      }).subscribe(res => {this.data = res; console.log(this.data);})
    
      /*this.http.get<Data>('http://localhost:8080/vediamo?num1='+
        this.form.controls['num1'].value+'&num2='+
          this.form.controls['num2'].value).subscribe(res => {this.data = res;});*/ //GET
    }
  }
}
