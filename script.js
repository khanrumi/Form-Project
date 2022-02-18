let userName=document.getElementById("txtusername");
let email=document.getElementById("txtemail");
let pwd=document.getElementById("txtpwd");
let conpwd=document.getElementById("txtconpwd");
let form=document.querySelector("form");

function validateinput(){
  // console.log("validate input");
  if(userName.value.trim()===""){
    // let parent=userName.parentElement;
    // let mssageEle=parentElement;
    onerror(userName,"user name cannot be empty");
  }else{
    onsucces(userName);
  }
  if(email.value.trim()===""){
    onerror(email,"Email cannot be empty");
  }else{
    if(!isvaildEmail(email.value.trim())){
      onerror(email,"Email is not vaild");
    }
    onsucces(email);
  }
  //password
  if(pwd.value.trim()===""){
    // let parent=userName.parentElement;
    // let mssageEle=parentElement;
    onerror(pwd,"user name cannot be empty");
  }else{
    onsucces(pwd);
  }

  if(conpwd.value.trim()===""){
    onerror(conpwd,"user name cannot be empty");
  }else{
    if(conpwd.value.trim()===""){
      onerror(conpwd,"passwod'conpwd are not match");
    }
    else
    onsucces(conpwd);
  }
}

//     let massageEle=parent.querySelector("small");
//     massageEle.style.visiabilty="visible";
//     massageEle.innerText="user name cannot be empty";
// }else{
//   // let parent=userName.parentElement;
//   let parent=userName.parentElement;
//     // let mssageEle=parentElement;
//     let massageEle=parent.querySelector("small");
//     massageEle.style.visiabilty="hidden";
//     massageEle.innerText="";
//   }
// }

document.querySelector("button");
addEventlistener("click",(event)=>{
  event.parentDefualt();
  validateinput();
});

function onsucces(input){
  let parent=input.parentElement;
  let massageEle=parent.querySelector("small");
  massageEle.style.visiabilty="hidden";
  massageEle.innerText="user cannot be empty";
  parent.classlist.add("error");
  parent.classlist.remove("succes");
}

function onerror(input,massage){
  let parent=input.parentElement;
  let massageEle=parent.querySelector("small");
  massageEle.style.visiabilty="visible";
  massageEle.innerText=massage;
  parent.classlist.add("error");
  parent.classlist.remove("succes");
}

function isvaildEmail(email){
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\. [0-9]{1,3}\. [0-9]{1,3}\])|(([a-Az\-0-9]}+\.)+[a-zA-Z{2,}]))$\.test(email)
}
