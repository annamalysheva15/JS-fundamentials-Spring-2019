// 9. CountDown counter

function countDown(val){
    setTimeout(
        val ? () => countDown(val - 1)
            : () => val
        ,1000);
    console.log(val);
}

countDown(3);