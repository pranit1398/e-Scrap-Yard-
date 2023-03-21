import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

const Logout = () => {
  const handleLogout = () => {
    axios.post(`http://localhost:8082/logout`).then(() => {
      window.location.href = '/login';
    });
  };

  return (
    <Button variant='contained' color='primary' onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
