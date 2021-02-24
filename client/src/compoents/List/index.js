import styled from 'styled-components';


export default ({users}) => {
  return<Container>
    {users && users.map( (user, index) => {
      return <UserSection key={index}>
        <b>name:</b>&nbsp;{user.name}
        &nbsp;<b>username:</b>&nbsp;{user.username}
        &nbsp;<b>email:</b>&nbsp;{user.email}
      </UserSection>
    })}
  </Container>
}

const Container = styled.div`
  width: 100%;
  padding: 40px;
  flex-direction: column;
  margin: 0px auto;
`;

const UserSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 70px;
  background-color: #ffffff;
  max-width: 1000px;
  margin: 30px 0px;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
`;
