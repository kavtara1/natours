let numberInserted = prompt("insert number");

if (numberInserted <=100){
	alert(numberInserted);
}

else {

	alert("you didn't guess the number")
}



let year = confirm("კითხვა");

if (year == true) {

	alert("2019");
}
else {
	alert("2018");
}


let x = 10;
   let y = ++x;
    if((x>y)  &&  (x-y == -1)){
   alert(x+y)
  }else{
   alert(x-y);
  }

y-ის მნიშვნელობა არ გაიზრდება 1 ით. Prefix from-ის გამო (++x). პირველი პირობა არ შესრულდება შესაბამისად გამოიტანს 0-ს

  let x = 0;
   let y = 15;
   let t = x*y; 0
   let z = t || y || x; 15 Z-ის მნიშვნელობა იქნება 15 რადგან  || აბრუნებს პირველი true მნიშვნელობას
   let p = t && y && x; 0  P-ს მნიშვნელობას იქნება 0 რადგან && აბრუნებს პირველი false მნიშვნელობას

    შესაბამისად 

   alert(z+t+x); 15
   alert(p+t+x); 0

   
