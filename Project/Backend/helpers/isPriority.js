const isPriority = (value) =>{
    if(!value){
        return false;
    }

    if(value=>0 && value<6){
        return true;
    }else{
        return false;
    }
}

export {isPriority};