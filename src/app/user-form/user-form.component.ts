import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = new User;
  InsertedUser = new User;
  userJSON;
  constructor(private httpService: HttpClient) { }
  cities: any;
  ngOnInit() {
    this.httpService.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.cities = parseCities(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  submitUser(user, form) {
    this.InsertedUser = user;
    this.userJSON = JSON.stringify(user);
    this.user = new User();
  }
}

function parseCities(data: any) {
  let item: any;
  const parsedCities: any = [];
  for (item in data) {
      if (endsWithAny(['org', 'net', 'com'], data[item].website) && !containsCity(parsedCities, data[item].address.city)) {
        parsedCities.push({
          name: data[item].address.city,
          zip: data[item].address.zipcode
        });
      }
  }
  return parsedCities;
}

function endsWithAny(suffixes, string: any) {
  return suffixes.some(function (suffix) {
    return string.endsWith(suffix);
  });
}

function containsCity(array, string) {
  return array.some(function (city) {
    return string === city.name;
  });
}
