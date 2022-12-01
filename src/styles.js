import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #4C555C;

    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const Content = styled.div`
    background-color: #4C555C;
    width: 50%;
    display:flex;
    flex-direction: column;
    gap: 0.2rem;
`
export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

