import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import bghome from '../images/bghome.png';

const Home: React.FC = () => {
    return (
        <Grid container width="100%" height="100%" bgcolor="#D7F2BA">
            <Grid item display="flex" flexGrow={1}>
                <Grid
                    item
                    sx={{
                        width: { xs: '100%', md: '80%', lg: '70%' },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: '0 auto',
                        height: '100%'
                    }}
                >
                    <Grid
                        item
                        xs={6}
                        md={12}
                        lg={12}
                        sx={{
                            width: { xs: '100%', md: '30%', lg: '100%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                            marginRight: { xs: '0', md: '3rem' }
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: 'inter',
                                fontSize: { xs: '16px', md: '20px', lg: '35px' }
                            }}
                        >
                            Utilize nossa aplicação para organizar melhor seus afazeres do dia-a-dia
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'inter',
                                fontSize: { xs: '0', md: '15px', lg: '20px' },
                                marginTop: '20px'
                            }}
                        >
                            Com a nossa aplicação, você pode facilmente organizar seus afazeres diários e manter um
                            registro de suas tarefas em andamento. Seja no trabalho, em casa ou na escola, nossa
                            aplicação é a escolha certa para você.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={12} lg={12}>
                        <Box component="img" src={bghome} width="80%" marginLeft="30px" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
