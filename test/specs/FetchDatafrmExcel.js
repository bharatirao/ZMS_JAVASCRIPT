var xlsx=require("xlsx")
let excelpath=xlsx.readFile("./test/specs/Testdata/excelsheet.xlsx")
//let totalsheets=excelpath.SheetNames
let sheet=excelpath.SheetNames
let sh=excelpath.Sheets["Sheet3"]
let excelData=xlsx.utils.sheet_to_json(sh)
// console.log(excelData)
console.log(excelData[0])
console.log(excelData[0].url)
console.log(excelData[0].username)
console.log(excelData[0].password)
// [
//   {
//     url: 'http://rmgtestingserver/domain/Zoo_Management_System/',
//     username: 'admin',
//     password: 'Test@123'
//   }
// ]

// let e1=xlsx.utils.sheet_to_txt(sh)
// console.log(e1)
//
//url   http://rmgtestingserver/domain/Zoo_Management_System/
// uname   admin
// passwd  Test@123
// browser chrome

// let e2=xlsx.utils.sheet_to_csv(sh)
// console.log(e2)
// url,username,password
// http://rmgtestingserver/domain/Zoo_Management_System/,admin,Test@123

// let e3=xlsx.utils.sheet_to_html(sh)
// console.log(e3)