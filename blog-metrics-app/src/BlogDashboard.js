import React from 'react';
import { Typography, Paper, Grid, Button, IconButton, Box } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import logo from './blogImg.png';
//import { MuiNavbar } from './MuiNavbar.js';
// import BasicCard from './BasicCard';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import LoginButton from './LoginButton'; // Ensure this path is correct
import LogoutButton from './LogoutButton'; // Ensure this path is correct

import Footer from './Footer'; // Import the Footer component


const BlogDashboard = () => {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/blogs'); // Replace with your server's endpoint  
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Edit blog with id: ${id}`);
    // Example: Redirect to an edit page or open a modal
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/blogs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      // Update the state to remove the deleted blog
      setData(data.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <Box padding={1} display="flex" alignItems="center" backgroundColor='#FFA07A'>
        <img src={logo} alt="Logo" style={{
          width: '80px', height: '80px', marginRight: '10px',
          backgroundColor: '#F08080'
        }}></img>

        <Typography variant="h4" gutterBottom sx={{
          marginLeft: '10px', fontFamily: 'Lucida Console', fontWeight: 'bold',
          color: 'lightblue'
        }}>
          Blogify
        </Typography>

        <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
          {isLoggedIn ? (
            <LogoutButton onLogout={handleLogout} />
          ) : (
            <LoginButton onLogin={handleLogin} />
          )}
        </Box>

      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h5" gutterBottom sx={{
              marginLeft: '10px', fontFamily: 'Lucida Console', fontWeight: '600',
              color: 'lightpink'
            }} >
              Welcome To My Page!
            </Typography>

            <Grid container spacing={3}>
              {data.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                  <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '75%' }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={blog.image}
                      title={blog.title}
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {blog.blog}
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}>
                      <IconButton color="primary" aria-label="edit" onClick={() => handleEdit(blog.id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="secondary" aria-label="delete" onClick={() => handleDelete(blog.id)}>
                        <Delete />
                      </IconButton>
                    </Box>
                    {/* <CardActions> 
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
                  </Card>
                </Grid>
              ))}</Grid>
            {/* Render a list of blog posts */}
            <ul>
              {/* {data.map((blog) => (   
                 <li>  
                 <Typography variant="subtitle1">  
                   {blog.title}
                 </Typography>  
                 <Typography variant="body1">  
                   {blog.blog}  
                    </Typography>
                 <IconButton color="primary" aria-label="edit">  
                   <Edit />  
                 </IconButton>  
                 <IconButton color="secondary" aria-label="delete">  
                   <Delete />  
                 </IconButton>  
               </li>   
            ))} */}
            </ul>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircle />}
            >
              Add New Post
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};


export default BlogDashboard;  