import React, { Component } from 'react';
import { Card, Button, Row, Col,message } from 'antd'
import { Input } from 'antd'
import {connect} from 'react-redux'
import {addToDo} from '../../redux/actions'
import 'antd/dist/antd.css'


class AddRegister extends Component {

    state = {
        size: 'default'
    };

//esta arrow function es de ant design 
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
    
  
    render() {

        const {addTodoProp} = this.props;
        const size = this.state.size;
        const _handleKeyPress = (e) => {
            if (e.key === 'Enter') {

               if( document.getElementById('registro').value !== '' ){
                                    addTodoProp([document.getElementById('registro').value]); 
                                    document.getElementById('registro').value = null 
                                }
                                else{
                                    message.warning('El campo registro esta vacio');
                                } 
            }
            
          }
          const handleAddTodo = () =>{
            if( document.getElementById('registro').value !== '' ){
                addTodoProp([document.getElementById('registro').value]); 
                document.getElementById('registro').value = null 
            }
            else{
                message.warning('El campo registro esta vacio');
            }
          }
       
        return (
           
                <Card title="Agrega una nueva tarea" style={{ width: '100%', marginTop: 20, backgroundColor: '' }}>
                    <Row gutter={16}>
                        <Col sm={24} md={14}>
                            <Input onKeyPress={_handleKeyPress} id="registro" style={{marginBottom:10}} placeholder="Nueva Tarea" />
                        </Col>
                        <Col sm={24} md={6}>
                            {/* el onclick dispara el evento que se encuentra en el contexto de este componenete */}
                            <Button onClick={handleAddTodo}  type="primary" icon="plus" size={size}>Agregar</Button>
                        </Col>
                    </Row>
                </Card>
            
        );
    }
}
const mapStateToProps = state => ({
    registers : state.todos.registers
  })

  const mapDispatchToProps = dispatch => ({
    addTodoProp : (todos)=>dispatch(addToDo(todos))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(AddRegister);