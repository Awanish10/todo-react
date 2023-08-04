import {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Todo(){
  const [storeData,setStoreData] = useState([]);

  useEffect(()=>{
    let data =  JSON.parse(localStorage.getItem('Name'));
    setStoreData(data);

  },[]);
if(storeData !=null){


return (
<>
<Table striped bordered hover >
  
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          storeData.map((value,index)=>{
            return (
              <>
              <tr>

              <td>{index+1}</td>
              <td>{value.Todotitle}</td>
              
              <td> <Link to='/delete' state={index}><Button variant="danger">Delete</Button> </Link>

              <Link to={`/update/${index}`}><Button variant="warning" >Update</Button></Link></td>

              </tr>
      
              </>
            );

          })

        }
        
      </tbody>
    </Table>
    <div align='center'>
    <Link to='/add'><Button variant="primary">Add Todo</Button></Link>
    </div>
 

</>

);
}else{

  return(
    <>
    <div align='center'>
    <Link to='/add'><Button variant="primary">Add Todo</Button></Link>
    </div>
    </>
  );
}

}
export default Todo;