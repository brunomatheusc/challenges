import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding-bottom: 50px;
    border-bottom: 1px solid #fff;
`;

export const Header = styled.h1`
    margin: 50px;
    color: #fff;
    font-size: 42px;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputGroup = styled.div`
    display: flex;
    position: relative;
    align-items: center;
	margin: 20px;

    svg {
        position: absolute;
        top: 10px;
        right: 5px;
        bottom: 0;
    }
`;

export const Input = styled.input`
    height: 40px;
    width: 300px;
    border-radius: 1px;
    border: none;
    box-shadow: 1px 1px #989898;
    /* border: 1px solid #989898; */
    padding: 10px;
`;