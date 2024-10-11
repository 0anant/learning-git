console.log('hii')
var sum = 0;
for(let i =0; i<=10; i++){
  sum = sum+i;
  console.log(i)
}
console.log(sum);
  function square(num){
  	let arr = [ ]
  	for(let i=1;i<=num;i++){
  		arr.push(i*i);
  	}
  	return arr;
  }

let arr1 = [ ]
arr1 = square(5);
console.log(arr1);
