function countDown(number)
{
	setTimeout(function minus() {
		
		if(number>=0)
		{
			console.log(number);
			number--;
			setTimeout(minus, 1000);
			
		}
	}, 1000);
	
}