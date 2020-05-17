import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	padding: 40px;
	border: 1px solid #dedede;
`;

export const Title = styled.h1`
	font-size: 32px;
	font-weight: bold;
	line-height: 38px;
	padding-bottom: 10px;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Text = styled.span`
	font-size: 16px;
	color: #747476;
	line-height: 19px;
	padding-bottom: 25px;
`;

export const InputGroup = styled.div`
    display: flex;
    position: relative;
    align-items: center;

	svg {
		position: absolute;
		top: 22px;
		left: 27px;
		bottom: 0;
	}
`;

export const Input = styled.input`
	padding: 20px;
	height: 60px;
	width: 100%;
	background: #F2F2F2;
	border-radius: 10px;
	border: none;

	&::placeholder {
		text-align: center;
		color: #747476;
	}
`;
