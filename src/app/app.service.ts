import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PersonService {
    constructor(private httpClient: HttpClient) { }

    public getPersons () {
        return this.httpClient.get('http://localhost:4200/assets/persons.json');
    }
}
