import moment  from 'moment';

const isDate = (value) =>{
    if(!value){
        return false;
    }
    const fecha = moment(value,'DD/MM/YYYY HH:mm');
    if(fecha.isValid()){
        return true;
    }else{
        return false;
    }
}

export {isDate};