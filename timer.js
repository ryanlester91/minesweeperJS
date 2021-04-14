var Time = 20;
    var Countdown = setInterval(function(){
    
      ++Time;
      if(document.getElementById("timer") != null){
        var idPost=document.getElementById("timer").innerHTML;
    }
    
      if(Time >=10) {
          Time + 10;
      }
    
    })
    console.log(Time);
    