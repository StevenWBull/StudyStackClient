import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    min-height: 88vh;
    overflow: hidden;
`;

//header-yellow in main page
export const HeaderContainer = styled.div`
    background-color: #ffd700;
    width: 100%;
    height: 20%;
    align-items: center;
    border-bottom: 1px solid black;
    min-height: 120px;
`;

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
