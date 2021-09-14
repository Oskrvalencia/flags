import { Component, OnInit } from '@angular/core';
import { FlagService } from 'src/app/services/flag.service';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flags-detail',
  templateUrl: './flags-detail.component.html',
  styleUrls: ['./flags-detail.component.sass'],
})
export class FlagsDetailComponent implements OnInit {
  public detailFlag: any;
  public faLongArrowAltLeft = faLongArrowAltLeft;

  constructor(public flagService: FlagService, private router: Router) {}

  ngOnInit(): void {
    this.detailFlag = this.flagService.flag;
  }

  back() {
    this.router.navigate(['flaglist']);
  }

}


