//Array Destructuring
//var AnimalDetails=[animalName,AnimalImage,CageNo,FeedNo,breed,description]
// var AnimalDetails=["Gorilla","c:/users/pic.png",123,765,"Indiangorilla","from ape to man"]
// var aname=AnimalDetails[0]
// if(newanimal==aname){
//     console.log("Animal details added successfully")
// }

//Object Destructuring
// var TicketDetails={
//     TicketId:45678932,
//     VisitorName:"Bharati",
//     TicketDate:"10-10-2022"
// }
// let vname=TicketDetails.VisitorName;
// console.log(vname)

 //Class(static and non static)
//  class manageAnimals{
//      constructor(aniname,feedno,breed){
//          this.aniname=aniname;
//          this.feedno=feedno;
//          this.breed=breed;
//      }
//      static cageno=1000;
//      creationDate="10-10-2022"
//      static EditAnimals(){
// 		console.log("this is a static method")
//            console.log(this.cageno);
// 		   var a1=new manageAnimals();
// 		   a1.deleteAnimals()//infinite loop//calling non static method using obj .
//      }
//      deleteAnimals(){
// 		console.log("this is a non static method")
//          console.log(this.aniname);
// 		 manageAnimals.EditAnimals()//infinite loop //calling static method using class name
       
//      }
// } var animal1=new manageAnimals("elephant",189,872)
//  console.log(manageAnimals.cageno);
// console.log(animal1.aniname);
// animal1.deleteAnimals();
//  manageAnimals.EditAnimals();

//callback function
// function addAnimals(manageanimals){
//     console.log("animal added")	//animal added
//      manageanimals();
// }
// function manageanimals()
// {
//     console.log("animal details are"); //animal details are
//     console.log("animal id is  p0023"); //animal id is  p0023
//     console.log("animal name is  peacock"); //animal name is  peacock
//     }
// addAnimals(manageanimals);

//map- to execute defined function for every element of the array and returns 
//results in array form without modifying original array
// const visitorName=[
// {
//     fname:"mallika",lname:"vk"},
//     {fname:"roopa",lname:"s"}
// ]

// visitorList=visitorName.map(getFullName);
// console.log(visitorList) //[ 'mallika vk', 'roopa s' ]
// function getFullName(i){
//     return[i.fname,i.lname].join(" ")
// }
    
//filter -filters data in array according to the given condition and prints 
// results in array form.
const Animals=["tiger","lion","cheetah","elephant","bear","crocodile"]
Animals.filter(()=>
{
    for(i in Animals)
    {
        if(Animals.includes("tiger"))
        {
        //console.log(Animals.includes("tiger"))
         break
        }
    }
})

//promise
//function randomNumber(){
// const promise = new Promise((resolve, reject) => {
// 	const number = Math.floor(Math.random() * 10);

// 	setTimeout(
// 		() => number > 1
// 			? resolve(number)
// 			: reject(new Error('less than 5')),
// 		1000
// 	);
// });
// //}

// promise
// 	.then(number => console.log(number))
// 	.catch(error => console.error(error));

	//default paraameters

	// function animaldetails(anname,feed,breed,img,cageno=randomnum())
	// {   
	// 	function randomnum()
	// 	{
	// 	  var rno=Math.floor(Math.random() * 2)
	// 	  return rno
	//     }
	// 	console.log(`animal details are ${anname},${feed},${breed},${img},${cageno}`)
	// 	//console.log("animal details are")
	// 	// console.log("animal name is "+anname)
	// 	// console.log("animal feed is "+feed)
	// 	// console.log("animal breed is "+ breed)
	// 	// console.log("animal image is "+ img)
	// 	// console.log("animal cageno is "+cageno)
	// }animaldetails("rabbit",345,"indian","c:/pic1.jpg");

//generate random number
// var rno=Math.floor(Math.random() * 2)
// console.log(rno)

//promise
// async function popup(){
// 	var p=new Promise((resolve,reject)=>{
// 		var alerttext=exptext
// 		if(alerttext==exptext)
// 		{
// 			resolve("popup visible")
// 		}
// 		else
// 		{
// 			reject("popup not visible")
// 		}
// 	})
// 	await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
// }

//Arrow function to generate random number
//  randomNumber=()=>
//  {
//   console.log(Math.random())  //0.06134611836266424
//  }
//  randomNumber()
     

 //let and const
//  let TicketId=Math.floor(Math.random());
//  if(TicketId>1)
//  {
// 	console.log("valid id")
//  }
//  else{
// 	console.log("invalid id")
//  }

// async function pagevalidate(){
// 	pagetitle=xpath.getText()
// 	var p=new Promise((resolve,reject)=>{
// 		if(pagetitle==exptitle)
// 		{
// 			resolve("page displayed")
// 		}
// 		else{
// 			reject("page not displayed")
// 		}

// 	})
// 	await p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
// }

// var animalIdlist=[192,876,345,098,123]
// animalIdlist.filter(()=>{
// 	for(i in animalIdlist){
// 		if(animalIdlist>100)
// 		{
// 			console.log(i)
// 		}
// 	}
	
// })

// var visitordetails=[
// 	{fname:"bharati",lname:"rao"},
// 	{fname:"vijay",lname:"bhat"},
// 	{fname:"vivek",lname:"bhat"}
// ]

// 	namelist=visitordetails.map(getName)
// 	console.log(namelist);
// 	function getName(i)
// 	{
// 		return[i.fname,i.lname].join(" ")
// 	}
		
	
