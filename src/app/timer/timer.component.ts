import { Component } from "@angular/core";

import { TimerService } from "../timer.service";

@Component({
    selector:'sw-timer',
    templateUrl:'./timer.component.html'
})

export class Timer{
    pageTitle:string='Timer'

    constructor(private timerservice:TimerService){}

    get Hour(){
        return this.timerservice.Hour;
    }

    get Minute(){
         return this.timerservice.Minute;
    }

    get Second(){
        return this.timerservice.Second;
   }

      get Lap(){
          return this.timerservice.Lap;
      }

      get Start1(){
          return this.timerservice.Start1;
      }

      get Stop1(){
        return this.timerservice.Stop1;
      }

      get Split1(){
        return this.timerservice.Split1;
      }
      get Split2(){
        return this.timerservice.Split2;
      }

      get Reset1(){
          return this.timerservice.Reset1;
      }
      get Reset2(){
        return this.timerservice.Reset2;
    }
    

    start(){
        this.timerservice.start();
    }

    stop(){
        this.timerservice.stop();
    }

    reset(){
        this.timerservice.reset();
    }

    split(){
        this.timerservice.split();
    }



    
    
}