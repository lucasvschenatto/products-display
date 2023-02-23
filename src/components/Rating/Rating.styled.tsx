import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${({ theme }) => theme.spacing['5xs']};
	height: ${({ theme }) => theme.fontSize.m};
`;
const ImageContainer = styled.div`
	position: relative;
	width:1rem;
	height: 1rem;
`;

export default {Container,ImageContainer}