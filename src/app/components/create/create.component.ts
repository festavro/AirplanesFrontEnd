import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AirplaneService } from '../../airplane.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private airplaneService : AirplaneService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      code: ['', Validators.required],
      model: ['', Validators.required],
      numberOfSeats: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addAirplane(code, model, numberOfSeats) {
    this.airplaneService.createAirplane(code, model, numberOfSeats).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

}
