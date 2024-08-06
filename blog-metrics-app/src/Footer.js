import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        backgroundColor: '#FFA07A',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        mt: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Blogify. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
