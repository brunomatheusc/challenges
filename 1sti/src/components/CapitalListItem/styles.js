import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const HeaderList = styled.ul`
    display: flex;
    align-items: center;
	padding-bottom: 25px;
	font-size: 12px;

	li {
        & + li {
            padding-left: 10px;
        }
	}
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
