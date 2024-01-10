import { FormatAlignJustify } from "@mui/icons-material";
import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound()
{
    return (
        <Container component={Paper}>
            <Typography gutterBottom variant='h3'> Oops - we could not found what you are looking for</Typography>
            <Divider />
            <img src="/images/404-not-found.jpg" alt={"Not-Found"}  style={{ width: '50%',objectFit:'contain',  marginLeft:'22%'}}/>
            <Button fullWidth component={Link} to='/catalog'>GO BACK TO SHOP</Button>
        </Container>
    )
}
