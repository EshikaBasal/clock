let Dabba= document.getElementsByClassName("Dabba");

setInterval(()=>{
        let MyDate = new Date();
        Dabba[0].innerText = MyDate.getHours();
        Dabba[1].innerText = MyDate.getMinutes();
        Dabba[2].innerText = MyDate.getSeconds();    
},1000)