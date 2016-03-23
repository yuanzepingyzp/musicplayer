$(document).ready(function(){
		var audio=$("audio")[0];
            $("audio").on("ended",function(){
           playNext();
            });


		$("#play").on("click",function(){	
            togglePlay();
      });	
      $("#colorBar").on("click",function(e){
            e=e||window.event
		var x=e.offsetX;
            audio.currentTime=x/400*audio.duration;                 
		});
      $("li").on("click",function(){ 
            $(this).siblings().toggle();
            $(".play").removeClass("play");
            $(this).addClass("play");
            var src=$(".play").attr("rel");
            $("audio").attr("src",src);
            pause();
            audio.play();
            barInterval=setInterval(colorBar,40);
            firstInterval=setInterval(first,40);
            
      });
      $("#next").on("click",function(){
            playNext();
      });
      $("#pre").on("click",function(){
            playPre();
      });
});
//播放前一首歌曲
function playPre(){
      var audio=$("audio")[0];
      if($("audio").attr("src")===""){
            $(".play").css("color","rgb(220,150,110)");
            }else{ 
                  $(".play").removeClass("play").toggle().prev().addClass("play").toggle();
                  var src=$(".play").attr("rel");
                  $("audio").attr("src",src);
                  pause();
                  audio.play();
                  barInterval=setInterval(colorBar,40);
                  firstInterval=setInterval(first,40);
                 }
}
//播放下一首歌曲
function playNext(){
      var audio=$("audio")[0];
       var num=$(".play").nextAll().length;

            if($("audio").attr("src")===""){
            $(".play").css("color","rgb(220,150,110)");
            }else if(num==0){ alert("已是最后一首");}else{
        
            $(".play").removeClass("play").toggle().next().addClass("play").toggle();
            var src=$(".play").attr("rel");
            $("audio").attr("src",src);    
            pause();
            audio.play();
            barInterval=setInterval(colorBar,40);
            firstInterval=setInterval(first,40);
            }     
}
//切换播放与暂停
function togglePlay(){
      var audio=$("audio")[0];
      if($("audio").attr("src")===""){
            $(".play").css("color","rgb(220,150,110)");
            }
            else if(audio.paused){
                  pause();
                  audio.play();
                  barInterval=setInterval(colorBar,40);
                  firstInterval=setInterval(first,40);
            }else{
                  play();
                audio.pause();
            clearInterval(barInterval);
            clearInterval(firstInterval);
            }     
}