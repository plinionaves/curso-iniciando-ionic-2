import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectionService {

  constructor(private http: Http) {}

  getCep(cep: string) : Promise<Response> {
    return this.http.get('https://viacep.com.br/ws/' + cep.trim() + '/json/').toPromise();
  }

}
