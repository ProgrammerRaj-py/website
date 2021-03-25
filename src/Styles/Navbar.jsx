import styled from 'styled-components'

export const Navbar = styled.div`
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid #dfdfdf;

    @media (max-width: 786px){
        height: auto;
        flex-direction: column;
    }
`;
export const NavbarBrand = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 786px) {
        height: 8vh;
    }
`;
export const NavLogo = styled.h1`
    font-size: 1.5rem;
    color: #008ec2;
`;

export const NavToggler = styled.button`
    font-size: 1.7rem;
    cursor: pointer;
    display: none;
    text-align: center;
    background: none;
    outline: none;
    border: none;
    color: #008ec2;

    @media (max-width: 786px){
        display: inline-block;
    }
`;

export const NavbarLinks = styled.div`
    @media (max-width: 786px){
        width: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;