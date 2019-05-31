import { Component, OnInit } from '@angular/core';
import { AirplaneService } from '../../airplane.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Airplane } from '../../airplane.module'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private airplaneService : AirplaneService, private router: Router) { }

  airplanes: Airplane[];
  displayedColumns = ['code', 'model', 'numberOfSeats', 'creationDate', 'actions' ];

  ngOnInit() {
    this.getAirplanes();
  }

  getAirplanes(){
    this.airplaneService.getAirplanes().subscribe((airplanes: Airplane[]) => {
      this.airplanes = airplanes;
    });
  }

  editAirplane(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteAirplane(id){
    this.airplaneService.deleteAirplane(id).subscribe(() => {
      this.getAirplanes();
    });
  }

}
