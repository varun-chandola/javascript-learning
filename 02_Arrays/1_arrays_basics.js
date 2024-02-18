const myArr = [ 1, 2, 3, 4, 5 ];
console.log(myArr);                 // op -> 1,2,3,4,5
//  or const myArr = new Array(1,2,3,4,5);  
//......................................................................
//  push() and pop() opeerations

const myarr = [ 1, 2, 3, 4, 5 ];
myarr.push(10); // pushes the element in last of array 
console.log(myarr);  // op-> [ 1, 2, 3, 4, 5, 10 ]
myarr.pop();   // pop out the last element of array
console.log(myarr);  // op-> [ 1, 2, 3, 4, 5 ]
//.....................................................................
// unshift() and shift() operations

// unshift() is like push . it pushes an element in START of array
const arr = [ 1, 2, 3, 4, 5];
arr.unshift(200); // ushift each array element because it entered a new element in the begginning of the array
console.log(arr); // op-> [ 200, 1, 2, 3, 4, 5 ]

// shift() is like pop it pops the FIRST element of the array
arr.shift() // pops
console.log(arr); // op-> [ 1, 2, 3, 4, 5 ]

//......................................................................
// .join() -> joins the array in another array in the form of string

const myArray = new Array(1,2,3,4,5) 
const newArr = myArray.join(); 
console.log(myArray)   // [1,2,3,4,5]
console.log(newArr)  // 1,2,3,4,5
console.log(typeof newArr) // string
console.log(newArr.length); // 9 => 1,2,3,4,5 
//  console.log(newArr[0]); // 1
//  console.log(newArr[1]); // ,
//  console.log(newArr[2]); // 2 
//  console.log(newArr[3]); // , 
//  console.log(newArr[4]); // 3
//  console.log(newArr[5]); // ,
//  console.log(newArr[6]); // 4
//  console.log(newArr[7]); // , 
//  console.log(newArr[8]); // 5


//.....................................................................
// slice() and splice() operations

// slice()
const arr1 = [0,1,2,3,4,5];
console.log('original',arr1);  // original [ 0, 1, 2, 3, 4, 5 ]
const arr2 = arr1.slice(1,4); //arr2 :  [ 1, 2, 3 ] 
// .slice(1,4) takes a slice of  the original array from index 1 to index 4(the last index is ignored )                                    so the operation will be performed from index 1 to index 3(4-1))  and the elements from the indexes 1,2,3 i.e [ 1, 2, 3 ] will be in arr2  and the original array remains the same throughout it is similar to the stack , it only passes the copy of values

console.log('after slice',arr2);  // arr2 [ 1, 2, 3 ]
console.log('after slice ,the original array is ',arr1);
// after slice ,the original array is : [0,1,2,3,4,5] (same)


// splice(); 
const array1 = new Array(0,10,20,30,40,50);
console.log('array1(original)',array1) //  [ 0, 10, 20, 30, 40, 50 ]
const array2 = array1.splice(1,3);
console.log('original',array1)  //  [ 0, 40, 50 ]
console.log('after splice',array2)  // [ 10, 20, 30 ]

// .splice(1,3) so the array from index 1 to 3 (last index is included) i.e [10 ,20 ,30] is stored in array2                                  and those elements are spliced or simply are cutted from the original array and the size of original array and elements in it is changed
// so the original array now becomes of the elements remaining after the splice i.e [40 ,50 ] . 
//splice is like heap , it passes the original values  and after splice the original values get changes too.