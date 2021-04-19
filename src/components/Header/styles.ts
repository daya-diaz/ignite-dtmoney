import styled from 'styled-components';

export const Container = styled.header`
background: var(--blue);
width: 100%;
height: 212px;
top: 0px;
left: --0px;
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    background: var(--blue-light);
    font-size: 1rem;
    color: #FFFFFF;
    width: 13rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: none;
    padding:  0 2rem;
    outline: none;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }

  }
  
`