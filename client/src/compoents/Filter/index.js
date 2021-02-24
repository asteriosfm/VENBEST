import React, { useState } from 'react';
import styled from 'styled-components';

import BackspaceIcon from '@material-ui/icons/Backspace';

import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';


export default ({props}) => {
  const { setFilter, filter } = props;

  const [form, setForm] = useState({
    username: '',
    email: '',
    company: false,
  })

  console.log(form.company)

  return <Container>
    <Button
      style={{maxWidth: "200px"}}
      color="primary"
      variant="outlined"
      onClick={ () => setFilter(form)}
    >
      Set Filter
    </Button>

    <TextField
      style={{margin: "20px 0px"}}
      variant="outlined"
      label="enter username"
      value={form.username}
      onChange={ (e) => setForm({...form, username: e.target.value}) }
    />

    <TextField
      variant="outlined"
      label="enter email"
      value={form.email}
      onChange={ (e) => setForm({...form, email: e.target.value}) }
    />

    <FormControlLabel
      style={{marginTop: "10px"}}
      control={<Checkbox checked={form.company} onChange={ () => setForm({...form, company: !form.company}) } name="checkedA" />}
      label="is in company?"
      color="primary"
    />

    <CurrentFilter>
      <Section>Username: {form.username}</Section>
      <Section>Email: {form.email}</Section>
      <Section>In company: {form.company}</Section>
      <RemoveFilter 
      onClick={ () => {
        setForm({...form, username: '', email: '', company: false})
        setFilter(form)
      }}>
        RemoveFilter
        <BackspaceIcon style={{marginLeft: "25px"}}/>
      </RemoveFilter>
    </CurrentFilter>

  </Container>
}

const Container = styled.div`
  width: 400px;
  border-radius: 30px;
  background-color: #ffffff;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  margin-top: 100px;
`;

const CurrentFilter = styled.div`
  max-width: 300px;
  padding: 30px;
  border-radius: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Section = styled.div`
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #3f51b5;
  display: flex;
  flex-directio: row;
  justify-content: space-between;
  margin: 8px 0px
`;

const RemoveFilter = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  padding-left: 20px;
  position: relative;
`;
