import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
`;

//header-yellow in main page
export const HeaderContainer = styled.div`
    background-color: #ffd700;
    width: 100%;
    height: 20%;
    align-items: center;
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
