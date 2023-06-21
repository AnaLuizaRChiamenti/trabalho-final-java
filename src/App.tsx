import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { CssBaseline } from '@mui/material';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <CssBaseline />
                    <AppRoutes />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
