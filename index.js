//const arr1 =[1,"hello",true,false,[123]];
//const arr2=[]

//arr1[500]=1231;
//arr2.push(1222)
//console.log(arr1,arr2)

//const arr3=[1,2,3,4];
//arr3[3]=12;
//console.log(arr3)

//const a-h = "w";ห้ามใช้ ขีดกลาง ถ้าอยากได้ต้องทำตามด้านล่าง

//const obj ={
//    key:2,
//    _key2:"Hello",
//    'key-2':"value"//ถ้าอยากได้ขีดต้องสร้างแบบนี้
//};
//console.log(obj.key)
//console.log(obj._key2)
//console.log(obj["key-2"])

//const obj={
//    arr:[
//        {name:"Saro"},
//        false
//    ]
//}
//console.log(obj.arr)ลองรันไปทีละขั้น
//console.log(obj.arr[0])
//console.log(obj.arr[0].name)

//const obj =null;//obj ว่างเปล่า objที่ยังไม่ถูกสร้าง false
//const obj2 =undefined;//ค่าเริ่มต้นจะเป็นอันนี้ หมายถึงยังไม่ประกาศ
//obj.key //จะได้ undefined
//obj2.key
// obj ={}จะเป็นไม่มีค่า true
//เปลี่ยนค่าให้เป็น บูลีน



//จะเป็นtrue  false ก็ต่อเมื่อ numตั้งเเต่0 ลงไปfalse มากกว่า0 เป็นtrue ถ้าสตริง ว่างเป็นfalse ถ้ามีตัวหนังสือเป็นtrue 
//undefined Nan null เป็น false  ถ้าเป็น obj เปล่าๆๆจะเป็น true 

//let result =1+2;
//result +=2;
//result=result+2; 3บรรทัดเหมือนกัน

//result = result +1;
//result+=1;
//result++; ส่วนใหญ่ใช้แบบนี้
//++result; 4 บรรทัดเหมือนกัน
// ลบๆ ก็ใช้เหมือนกันกับบวกเลย

//ใช้ บวก ลบ คูณหาร ก่อนหน้าเท่ากับได้หมดเลย
//บวกเท่าหรือคูณเท่ากับถ้าไม่ใส่วงเล็บจะทำบวกเท่ากับทีหลัง

//const numStr ="100";
//console.log((+numStr)+50)
//เปลี่ยนSrtimg เป็นnum

//let num1=2;
//let num2=3;
//console.log((num1+=5)>=10);
//console.log(num1)

//console.log(true&&false)
//console.log(((num1+=5)>=10)&&((num2+=5)>=10)) ถ้าข้างหน้าเป็นจริงด้านหลังก็จะทำด้วย คำตอบจะเป็น 7กับ 8 แต่ถ้าข้างหน้าเท็จด้านหลังจะไม่ทำคำตอบจะเป็น 7กับ 3 
//console.log(num1,num2)

//console.log(200==="200")//เช็คว่าค่าตรงกัน typeเท่ากันหรือไม่ ถ้าเป็น = 3 ตัว 
//console.log(200===!"200")

//const someVar="50"+20
//console.log(someVar,typeof someVar) //เช็คว่าเป็นtype อะไร
//console.log(typeof undefined)//จะมีค่าเป็นundefine เสมอ เพราะมันไม่มีค่า
//console.log(typeof {},typeof null)//มันจะเป็นค่าของ obj
//console.log(NaN)//จะเป็นเลข เอาไว้ใช้เป็นเช็คตัวเลข เอาไปใช้กับ && กับ || 

//อาเรย์ของoperator คือการกระจายค่า

//const arr=[1,2,3,4] ถ้า อาเรย์2 เหมือนกันมันจะเป็น false 
// const arr2=arr;



//arr2[1]=20 มันไปแก้ ที่อยู่อันแรก
// console.log(arr)
//console.log(arr2)

//ถ้าจะcopy arr ค่าจริงงของobj ไม่ใช่ ที่อยู่ ก็จะก็อปมาได้ใช้ [... arr]
//อยาก copy arr อันเเรก จะทำไง ก็เเค่ , ต่อได้เลย
//รวม arr 2อันเข้าด้วยกัน ก็เเค่ [...arr,...arr2]ต่อเเบบเปลี่ยน ที่อยู่
//อยากเปลี่ยนลำดับ แค่เปี่ลยน ที่อยู่

//มีค่าเท่ากัน ดูรูปในโทรศัพท์

//ถ้าเป็นเเบบ obj ต้องใส่ตำแหน่งให้ แต่ถ้าเป็นอาเรย์ไม่ต้องใส่ตำแหน่งให้

//for ลูป ต้องใช้ let เท่านั้น 

//const str ="hello"
//const result = 50 //ต้องเปลี่ยนเป็นlet ถึงจะได้
//if(str.length===!0)// จะเเช็คความยาว
//if (str){} จะมีค่าเท่ากัน
//if((result+=50)>=100){}


//const arr=[1,2,3,4]
//for(const a in arr ){
//console.log(a)
//}//บอกตำเเหน่ง อ่านkey
//for(const b of arr){
//console.log(b)
//}//ใช้เอาค่าข้างในมาอ่าน value

//การประกาศฟังชั่น ใช้ ได้ 3เเบบ 
// obj ใส่function ได้ function ใส่ตรงไหนก็ได้

//function sum(){

//}
//let sum =function(){

//}//แบบนี้อ่านง่ายกว่า

//let sum=(num1,num2) =>{
//  return num1+num2;
//}
//console.log(sum(1));

//const func=param => param
//function func(param){return param}//เหมือนกันกับด้านบน

/////////
//const multiply5 = num => num*5
//function multiply5 (num){
//    return num*5;
//}//เหมือนกันกับด้านบน

//เรส คือ ... 

// var ข้อดีคือ สามารถทับได้ สคอปของ var คือ โกโบลสคอปเสมอ  ข้อเสียคือ สคอปมันไม่เเน่นอน ถ้าอยากให้เเน่นอน ใช้ let เเนะนำให้ใช้ const มากกว่า let

//เสร็จก่อนทำก่อน มาทีหลังก็ทำทีหลัง ซิงคอนัส //ซิงคอนัส ซิงเกิลเทรด อันไหนทำานกว่าก็จะตอบเวลาของอันนั้น
//future value ของ phyton
 //settimout 2 para 
//settimout(()=>{
//},1000); เรียกว่า callback พารามิเตอร์ที่เป็นฟังชั่น จะถูกรันหลังผ่านไป1วินาที 

//const timeout =1000;

//setTimeout(()=>{
  //  console.log("afrgref")
//},timeout)

//เป็นเอ็ซซิงโคนัส ต้องรอเวลาไปก่อน

//=> ลูกศรคือฟังชั่น

// .oay'=yovk:b' iv0od;jk8b;0tiyogliH0gg]tiv0od;jkvvgfviN0tiyogliH0






