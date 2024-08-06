import React from 'react';
import { Button } from '@mui/material';

const LogoutButton = ({ onLogout }) => (
  <Button variant="contained" color="secondary" onClick={onLogout}>
    Login
  </Button>
);

export default LogoutButton;
