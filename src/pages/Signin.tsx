import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';

import checkImage from '../images/checkImage.png';
import Form from '../components/Form';

const Signin: React.FC = () => {
    const styleForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        bgcolor: 'white'
    };

    return (
        <Grid container height="100vh" width="100vw" bgcolor="#D7F2BA">
            <Grid
                item
                md={7}
                sm={12}
                xs={false}
                sx={{
                    display: { xs: 'none', sm: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box component="img" alt="Desenho-menina-marcando-um-botao-check" src={checkImage} width="70%" />
            </Grid>

            <Grid item md={5} sm={12} xs={12} display="flex" alignItems="center" justifyContent="center" boxShadow={5}>
                <Box sx={styleForm}>
                    <Avatar sx={{ bgcolor: '#D0A8E4' }}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography variant="h4" margin={2} color="black">
                        Faça seu login
                    </Typography>
                    <Form mode="signin" textButton="Login" />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Signin;
