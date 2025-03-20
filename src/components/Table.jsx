import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function BooksTable({dataBooks, setEditStatus, editstatus, setName, setPlan, setAadharNo}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Plan</th>
          <th>AadharNo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataBooks?.map((item, index)=>{
            return  <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.plan}</td>
            <td>{item.aadharNo}</td>
            <td><Button variant='success' onClick={()=>{
                setEditStatus(true)
                setName(item.name)
                setPlan(item.plan)
                // setId(item.id)
                setAadharNo(item.aadharNo)
                
                }} size='sm'>Edit</Button>&nbsp; <Button variant='danger' size='sm'>Delete</Button></td>
          </tr>
        })}
       
    
      </tbody>
    </Table>
  );
}

export default BooksTable;