import React from 'react';
import { Button } from '@mui/material';

const LoginButton = ({ onLogin }) => (
  <Button variant="contained" color="primary" onClick={onLogin}>
    Logout
  </Button>
);

export default LoginButton;
