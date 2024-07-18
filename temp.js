// const example = ( {a, b, c }) => { 
//     console.log(a, b, c); 
// }; 
// example({a:0, b:1, c:2});

// (function(){
//     setTimeout(()=> console.log(1),2000);
//      console.log(2); 
//       setTimeout(()=> console.log(3),0);
//      console.log(4); 
//    })();

// let obj = { a: 1, b: 2 };
//  let keys = Object.keys(obj);
//   console.log(keys); 

// console.log(foo());
//  function foo() { 
//     return "Hello, World!";
//  }  


// console.log(foo()); 
// var foo = function() {
//      console.log("Hello"); 
// }
// function foo() { 
//     console.log("Hi"); 
// } 

// var a = 1; 
// (function() { 
//     console.log(a); 
//      a = 2; 
//     console.log(a);
// })(); 
//     console.log(a);


// function test() { 
//     console.log(a); 
//     console.log(foo()); 
//     var a = 1;
//     function foo() { return 2; } 
//   } 
//   test();  


// let count = 0; 
// function increment() { 
//  count++; 
//   console.log(count); 
//   if (count < 5) { setTimeout(increment, 100); } 
// } 
// increment();  


// let x = 0; 
// setTimeout(() => {
//  x = x + 1; 
// console.log(x); 
// }, 0); 
// x = x + 1; 
// console.log(x);  

// let students = [ 
//     { id: 1, name: 'Alice', age: 20 },
//     { id: 2, name: 'Bob', age: 22 }, 
//     { id: 3, name: 'Charlie', age: 25 }, 
//     { id: 4, name: 'David', age: 18 } ];  

//     let filterStudent=students.filter((student)=>student.age>21)
//     console.log(filterStudent);

// let words = ['hello', 'world', 'javascript', 'openai', 'language']
//     let objArray=words.map((word)=> ({word:word,
//         length:word.length
//     }))
//     console.log(objArray);


// let employees = [ { id: 1, name: 'Alice', department: 'HR' }, { id: 2, name: 'Bob', department: 'Engineering' }, { id: 3, name: 'Charlie', department: 'Finance' }, { id: 4, name: 'David', department: 'HR' } ];

// let res=employees.find(employee => employee.department === 'HR');
// console.log(res)