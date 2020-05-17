import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 350px;
    align-items: center;
`;

export const Title = styled.h1`
    text-align: left;
    padding-bottom: 20px;
`;

export const CapitalsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 500px;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;

    li {
        display: flex;
        align-items: center;
        padding-bottom: 25px;
        font-weight: bold;

        & + li {
            padding-left: 10px;
        }
    }
`;