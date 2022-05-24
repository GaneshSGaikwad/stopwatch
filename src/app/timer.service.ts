import { Injectable } from '@angular/core';
import { Lap } from './lap/lap.component';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }


  private count:number=0;
  private interval: any;
  private hour:number=0;
  private minute:number=0;
  private second:number=0;

 get Hour(){
  return this.hour;
}

get Minute(){
  return this.minute;
}

get Second(){
  return this.second;
}

private flag:boolean=true;

private start1:boolean=false;
private  stop1:boolean=true;
private reset1:boolean=true;
private split1:boolean=true;

   //start2:boolean=false;
   //stop2:boolean=true;
   private reset2:boolean=true;
   private split2:boolean=true;

   private lap:Lap[]=[];

  get Lap(){
    return this.lap;
  }

  get Start1(){
    return this.start1;
  }

  get Stop1(){
    return this.stop1;
  }

  get Split1(){
    return this.split1;
  }

  get Split2(){
    return this.split2;
  }
  get Reset1(){
    return this.reset1;
  }

  get Reset2(){
    return this.reset2;
  }
  

    start():void{
        
         
       
        this.start1=true;
        this.split1=false;
        this.reset1=true;
        this.stop1=false;


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
    
      console.log("start")
    }

    stop():void{
       clearInterval(this.interval);
        console.log("stop")
        this.stop1=true;
        this.start1=false;
        this.split1=true;
        this.reset1=false;

        //this.split2=true;

        //this.y='stop';
        
        
    }



    reset():void{
        console.log("reset");
        clearInterval(this.interval);
       this.second=this.minute=this.hour=this.count=0;
       this.lap=[];
       this.start1=false;
       this.reset1=true;
       this.reset2=true;
       //this.split1=false;
       //this.reset2=true;
      
       //this.z='reset';

      
    }

    split(){
        const split=new Lap();
        split.hour=this.hour;
        split.minute=this.minute;
        split.second=this.second;
        this.lap.push(split);
        console.log(split);
        
        //this.a='split';

    }

}
