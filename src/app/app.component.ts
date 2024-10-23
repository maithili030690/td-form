import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'td-form';
  userNMaxLFlag :boolean =false;
@ViewChild('signup') signup ! : NgForm


ngOnInit(): void {
  // setTimeout(()=>{
  //   console.log(this.signup?.controls['userName'])
  //   this.signup.controls['userName'].valueChanges
  //   .subscribe(data=>{
  //     console.log(data)
  //     if(data.length >= 12){
  //       this.userNMaxLFlag =true
  //     }else{
  //       this.userNMaxLFlag =false
  //     }
  //   })

  // },500)
}
contactMode=[
  {mode:'Phone',id :1},
  {mode:'Email',id :2}
]

userObj={
  "userDetails": {
      "userName": "dddddddddddd",
      "email": "Aj@gmail.com"
  },
  "secretQuestion": "favouritesport",
  "answer": "batminton",
  "isSubscribe": true,
  "moc": "Phone"
}
onEdit(){
  this.signup.form.patchValue(this.userObj)
}

onUserNamekeyup(eve:Event){
  let valLength =(eve.target as HTMLInputElement).value.length
  console.log(valLength)
  if(valLength >=12){
    this.userNMaxLFlag =true
  }else{
    this.userNMaxLFlag 
  }

}
  onSignUp(){
    if(this.signup.valid){
      console.log(this.signup.value)
      this.signup.reset()
    }
   
  }

}
