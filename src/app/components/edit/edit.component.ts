import { Component, OnInit } from '@angular/core';
import { AirplaneService } from '../../airplane.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private airplaneService : AirplaneService,private router: Router, 
    private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
      this.createForm();
    }

  id: number;
  airplane: any ={};
  updateForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.airplaneService.getAirplaneById(this.id).subscribe(res => {
        this.airplane = res;
        this.updateForm.get('code').setValue(this.airplane.code);
        this.updateForm.get('model').setValue(this.airplane.model);
        this.updateForm.get('numberOfSeats').setValue(this.airplane.numberOfSeats);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      code: ['', Validators.required],
      model: ['', Validators.required],
      numberOfSeats: ['', Validators.required]
    });
  }

  updateAirplane(code, model, numberOfSeats) {
    this.airplaneService.updateAirplane(this.id, code, model, numberOfSeats).subscribe(() => {
      let snackbarOpen = this.snackBar.open('Airplane updated successfully', 'OK', {
        duration: 3000
      });
      snackbarOpen.afterDismissed().subscribe(null, null, () => {
        this.router.navigate(['/list']);
      })
      
    });
  }

}
