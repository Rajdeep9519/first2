console.log("Hey")
arr=[1,4,5,7]
console.log(arr)
var a=2;
var b=6;
function avg(a,b)
{
let av=(a+b)/2;
 return av;
}
console.log(avg(6,8));
console.clear();
arr.pop()
console.log(arr);
arr.shift();
console.log(arr);
arr.push(5);
console.log(arr);
arr.unshift(56);
console.log(arr);
d=arr.length;
console.log(d);
arr.push(3,3,6,8,9,9);
console.log(arr);
d=arr.length;
console.log(d);
var str="Hello this is string";
console.log(str);
d=str.length;
console.log(d);
console.log(str.indexOf("this"));
console.log(str.slice(1,8));
str=str.replace("Hello ","Raj,");
console.log(str);
let m=new Date();
console.log(m);
console.log(m.getTime());
console.log(m.getFullYear());
console.log(m.getDay());
console.log(m.getMilliseconds());
console.log(m.getSeconds());
function clicked()
{
  console.log("Button was clicked")
}
marg.addEventListener('click',function(){
  console.log("Click hua")
})
marg.addEventListener('click',function(){
  document.querySelectorAll('.heig')[0].innerHTML= "<b> I have been clicked";
  console.log("Click hua");
})
















