
export function checkEmail(email){
    let validRegex= "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
    if(email.match(validRegex)){
        console.log("valid email")
    }else{
        console.log("invalid email")
    }
}

export function checkPassword(email){
    
}

export function checkText(value){

}