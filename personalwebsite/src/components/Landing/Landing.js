import React from 'react';
import './Landing.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function Landing() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Box>
        <Container maxWidth="md">
          <Grid
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography component="div"
              style= {{ 
                backgroundColor: '#cfe8fc',
                height: '100vh',
                textAlign: "center",
                }}>
              My name is Sabrina.
            </Typography>
          </Grid>
        </Container>
        </Box>
      </React.Fragment>
    </div>
  );
}

export default Landing;
