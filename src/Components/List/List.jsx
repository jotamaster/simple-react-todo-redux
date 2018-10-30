import React, {Component} from 'react'
import Register from '../Register'
import {Card,Row,Col,List as Lista} from 'antd'
import {connect} from 'react-redux'
import {addToDo} from '../../redux/actions'

class List extends Component{




    render(){
        const {todos, registers} = this.props;
        return(
            
            <Card title="Lista de Tareas" style={{ width: '100%', marginTop: 20, backgroundColor: '' }} >
           
                    <Row gutter={16}>
                  
                        <Col sm={24} md={24}>
                        {
                            registers.length  ?  <Lista bordered>
                        
                            {registers.map((register,index) =>{
                                
                            return <Register key={index} indice={index} registro={register} />
                            })
                            }
                          
                            </Lista>  :
                            <h3>Sin Tareas! :D</h3>
                        }
                      
                        </Col>
                      
                    </Row>
                </Card>
        )
    }

}

const mapStateToProps = state => ({
    registers : state.todos.registers
  })

  const mapDispatchToProps = dispatch => ({
    addTodoProp : (todos)=>dispatch(addToDo(todos))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(List);