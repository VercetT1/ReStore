import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


export default function ServerError()
{
    const history = useNavigate();
    const { state } = useLocation();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography gutterBottom variant="h3" color='secondary'>
                        {state.error.title}
                    </Typography>
                    <Divider />
                    <Typography variant="body1">{state.error.detail || 'Internal server error'}</Typography>

                </>
            ) : (
                <Typography gutterBottom variant='h5'>Server Error</Typography>
            )}
            <Button onClick={() => history('/')}>GO BACK TO THE STORE</Button>
        </Container>
    )
}