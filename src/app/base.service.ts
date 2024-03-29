import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  messages: AngularFireList<any>

  constructor(private db:AngularFireDatabase) {
    this.messages=this.db.list('/messages')
   }

  getMessages(){
    return this.messages
  }

  addMessage(message:any){
    this.messages.push(message)
  }

  saveMessage(message:any){
    this.messages.update(message.key, message)
  }
  
  deleteMessage(message:any){
    this.messages.remove(message.key)
  }
}
