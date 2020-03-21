function factorial(N){
	return N <= 1 ? 1 : N * factorial(N - 1);
}

console.log(factorial(3));

function printRange(iNumber){
   if (iNumber){
    console.log(iNumber);
    printRange(--iNumber);  
    }
   }

  printRange(4);