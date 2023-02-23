import styled from 'styled-components';

export const Info = styled.p<{ area?: string; highlight?: boolean }>`
	grid-area: ${({area}) => area};
	${({highlight, theme}) => (highlight && `color: ${theme.colors.blue}`)};
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
