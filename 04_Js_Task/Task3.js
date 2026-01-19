

function Promisesf(arr){
    return new Promise((resolve,reject)=>{
        let sum=arr.reduce((sum,x)=>{
            return sum + x;            
        },0)
        console.log("Sum is : ",sum );
        if(sum>35){
            resolve("Promise Resolved")
            console.log("Promise Resolved")
        }
        else{
            reject("Promise Rejeccted")
            console.log("Promise Rejeccted")

        }
    })
}

function main2(){
 let array1=Symbol("arr1");
let objarray1={
    [array1]: [10, 20, 30, 40, 50]
}
 let removed=objarray1[array1].shift();
 console.log("removed element form array1 is : ", removed);
 console.log("now array1 is : ",objarray1[array1]);
 
 console.log("object is : ",objarray1);
 let arr=second2(removed,objarray1[array1]);
 console.log("now arr is : ",arr);

 Promisesf(arr).then().catch();
 
}



function second2(removed,array1){
    let array2=Symbol("arr2");
let objarray2={
    [array2]: [7,8,9]
}
    console.log("Before op array2 is : ",objarray2[array2]);
    objarray2[array2]=[removed,...array1,...objarray2[array2]];

    return objarray2[array2];
    
}

main2();