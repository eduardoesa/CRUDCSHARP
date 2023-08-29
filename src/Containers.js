import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import { Router, Routes, Route} from 'react-router-dom';
import {useEffect, useState } from 'react';

const Containers = ()=>{
    
    const empdata = [
        {
            id:1,
            name:'eduardo'
        }

    ]

    const[data,setData] = useState(0);

    useEffect(()=>{
        setData(empdata);
    },[])
    
    return(
        <div>
            <Stack direction='horizontal' gap={3}>
            <div className='p-2 ms-5' style={{fontWeight:'bold',fontSize:35}}>CONTAINER</div>
            <Button variant='success' size='lg' className='p-2 ms-auto m-3'href='/cadastrar'>Cadastrar novo container</Button>
            </Stack>
            <br/><br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length> 0 ?
                        data.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td colSpan={2}>
                                        <button className='btn btn-success'>Editar</button> &nbsp;
                                        <button className='btn btn-danger'>Deletar</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'Loading...'
                    }
                    
                
                </tbody>
            </Table>
        </div>
        
 
    );
}

export default Containers;