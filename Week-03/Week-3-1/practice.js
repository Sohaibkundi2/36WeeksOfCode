// what is javascript 
// javascript is programming language and it is used to make web pages interactive and dynamic.

// node js

// node js is javascript runytime environment that allows you to run javascript without browser using v8 engine.
// difference between javascript and node js
// javascript is a programming language and node js is a runtime environment that allows you to run javascript outside the browser.
// node js is used to build server side applications and javascript is used to build client side applications.

// javascript is single threaded and node js is multi threaded.
// it means that javascript can only run one task at a time and node js can run multiple tasks at a time.

// javascript is synchronous and node js is asynchronous.
// it means that javascript can only run one task at a time and node js can run multiple tasks at a time without waiting for the previous task to complete.

// Express js 
// express js is a web framework for node js that allows you to build web applications and APIs using javascript.
// it means that express js is a framework that allows you to build web applications and APIs using javascript and node js.
// for example, you can use express js to build a web application that allows users to create, read, update and delete data from a database using javascript and node js.
// express js is a lightweight framework that is easy to use and has a lot of features that make it easy to build web applications and APIs.
// basically it is used for routing and middleware.
// routing is the process of defining the routes for your web application and middleware is the process of defining the functions that will be executed before or after the request is processed by the server.
// for example, you can use middleware to authenticate users before allowing them to access certain routes in your web application.


//  Database Introduction
// database is collection of date where we can store, retrieve, update and delete data.
// data may be structured or unstructured.
// structured data is data that is organized in a specific format and unstructured data is data that is not organized in a specific format.

// JavaScript Foundation Revision
// callback function is a function that is passed as an argument to another function and is executed after the first function is executed.

// promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// let myPromise = new Promise((resolve, reject)=>{
//     let success = true
//     setTimeout(()=>{
//         if (success) {
   
//             resolve('success message')
//             console.log('Promise resolved ...')
//         } else {

//             reject('reject message')
//             console.log('Promise rejected ...')
//         }
//     },1000)
// })

// myPromise
// .then((msg)=>{
//     console.log('=>>>', msg)
// })
// .catch((err)=>{
//     console.error('=>>> ', err)
// })


async function fectData(){
    console.log('fetching the data ...')
    try {
        const result = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(' Data fetched using async/await')
            },1500)
        })
        // console.log(result)
        
    } catch (err) {
        console.error(Error, err)
    }
}

// fectData()

// array map 

// [1, 4, 27, 64, 125] output

function tripleNumber(numb){
    return numb.map((n)=>{
        return n*n*n
    })
}
const numbers = [1, 2, 3, 4, 5];
// console.log(tripleNumber(numbers))


// age above 18

function adults(ages){
    return ages.filter(age => age>=18)
}

const ages = [12, 25, 17, 30, 14, 22];
console.log(adults(ages))

// reduce
const nums = [10, 20, 30, 40];


function sum(nums){
    return nums.reduce((res, numb)=> res + numb, 0)
}
console.log(sum(nums))

// result will   :  100