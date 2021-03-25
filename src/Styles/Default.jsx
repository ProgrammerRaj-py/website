import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
`;
export const Container_Fluid = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 786px){
        width: 100%;
        height: auto;
        flex-direction: column;
        text-align: center;
    }
`;

export const Column = styled.div`
    @media (max-width: 786px){
        width: 100%;
        margin-bottom: 7rem;
    }
`;
