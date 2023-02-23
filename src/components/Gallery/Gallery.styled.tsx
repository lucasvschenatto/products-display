import styled from 'styled-components';

const Grid = styled.div`
	width: max-content;
	margin: ${({ theme }) => theme.spacing['2xl']} auto;
	display: grid;
	grid-template-columns: 1fr;
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		margin-top: ${({ theme }) => theme.spacing['8xl']};
	}
	@media (min-width: 1536px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	gap: ${({ theme }) => theme.spacing.s};
	justify-content: space-around;
`;

export default {Grid}