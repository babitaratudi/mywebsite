function emailvalidate(email){
    if(email.includes('@')){
        return true;
    } else{
        return false;
    }
}

function clicklistener(event){
    let emailInput=document.querySelector("#email");
    let messageInput=document.querySelector("#message");

    let emailtext=emailInput.value;
    let messagetext=messageInput.value;

    if (emailvalidate(emailtext)){
        console.log("Your message is:");
        console.log(messagetext);
    } else{
        console.log("wrong email");
    }
}

let submitbutton=document.querySelector("#submit-button");
submitbutton.addEventListener('click',clicklistener);