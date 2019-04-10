function countDown(number) {
    if(number>0){
        console.log(number);
        setTimeout(countDown,1000,(number-1));
    }
    else {
        console.log(number);
        return 0;
    }
}

countDown(6);
countDown(15);
countDown(0);
countDown(3);
countDown(1);