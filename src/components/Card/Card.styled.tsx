import Link from "next/link";
import styled from "styled-components";

const StyledContainer = {
  Big: styled.div`
    background-color: ${({theme}) => theme.colors.lighterBlack};
    padding: ${({theme}) => theme.spacing['4xs']};
    border: 1px solid ${({theme}) => theme.colors.darkGrey};
    border-radius: ${({theme}) => theme.radius.xl};
    position: relative;
    margin: ${({theme}) => theme.spacing['4xs']};
    height: 40rem;
    @media (min-width: 640px) and (min-height: 640px) {
      margin: initial;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90vw;
      min-height: 70vh;
    }
    @media (min-width: 768px) and (min-height: 640px) {
      width: 80vw;
    }
    @media (min-width: 1024px) {
      width: 70vw;
      min-height: 60vh;
    }
    @media (min-width: 1280px) {
      height: 60vh;
    } 
  `,
  Small: styled(Link)`
    background-color: ${({theme}) => theme.colors.lighterBlack};
    padding: ${({theme}) => theme.spacing['4xs']};
    border: 1px solid ${({theme}) => theme.colors.darkGrey};
    border-radius: ${({theme}) => theme.radius.xl};
    width: 80vw;
    height: 30rem;
    transition: transform 0.1s ease-in-out;
    @media (min-width: 640px) {
      width: 75vw;
      height: 23rem;
    }
    @media (min-width: 768px) {
      width: 30rem;
      height: 23rem;
    }
    @media (min-width: 1024px) {
      height: 20rem;
    }
    :hover {
      transform: scale(1.02);
    }
    :active {
      transform: scale(0.999);
    }
  `
}

const ImageContainerBase = styled.div`
	position: relative;
	width: 100%;
	height: 12rem;
	border-radius: ${({theme}) => theme.radius.l};
	overflow: hidden;
	img {
		object-fit: cover;
	}
`;

const StyledImageContainer = {
  Big:styled(ImageContainerBase)`
    @media (min-width: 1024px) and (min-height: 768px) {
      height: 15rem;
    }
    @media (min-width: 1280px) and (min-height: 1024px) {
      height: 20rem;
    }
  `,
  Small:styled(ImageContainerBase)`
    @media (min-width: 1024px) {
      width: 100%;
      height: 50%;
    }
`
}

const StyledTitle = {
  Big:styled.h3`
    grid-area: title;
  `,
  Small: styled.h4`
    grid-area: title;
  `
};

const StyledDescription = styled.p`
grid-area: description;
opacity: 0.5;
`

const DetailsBase =  styled.div`
margin: ${({theme}) => theme.spacing['4xs']} ${({theme}) => theme.spacing['3xs']};
display: grid;
gap: ${({theme}) => theme.spacing['2xs']};
`;
const StyledDetails = {
  Big: styled(DetailsBase)`
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'detail'
      'detail'
      'detail'
      'detail'
      'detail'
      'detail'
      'description';
    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'title title'
        'detail detail'
        'detail detail'
        'detail detail'
        'description description';
    }
    @media (min-width: 640px) and (min-height: 640px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 7rem;
      grid-template-areas:
        'title title'
        'detail detail'
        'detail detail'
        'detail detail'
        'description description';
    }
  `,
  Small: styled(DetailsBase)`
    grid-template-areas: 'title';
    grid-template-columns: 100%;
    @media (min-width: 640px) {
      grid-template-areas: 'title title';
      grid-template-columns: 50% 50%;
    }
  `
}

export {StyledContainer,StyledImageContainer,StyledTitle,StyledDetails,StyledDescription}