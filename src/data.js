export const API_KEY='AIzaSyBESszP3uyeLyOcW_XB3lCbZ1w-mWPx9II';

export const valueConvertor=(value)=>{
    if(value>=1000000){
             return  Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
         return Math.floor(value/1000) +"K";
    }
    else{
        return value;
    }

}