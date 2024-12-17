function findSum(){
    let num=prompt("PLEASE ENTER A NUMBER BETWEEN 1 TO 50")
    
    let sum=0
    if(num<=50){
        //document.write(num)
        for(let i=1;i<=num;i++){
            sum=sum+i
        }
        document.write(`sum of the ${num} is ${sum}`)
    }
    else{
        document.write()
        alert(`invalid nuumber`)
    }
    

}
findSum()