import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { userCreateAsyncThunk, userLoginAsyncThunk } from '../store/modules/UserSlice';

interface FormProps {
    mode: 'signin' | 'signup';
    textButton: string;
}

const Form: React.FC<FormProps> = ({ mode, textButton }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepassword, setErrorRepassword] = useState(false);
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [successAlertVisibleEmail, setSuccessAlertVisibleEmail] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (mode === 'signup') {
            const emailValid = (email.endsWith('.com') || email.endsWith('.com.br')) && email.includes('@');

            if (email.length > 0) {
                setErrorEmail(!emailValid);
            }

            const passwordValid = password.length >= 6;
            if (password.length > 0) {
                setErrorPassword(!passwordValid);
            }

            const repasswordValid = password === repassword;

            if (repassword.length > 0) {
                setErrorRepassword(!repasswordValid);
            }

            setDisabled(!(emailValid && passwordValid && repasswordValid));
        }
    }, [email, password, repassword, mode]);

    function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        if (mode === 'signin') {
            const user = {
                email: email,
                password: password
            };

            dispatch(userLoginAsyncThunk(user));
            navigate('/notes');
        } else {
            dispatch(userCreateAsyncThunk({email, password, repassword}));
        }
    }
    return (
        <Box
            component="form"
            marginTop={1}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            width="80%"
            onSubmit={ev => handleSubmit(ev)}
            margin={2}
        >
            <TextField
                error={errorEmail}
                helperText={errorEmail ? 'E-mail inválido' : ''}
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                margin="normal"
                variant="outlined"
                type="email"
                required
                id="email"
                label="E-mail"
                fullWidth
            />
            <TextField
                error={errorPassword}
                helperText={errorPassword ? 'Senha deve conter ao menos 6 caracteres' : ''}
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                margin="normal"
                variant="outlined"
                type="password"
                required
                id="password"
                label="Senha"
                fullWidth
            />

            {mode === 'signup' ? (
                <TextField
                    error={errorRepassword}
                    helperText={errorRepassword ? 'As senhas não coincidem' : ''}
                    value={repassword}
                    onChange={ev => setRepassword(ev.target.value)}
                    margin="normal"
                    variant="outlined"
                    type="password"
                    required
                    id="repassword"
                    label="Repetir Senha"
                    fullWidth
                />
            ) : (
                ''
            )}

            <Button disabled={disabled} type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
                {textButton}
            </Button>

            <Grid container>
                <Grid item xs={8} textAlign="end">
                    {mode === 'signin' ? (
                        <Typography variant="body2">
                            <Link style={{ color: 'inherit' }} to="/signup">
                                Não tem uma conta? Cadastre-se
                            </Link>
                        </Typography>
                    ) : (
                        <Typography variant="body2">
                            <Link style={{ color: 'inherit' }} to="/signin">
                                Já possui conta? Vá para Login
                            </Link>
                        </Typography>
                    )}
                </Grid>
            </Grid>
            {successAlertVisible && (
                <Alert severity="success" sx={{ mt: 2 }} onClose={() => setSuccessAlertVisible(false)}>
                    Conta criada com sucesso!
                </Alert>
            )}
            {successAlertVisibleEmail && (
                <Alert severity="warning" sx={{ mt: 2 }} onClose={() => setSuccessAlertVisibleEmail(false)}>
                    Esse email ja está em uso!
                </Alert>
            )}
        </Box>
    );
};

export default Form;
