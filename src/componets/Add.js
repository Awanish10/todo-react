import {useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function Add (){
    let navigate = useNavigate();
    const [formData,setFormData] = useState({})
    const InputHandle = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData,[name]:value})
       
    }
const saveFormData = ()=>{
   let data =  JSON.parse(localStorage.getItem('Name'));
if(data == null){
      data = [];
}
data.push(formData);
localStorage.setItem('Name', JSON.stringify(data));
navigate('/');
}
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
        />
      </FloatingLabel>
      <Form.Label></Form.Label>
      <Button variant="success" onClick={saveFormData}>submit</Button>

      </div>
</>


);

}
export default Add;