const changing=require("./change")
const Word=require("./findingarray")
const updationdata=(arr)=>{
    let arr1=Word(arr);
  //what  if out of last 3 which starts with a or A have a repeated value by using 2maps validated data
    let map1=new Map();
    let map2=new Map();
    for(let j=arr1.length-1;j>arr1.length-4;j--){
if(map2.has(arr1[j])){
    map2.set(arr1[j],map2.get(arr1[j])+1)
}else{
    let temp=changing(arr1[j]);
    map1.set(arr1[j],temp);
    map2.set(arr1[j],1)
}
    }    
    let data=[]
    for(let i=arr.length-1;i>=0;i--){
        if(map1.has(arr[i])){
            if(map2.get(arr[i])===1){
            data.unshift(map1.get(arr[i]));
            map1.delete(arr[i]);
            map2.delete(arr[i])
            }
            else if(map2.get>1){
                data.unshift(map1.get(arr[i]))
                map2.set(arr[i],map2.get(arr[i]-1))
            }
        }else{
            data.unshift(arr[i])
        }

    }
    return data.join(" ");
}
module.exports=updationdata;