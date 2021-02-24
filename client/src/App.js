import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import PageLayout from './compoents/PageLayout';
import List from './compoents/List';
import Filter from './compoents/Filter';


//your api https://venbest-test.herokuapp.com get errors with headers . I will demonstarte you same app with another api
const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return await response.json()
};

export default () => {
const [users, setUsers] = useState([]);
const [filter, setFilter] = useState([])

const filteredUsres = () => {
  let fliteredByUsername, fliteredByEmail;

  if (filter.username) {
    fliteredByUsername = users.filter(user => {
      return user.username === filter.username
    })
    if (filter.company) {
      fliteredByUsername = fliteredByUsername.filter( user => !!user.company === true)
    }
  }

  if (filter.email) {
    fliteredByEmail = users.filter(user => {
      return user.email === filter.email
    })
    if (filter.company) {
      fliteredByEmail = fliteredByEmail.filter( user => !!user.company === true)
    }
  }

  if (!fliteredByEmail && !fliteredByUsername) {
    return users
  }
  
  if (fliteredByEmail && !fliteredByUsername) {
    return fliteredByEmail
  }

  if (fliteredByUsername && !fliteredByEmail) {
    return fliteredByUsername
  }
  
  return fliteredByEmail.concat(fliteredByUsername)

}

useEffect( 
  async () => {
    setUsers(await getData())
  }, []
);

  return <>
    <PageLayout
      size={"xl"}
      bg={"#69E5A9"}
      content={
        <Container>
          <Filter props={{filter, setFilter}}/>
          <List users={filteredUsres()}/>
        </Container>
      }
    />
    <GlobalStyle/>
  </>
}

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
    font-size-adjust: 100%;
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  #__root {
    display: flex;
    height: 100%;
  }
`;

const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
