//Access 

let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

//listen

btn.addEventListener("click" , function(){
    let item=document.createElement("li");//creating new item
    item.innerText=inp.value;//item me inp ka value add kr rhe h

    let delbtn=document.createElement("button");// delete button baneya
    delbtn.innerText="delete";//button ka naam de rhe h
    delbtn.classList.add("delete");


    item.appendChild(delbtn);//use kr rhe h button
    ul.appendChild(item);//ul ke under as a child element add krna chahte hai 
   inp.value=""; //to clear the input bar

});

ul.addEventListener("click" , function(event){
  console.log(event.target.nodeName);//target batata hai ki kon sa element pe action hua h.
   if(event.target.nodeName=="BUTTON"){
    let rem=event.target.parentElement;
    rem.remove();
   }
})
   // for delete button
   let delbtns=document.querySelectorAll(".delete");
   for(delbtn of delbtns){
    delbtn.addEventListener("click" , function(){
      let par=this.parentElement;
      console.log(par);
      par.remove();
    });
   }

