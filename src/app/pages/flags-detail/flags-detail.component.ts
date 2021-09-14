import { Component, OnInit } from '@angular/core';
import { FlagService } from 'src/app/services/flag.service';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-flags-detail',
  templateUrl: './flags-detail.component.html',
  styleUrls: ['./flags-detail.component.sass'],
})
export class FlagsDetailComponent implements OnInit {
  public detailFlag: any;
  public faLongArrowAltLeft = faLongArrowAltLeft;

  constructor(public flagService: FlagService, private router: Router) {}

  ngOnInit(flag?: any) {
    if (flag) {
      this.detailFlag = flag
    } else {
      this.detailFlag = this.flagService.flag;
    }
  }

  async show(flag: any) {
    console.log(flag)
    let data = await axios.get(`${environment.detailFlags}${flag}`).then(function (response) {
      return response;
    });
    flag = data.data[0]
    this.ngOnInit(flag)
  }

  back() {
    this.router.navigate(['flaglist']);
  }

}


