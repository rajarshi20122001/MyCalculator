let string="";
let btns=document.querySelectorAll(".button")
btns.forEach(function(e){
    // console.log(btns)
    e.addEventListener('click',function(g){
        if(g.target.innerHTML=='=')
        {
            try{
            string=eval(string);
            document.querySelector(".input").value=string;
            }
            catch(error)
            {
                document.querySelector(".input").value="error";
                string="";
            }
        }
        else if(g.target.innerHTML=='C')
        {
            string=""
            document.querySelector(".input").value=string;
        }
        else if(g.target.innerHTML=='Del')
        {
            string=string.substring(0,string.length-1);
            document.querySelector(".input").value=string;
        }
        else{   
                console.log(g.target.innerHTML);
                string=string+g.target.innerHTML;
                document.querySelector(".input").value=string;      
            }
    })
})