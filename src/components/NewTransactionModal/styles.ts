import styled from "styled-components";
import * as p from "polished";

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size:1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius:0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        
        font-weight: 500;
        font-size: 1rem;
        &::placeholder{
            color:var(--text-body);
        }

        & + input{
            margin-top: 1rem; 
            //todo input que tiver um input antes dele (em cima), receberá essa margem. Ou seja, irá começar no segundo input.
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color:#FFF;
        border: 0;
        border-radius:0.25rem;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1rem;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(90%);
        }
    }
       `;

export const TransactionTypeContainer = styled.div`
       margin: 1rem 0;
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: 0.5rem;
       `;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: "deposit" | "withdraw";
}

const colors = {
    deposit: "#33CC95",
    withdraw: "#E52E4D",
}

export const RadioBox = styled.button<RadioBoxProps>`
    height:4rem;
    border: 1px solid #d7d7d7;
    border-radius:0.5rem;
    background: ${(props)=> props.isActive ? p.transparentize(0.85,colors[props.activeColor]) : "transparent"};
    display:flex;
    align-items:center;
    justify-content:center;
    transition: border-color 0.2s;
            
    &:hover{
        border-color: ${p.darken(0.1, '#d7d7d7')};
    } 

    img{
    width: 20px;
    height: 20px;
    }

    span{
    display:inline-block;
    margin-left: 1rem;
    font-size: 1.5rem;
    color: var(--text-title);
    }

`;