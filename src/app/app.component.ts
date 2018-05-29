import { Component, OnInit } from '@angular/core';
import { PersonService } from './app.service';
import Person from './person.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test Project';
  persons: Person[];
  constructor(public personService: PersonService) {}

  ngOnInit() {
    this.personService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }
}
