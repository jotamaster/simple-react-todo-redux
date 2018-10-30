import React, {Component} from 'react'
import { List,Button } from 'antd'
import {connect} from 'react-redux'
import {addToDo, deleteToDo} from '../../redux/actions'
import 'antd/dist/antd.css'


class Register extends Component{
  
    render (){
    
        let {registro, indice, deleteToDoProp} = this.props
        
        
        return(
            <List.Item 
            actions={[ 
                <Button 
                    onClick={ () => { deleteToDoProp(indice) }} 
                    type="primary"  >
                    Eliminar
                </Button>
            ]}>
            {registro}
            </List.Item>
        )
    }
      
    
}

const mapStateToProps = state => ({
    registers : state.todos.registers
  })

  const mapDispatchToProps = dispatch => ({
    addTodoProp : (todos)=>dispatch(addToDo(todos)),
    deleteToDoProp :(indice)=>dispatch(deleteToDo(indice))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Register);