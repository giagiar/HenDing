<script>
var timer;

function play(){
    timer=setInterval(function(){ //內建定時器多次執行
        next.onclick();//每1.5秒執行下一張事件！！
    },1500)
}
play();//載入JS自動輪播！
</script>