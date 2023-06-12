import styled from "styled-components";

const Notice = () => {
    return (
        <Container >
            Delevery through this site is not enable yet
        </Container>
    );
};

export default Notice;

    
const Container = styled.div`
    height:25px;
    background-color: green;
    color:white;
    display: flex;

    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 200;
`