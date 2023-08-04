import React, { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
function Delete(){
const {state} = useLocation();
const navigate = useNavigate();
useEffect(()=>{

    const data = JSON.parse(localStorage.getItem('Name'));
   // data[state];
   data.splice(state,1);
     localStorage.removeItem("Name");
     localStorage.setItem('Name', JSON.stringify(data));
     navigate('/');

},[])
return(

    <>
    

    </>
);

}

export default Delete;