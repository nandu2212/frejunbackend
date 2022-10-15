const Wordswithstarta=(arr)=>{
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].startsWith("a") || arr[i].startsWith("A")){
            arr1.push(arr[i])
        }
    }
    return arr1
    }
    module.exports=Wordswithstarta;