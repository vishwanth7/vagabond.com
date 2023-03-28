let btn2=document.querySelector(".userbtn");
let preent=document.querySelector("#print");
let user=document.querySelector(".username");
btn2.addEventListener('click',()=>{
    let name=user.value;      
    if(name=='paddy')
   {
      preent.textContent="Hot";
    }
    else if(name=='rice'|| name=='')
    {
       preent.textContent="Hot";
    }
    else if(name=='fruit' || name=='vegetable')
    {
      preent.textContent='Cold';
    }
  })