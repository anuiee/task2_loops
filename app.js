//for loop
//print the array without value 3 using continue
console.log('FOR LOOP:print the array [1, 2, 3, 4, 5, 6, 7, 8,9] without number 3' );
let arr = [1, 2, 3, 4, 5, 6, 7, 8,9];
for(let i=0; i<10; i++){
    if(arr[i] == 3){
        continue;
    }
    console.log(arr[i]);
    
}

// while loop
//print the array 
//break is used
console.log('WHILE LOOP:print the array [w,h,i,l,e,l,o,o,p] using break at 5th element' );
let arr1 = ['w','h','i','l','e','l','o','o','p'];
let j=0;
while(j <= 10){
    if(j >= 5){
        break;
    }
    console.log(arr1[j]);
    j++;
}

//do while loop

console.log('DO-WHILE LOOP:print the array [do, while] ' );
let arr2 = ['do','while'];
let k=0;
do{
    console.log(arr2[k]);
    k++;
}while(k<=2); 