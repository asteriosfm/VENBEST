import styled, { css } from 'styled-components';


export default ({size="m", bg="#ffffff", content}) => {
  return <Container size={size} bg={bg}>
    {content}
  </Container>
}

const Container = styled.div`
  width: 100%;
  ${({size}) => size === "m" ?
    css`
      max-width: 1280px;
    `
    :
    css`
      width: 100%;
    `
  };
  margin-left: auto;
  margin-right: auto;
  ${({bg}) => bg !== "#ffffff" ?
    css`background-color: rgba(105, 229, 169, 0.5);`
    :
    css`background: #ffffff;`
  }
  min-height: 100vh;
`;
