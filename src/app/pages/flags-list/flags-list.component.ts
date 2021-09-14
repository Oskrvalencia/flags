import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FlagService } from 'src/app/services/flag.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-flags-list',
  templateUrl: './flags-list.component.html',
  styleUrls: ['./flags-list.component.sass'],
})
export class FlagsListComponent implements OnInit {
  public flagsList: any;
  public filterFlags = '';
  public selectListFlags = '';
  public faSearch = faSearch;

  constructor(private router: Router, public flagService: FlagService) {}

  async ngOnInit() {
    this.flagsList = await this.getFlags();
    this.flagsList = this.flagsList.data;
  }

  getFlags() {
    let data = axios.get(`${environment.flags}`).then(function (response) {
      return response;
    });
    return data;
  }

  async show(flag: any) {
    this.router.navigate(['flaglist','flag']);
    this.flagService.flag = flag;
  }
}
