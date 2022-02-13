import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 100%;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    max-width:200px;

  }
  button{
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border:1px solid white;
    padding: 0 2rem;
    border-radius:0.24rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(85%);
    }
}
`;
