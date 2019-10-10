import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackRoutingModule } from './callback-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Oauth2CallbackComponent } from './components/oauth2-callback/oauth2-callback.component';
import { AuthenService } from 'src/app/core/service/authen/authen.service';

@NgModule({
  declarations: [Oauth2CallbackComponent],
  imports: [
    CallbackRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [
    AuthenService,
  ]
})
export class CallbackModule { }
