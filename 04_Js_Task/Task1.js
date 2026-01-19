console.log("Q-1");


function Promisef(arr){
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


function main(){
 let array1=[1,2,20];
 let removed=array1.shift();
 console.log("removed element form array1 is : ", removed);
 console.log("now array1 is : ",array1);
 let arr=second(removed,array1);
 console.log("now arr is : ",arr);

 Promisef(arr).then()
 .catch();


}

function second(removed,array1){
    let array2=[7,8];
    array2=[removed,...array1,...array2];   
    return array2;
}


    

main();