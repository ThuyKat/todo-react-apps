import styled from 'styled-components'


export const CommonInput = styled.input`
    width:calc(100% - 70px);
    height:30px;
    border-radius:5px;
    border-color:lightgray;
    font-size:1rem;
    margin-right:10px;
`
export const CommonButton = styled.button`
    marginLeft:10px;
    height:35px;
    width:50px;
    background-color:#0096C7;
    color:white;
    border-radius:5px;
    font-size:1rem;
    border:none;
`
export const TodoContainer = styled.div`
    border-radius: 10px;
    box-shadow: rgba(210, 210, 210, 0.75) 5px 5px 10px;
    padding: 20px;
    min-width: 900px
`
export const InputContainer = styled.div`
    margin:0 auto;
    width:80%;
    h1{
        text-transform:capitalize;
        font-size:3rem;
    }
`
export const CommonContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    ${(props) => props.darkTheme ? `
        background: black;
        color:white;
       `: `
        background: white;
        color:black;
       `
    }
`
export const ThemeButton = styled.button`
    padding: 5px 10px;
    background-color:lightblue;
    border:none;
    border-radius: 5px;
`
export const FormContainer=styled.div`
    margin:0 auto;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Form = styled.form`
    padding:200px 20px;
    min-width:300px;
    background-color: #E6F7FF;
    border-radius: 10px; 
        div{
        margin-bottom:10px;
        display:flex;
        justify-content:space-between;
        gap:5px;
        label{
            color:darkblue;
            font-weight:bolder;
        }
        input{
            width:100%;
            border-radius:5px;
            border: solid 0.5px #F0F0F0 ;
            height:25px;
            
        }
    }
    button{
        display:block;
        margin-left:auto;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        border-radius:5px;
        &:hover {
            background-color: #0056b3;
        }
    }

`
export const LogoutButton = styled.button`
        padding: 5px 20px;
        background-color:crimson;
        border:none;
        border-radius: 5px;
        margin:0 auto;
        color:white;
`
