const fs =  require('fs');

fs.writeFile('FileA.txt' , 'this is a file : ', (e)=>{
    if(e)
    {
        console.log("error : ")
    }
    else
    {
        console.log("No error : ")
    }
})

fs.appendFile('FileA.txt','This is a New Data : ',(e)=>
{
    if (e) {
        console.log(e);
    }
    else{
        console.log('No Error : ')
    }
})

fs.readFile("FileA.txt",'utf-8',(e, data)=>
{
    if(e)
    {
        console.log(e);
    }
    else{
        console.log('no error : ')
        console.log(data)
    }
})

fs.rename("FileA.txt","NewFile.txt",(e)=>{
    if(e)
    {
        console.log(e)
    }
    else{
        console.log("no error : ")
    }
})

fs.unlink("NewFile.txt",(e)=>{
    if(e)
    {
        console.log(e);
    }
    else
    {
        console.log("NO Error : 1")
    }
})
