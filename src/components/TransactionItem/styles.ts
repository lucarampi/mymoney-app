import styled from "styled-components";
import * as p from 'polished';

export const DeleteButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
background: transparent;
border: none;

img{
    width: 21px;
    filter: opacity(0.6);
    margin: 0 auto;
    transition: filter 0.2s;
&:hover{
    filter: opacity(1);

}
`