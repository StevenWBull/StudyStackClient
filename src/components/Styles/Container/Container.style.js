import styled from 'styled-components';

//carousel container
export const CarouselElement = styled.div`
    background-image: url(${(props) => props.img});
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    text-align: center;
    height: 95vh;
`;

export const TextColor = styled.div`
    color: ${(props) => (props.col === '2' ? '#f8f6f6' : '#100e0e')};
    font-weight: bold;
`;

export const StudyContainer = styled.div`
    background-color: #f2f2f2;
    padding: 10%;
    text-align: left;
`;

export const FlashCardContainer = styled.div`
    background-color: #f2f2f2;
    min-height: 800px;
    padding-top: 12%;
`;
