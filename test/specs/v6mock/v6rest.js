// var {animalid,animalname,...adetails}={
// animalid:"A1009",
// animalname:"Duckling",
// cageno:"C298",
// feedno:"F234",
// animalimg:"c:/users/pic1.png"}
// console.log(adetails);
//SPREAD PARAMETERS

// var vdetails=[{vname:"krishnamoorthy",city:"Bangalore"}]
// var Tdetails=[{tid:"A123",date:"10-10-2022"}]
// // console.log(`Ticket details are`);
// console.log(...vdetails,...Tdetails);//{ vname: 'krishnamoorthy', city: 'Bangalore' } { tid: 'A123', date: '10-10-2022' }

var vdet=["bharati","bangalore"]
var tdet=["A234","20-10-2022"]
console.log(...vdet,...tdet)
// async function alertpopup(pagetitle){
//     var p=new Promise((resolve,reject)=>{
//        // var pagetitle="zoo management system";
//         var exptitle="zoo management system";
//         if(pagetitle==exptitle){
//             resolve("page displayed")
//         }
//         else{
//             reject("page not displayed")
//         }
//     })
//     await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg));
// }alertpopup("zoo");

//BUILT IN FUNCTIONS CALL, BIND,APPLY

// var visitor1={
//     vname:"uma",
//     tid:"A234",
//     display1()
//     {
//         console.log(this.vname+" "+this.tid);
//     }
// }

// var visitor2={
//     vname:"suma",
//     tid:"S345",
//     display2()
//     {
//         console.log(this.vname+" "+this.tid);
//     }
// }

// function display3()
// {
//     console.log(this.vname+" "+this.tid);
// }

// visitor1.display1.call(visitor2);
// var v=visitor1.display1.bind(visitor2);
// console.log(v);
// visitor1.display1.apply(visitor2);

// const animals=[01,234,876,3980,10,98,54]
// console.log(animals.filter((i)=>{
//     if(i>200)
//     {
//         return i
//     }
// }))
    
// const animals=[01,234,876,3980,10,98,54]
// console.log(animals.some((i)=>{
//     if(i>200)
//     {
//         return i
//     }
// }))

// const animals=[01,234,876,3980,10,98,54]
// console.log(animals.every((i)=>{
//     if(i>200)
//     {
//         return i
//     }
// }))
   
// const namedetails=[
//     {
//     fname:"bharati",
// lname:"rao"}
// ]
// console.log(namedetails.map(getfullname));
// function getfullname(i){
//     return[i.fname,i.lname].join(" ")
// }



