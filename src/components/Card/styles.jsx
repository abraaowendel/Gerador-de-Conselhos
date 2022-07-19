import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 500px;
    min-height: 300px;
    border-radius: 15px;
    background-color: #121214;
    padding: 50px 35px;
    font-family: 'Manrope', sans-serif;
    @media screen and (max-width: 600px){
        max-width: calc(100% - 30px);
        min-height: 350px;
        margin: 0 15px;
    }
    @media screen and (max-width: 380px){
        padding: 50px 20px;
    }
`;

export const AdviceTitle = styled.div`
    font-weight: 600;
    letter-spacing: 3px;
    font-size: 0.875em;
    color: #633BBC;
    @media screen and (max-width: 600px){
        font-size: 0.8em;
    }
`;
export const Advice = styled.article`
    font-weight: 800;
    color: #C9C8B1;
    font-size: 1.8em;
    text-align: center;
    margin-top: 15px;
    @media screen and (max-width: 600px){
        font-size: 1.6em;
        margin-top: 10px;
    }
    @media screen and (max-width: 380px){
        font-size: 1.5em;
    }
`;
export const Dice = styled.button `
    border: 0;
    position: absolute;
    bottom: -20px;
    cursor: pointer;
    border-radius: 50%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #633BBC;
    transition: .3s ease-in all;
    &:hover{
        -webkit-box-shadow: 0px 0px 30px 5px rgba(99,59,188,1);
        -moz-box-shadow: 0px 0px 30px 5px rgba(99,59,188,1);
         box-shadow: 0px 0px 30px 5px rgba(99,59,188,1);
    }
    transform: ${(props) => `rotate(${props.rotateT}deg)`};
`

export const DiceSvg = styled.img ``
export const Lines = styled.img `
    max-width: calc(100% - 10px);
    margin: 20px 0 10px;
    @media screen and (max-width: 600px){
        margin: 10px 0;
    }
`