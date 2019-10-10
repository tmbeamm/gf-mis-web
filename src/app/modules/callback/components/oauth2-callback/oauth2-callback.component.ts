import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenService } from 'src/app/core/service/authen/authen.service';

@Component({
  selector: 'app-oauth2-callback',
  templateUrl: './oauth2-callback.component.html',
  styleUrls: ['./oauth2-callback.component.scss']
})
export class Oauth2CallbackComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private authenService: AuthenService
  ) {

  }

  ngOnInit() {
    this.authenService.getAccessTokenByCode(this.route.snapshot.queryParamMap.get('code')).subscribe(res => {
      let dataJSON = JSON.parse(res);
      let access_token = dataJSON.token_type + ' ' + dataJSON.access_token;
      sessionStorage.setItem('access_token', access_token);
      this.getProfile();
    });
  }

  getProfile() {
    this.authenService.profileGFMIS().subscribe(res => {
      console.log(res);
    });
  }

}
