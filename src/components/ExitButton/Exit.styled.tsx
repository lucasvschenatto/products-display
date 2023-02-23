import styled from 'styled-components';

const Exit = styled.button`
	position: absolute;
	top: ${({ theme }) => theme.spacing['2xs']};
	right: ${({ theme }) => theme.spacing['3xs']};
	background-color: unset;
	border: none;
	border-radius: ${({ theme }) => theme.radius.s};
	cursor: pointer;
	transition: transform 0.1s ease-in-out;
	:hover {
		transform: scale(1.2);
	}
	:active {
		transform: scale(0.98);
	}
	width: 1rem;
	height: 1rem;
`;

export default {Exit}