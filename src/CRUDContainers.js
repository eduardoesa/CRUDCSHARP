import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';




function CRUDContainers(){
    
    const [email, setEmail] = useState();
    
    
    const adicionar = (e) =>{
        e.preventDefault();
        toast.success('Container adicionado com sucesso!');
    }
    function changeStatus(e){
        setEmail(e.value);
        
    }
    console.log(email);
    return(
        
        <div>
            <Container>
            <ToastContainer/>
                <br/><br/>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control type="email" placeholder="Insira o nome do cliente"/>
                        </Col>
                        
                    </Row>
                    <Row className='mt-3'>
                        <Col className='mt-3'>
                            <Form.Label>Número do container</Form.Label>
                            <Form.Control type="email" placeholder="Insira o nome do cliente"/>
                        </Col>
                        <Col className='mt-3'>
                            <Form.Label>Tipo do container</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={changeStatus}>
                                <option>Selecione o tipo</option>
                                <option value="cheio">20</option>
                                <option value="vazio">40</option>
                            </Form.Select>
                        </Col>  
                    </Row>
                    <Row className='mt-3'>
                        <Col className='mt-3'>
                            <Form.Label>Status do container</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione o status</option>
                                <option value="cheio">Cheio</option>
                                <option value="vazio">Vazio</option>
                            </Form.Select>
                        </Col>
                        <Col className='mt-3'>
                            <Form.Label>Categoria do container</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione a categoria</option>
                                <option value="importacao">Importação</option>
                                <option value="exportacao">Exportação</option>
                            </Form.Select>
                        </Col>  
                    </Row>
                    
                    
                    
                    
                    

                    <Button variant="primary" type="submit" className='mt-3' href='/container'>Submit</Button>
                </Form>
            </Container>
        </div>
    );
}

export default CRUDContainers;