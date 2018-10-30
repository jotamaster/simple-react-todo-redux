import _ from 'lodash'

const initialState= {
    registers : []
}

export default (state = _.cloneDeep(initialState), action) => {
    const { type,payload } = action
    switch (type) {
       case "ADD_TODOS": 
     
        state.registers = [...payload.todos,...state.registers];
        
        return  _.cloneDeep(state);
       
       case "DELETE_TODO":
            console.log('hola que ase')
           state.registers.splice(payload.id,1)
            return  _.cloneDeep(state);
       
        default:
            return state;
    }
}