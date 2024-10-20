import styled from 'styled-components';
import { CommonInput,CommonButton } from '../CommonComponents';


const Container = styled.div`
width:90%;
margin:0 auto;
`
function InputComponent({inputValue,handleChange,handleAddTask}){

    return <Container>
        <CommonInput value={inputValue} onChange={handleChange} type="text" placeholder="New Task" />
        <CommonButton onClick={handleAddTask}>Add</CommonButton>
    </Container>
}

export default InputComponent