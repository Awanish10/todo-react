import React, { useEffect,useState } from "react";
import {useParams } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Update(){
const [updata,setUpData] = useState({});
const navigate = useNavigate();
const {id} = useParams();

const InputHandle = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUpData({...updata,[name]:value})
}
const saveFormData = ()=>{

    let data =  JSON.parse(localStorage.getItem('Name'));
    for (let k = 0; k < data.length; k++) {
       if(id == k){
        data[k] = updata;
       }else{
        data[k] = data[k];
       }
        
    }
    localStorage.removeItem("Name");
localStorage.setItem('Name', JSON.stringify(data));
navigate('/');
}
useEffect(()=>{
const data = JSON.parse(localStorage.getItem('Name'))[id];
console.log("sdfd");
setUpData(data)

},[0]);
return (
    
<>
<div className="container p-2">
<Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={InputHandle}
            name="Todotitle"
            value={updata.Todotitle}
           />
           </Form.Group>
           <Form.Label>Your Task</Form.Label>
      <FloatingLabel controlId="floatingTextarea2">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          onChange={InputHandle}
          name="TodoValue"
          value={updata.TodoValue}
        />
      </FloatingLabel>
      <Form.Label></Form.Label>
      <Button variant="success" onClick={saveFormData}>submit</Button>

      </div>


</>

);

}

export default Update;