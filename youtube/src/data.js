export const API_KEY = 'AIzaSyCOq_Mysxu7swsIei_i8kOSD2BivHovc_Q';

export const value_converter =(value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value=>1000)
    {
        return Math.floor(value/1000)+"K";
    }
        else{
        return value;
    }
}