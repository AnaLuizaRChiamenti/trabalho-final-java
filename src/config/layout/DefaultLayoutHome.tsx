import React from 'react';
import { Grid } from '@mui/material';
import ResponsiveAppBarHome from '../../components/AppBarHome';

interface DefaultLayoutProps {
    component: React.FC;
}

const DefaultLayoutHome: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
    return (
        <Grid container direction="column" style={{ height: '100vh' }}>
            <Grid item>
                <ResponsiveAppBarHome />
            </Grid>
            <Grid item xs>
                <Component />
            </Grid>
        </Grid>
    );
};

export default DefaultLayoutHome;
