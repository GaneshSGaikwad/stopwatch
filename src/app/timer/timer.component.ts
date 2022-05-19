import { Component } from "@angular/core";
import { Lap } from "../lap/lap.component";

@Component({
    selector:'sw-timer',
    templateUrl:'./timer.component.html'
})

export class Timer{
    pageTitle:string='Timer'

    count:number=0;
   interval: any;

   hour:number=0;
   minute:number=0;
   second:number=0;

   flag:boolean=true;

  lap:Lap[]=[];
  

    start():void{
        
        if(this.flag==true){
        this.flag=false;
        this.interval=setInterval(()=>{
            this.count++
           
            if(this.count<60){
                this.second=this.count;
            } 
            else if(this.count>60 && this.count<3600) {
               this.minute=Math.floor(this.count/60);
                this.second=Math.floor(this.count%60);
        }
        else if(this.count>3600 ) {
           this.hour=Math.floor(this.count/3600);
            this.minute =Math.floor(this.count/60);
            this.second=this.count%60;
    }

        },1000)

       }   console.log("start")
    }

    stop():void{
       clearInterval(this.interval);
        console.log("stop")
    }



    reset():void{
        console.log("reset");
        
       this.second=this.minute=this.hour=this.count=0;
       this.lap=[];

      
    }

    split(){
        const split=new Lap();
        split.hour=this.hour;
        split.minute=this.minute;
        split.second=this.second;
        this.lap.push(split);
        console.log(split);

    }

    
}