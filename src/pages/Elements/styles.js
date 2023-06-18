import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    width: 100vw;
    background-color: #66A9F8;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Tit = styled.h1`
    color: yellow;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.4rem;
    margin: 0 30px;
`

export const BoxNav = styled.div`
    height: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
`

export const Pesq = styled.input`
    font-size: 1rem;
    height: 50%;
    width: 80%;
    min-width: 200px;
    max-width: 500px;
    border-radius: 5px;
`
export const PesqMenu = styled.div`
    height: 50%;
    width: 80%;
    min-width: 200px;
    max-width: 500px;
`
export const NavMenu = styled.nav`
    font-size: 1rem;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
`

export const BoxPerfil = styled.div`
    height: 50px;
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: -10px;
`