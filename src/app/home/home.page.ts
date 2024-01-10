import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  messages:any
  userName="Attila"
  constructor(private base:BaseService) {
    this.base.getMessages().snapshotChanges().pipe(
      map(
        (ch)=> ch.map(
          (c)=>({key:c.payload.key, ...c.payload.val() })
        )
      )
    )
    .subscribe(
      (res)=>this.messages=res
    )
  }

  addMessage(){
    let message={userName:this.userName, time:new Date().toLocaleTimeString(), text:"Próba üzenet"}
    this.base.addMessage(message)
  }

}
