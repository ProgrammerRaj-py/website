import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;

    @media (max-width: 786px){
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Pacifico', cursive;
`;
export const Body = styled.p`
    color: grey;
    margin: 2rem 0;
    font-size: 1.2rem;
    word-spacing: 5px;
    line-height: 2rem;
`;