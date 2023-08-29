import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router, Routes, Route,useNavigate} from 'react-router-dom';
import {useState} from 'react';




function CRUDContainers(){
    const navigate = useNavigate();
    const [tipo, setTipo] = useState();
    const [status, setStatus] = useState();
    const [categoria, setCategoria] = useState();
    const [cliente,setCliente] = useState();
    
    function changeStatus(e){
        setStatus(e.target.value);
    }
    function changeCategoria(e){
        setCategoria(e.target.value);
    }
    function adicionar (e){
        e.preventDefault();
        console.log(tipo);
        console.log(status);
        console.log(categoria);
        console.log(cliente);
        toast.success('Container adicionado com sucesso!');
        navigate('/container');
    }
    
    return(
        
        <div>
            <Container>
            <ToastContainer/>
                <br/><br/>
                <Form onSubmit={adicionar} >
                    <Row>
                        <Col>
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control value={cliente} onChange={(e)=>setCliente(e.target.value)}type="text" placeholder="Insira o nome do cliente"/>
                        </Col>
                        
                    </Row>
                    <Row className='mt-3'>
                        <Col className='mt-3'>
                            <Form.Label>Número do container</Form.Label>
                            <Form.Control type="text" placeholder="Insira o nome do cliente"/>
                        </Col>
                        <Col className='mt-3'>
                            <Form.Label>Tipo do container</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e)=>setTipo(e.target.value)}>
                                <option>Selecione o tipo</option>
                                <option value="20">20</option>
                                <option value="40">40</option>
                            </Form.Select>
                        </Col>  
                    </Row>
                    <Row className='mt-3'>
                        <Col className='mt-3'>
                            <Form.Label>Status do container</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e)=>setStatus(e.target.value)}>
                                <option>Selecione o status</option>
                                <option value="cheio">Cheio</option>
                                <option value="vazio">Vazio</option>
                            </Form.Select>
                        </Col>
                        <Col className='mt-3'>
                            <Form.Label>Categoria do container</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e)=>setCategoria(e.target.value)}>
                                <option>Selecione a categoria</option>
                                <option value="importacao">Importação</option>
                                <option value="exportacao">Exportação</option>
                            </Form.Select>
                        </Col>  
                    </Row>
                
                    <Button variant="primary" type="submit" className='mt-3' >Cadastrar</Button>
                </Form>
            </Container>
        </div>
    );
}

export default CRUDContainers;