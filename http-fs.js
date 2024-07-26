const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{
        const URL = req.url;
        // res.setHeader('Content-Type','text/html')
        if(URL=='/home')
        {
            fs.writeFileSync('FileA.txt','This Is About Home This Is File A ');
            const data = fs.readFileSync('FileA.txt')
            res.write(data);
            res.end();
        }

        else if(URL=='/about')
        {
            fs.writeFileSync('FileB.txt','This Is About About This Is File B ');
            const data = fs.readFileSync('FileB.txt')
            res.write(data);
            res.end();
        }

        else if(URL=='/contact')
        {
            fs.writeFileSync('FileC.txt','This Is About Contact This Is File C ');
            const data = fs.readFileSync('FileC.txt')
            res.write(data);
            res.end();
        }

        else if(URL=='/Service')
        {
            fs.writeFileSync('FileD.txt','This Is About Service This Is File D ');
            const data = fs.readFileSync('FileD.txt')
            res.write(data);
            res.end();
        }
        else if(URL == '/DeleteFileD')
        {
            fs.unlinkSync('FileD.txt')
            res.end();
        }
        else if(URL == '/DeleteFileC')
        {
            fs.unlinkSync('FileC.txt')
            res.end();
        }
        else if(URL == '/DeleteFileB')
        {
            fs.unlink('FileB.txt',(e)=>{
                if(e){
                    res.write("Hey File Dose Not Exit : ");
                    console.log('Hey : ')
                }   
            });
            res.end();
        }
        else if(URL == '/DeleteFileA')
        {
            fs.unlinkSync('FileA.txt')
            res.end();
        }
        else
        {
            res.write("Error : ");
            res.end();
        }
    


    }
)

server.listen(3000,()=>{
    console.log('Server 3000 is Started')
})
