import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';

function Containers(){
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
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Containers;