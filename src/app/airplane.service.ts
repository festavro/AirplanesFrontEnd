import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AirplaneService {

  uri = 'https://localhost:44390';

  constructor(private httpClient: HttpClient) { }

  getAirplanes(){
    return this.httpClient.get(`${this.uri}/airplanes`);
  }

  getAirplaneById(id){
    return this.httpClient.get(`${this.uri}/airplanes/${id}`);
  }

  createAirplane(code, model, numberOfSeats){
    var airplane = {
      code: code,
      model: model,
      numberOfSeats: numberOfSeats
    };
    return this.httpClient.post(`${this.uri}/airplanes`, airplane);
  }

  updateAirplane(id, code, model, numberOfSeats){
    var airplane = {
      code: code,
      model: model,
      numberOfSeats: numberOfSeats,
      id:id
    };
    return this.httpClient.put(`${this.uri}/airplanes/${id}`, airplane);
  }

  deleteAirplane(id){
    return this.httpClient.delete(`${this.uri}/airplanes/${id}`);
  }
}
