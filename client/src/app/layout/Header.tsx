import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props
{
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) 
{
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='subtitle1'>
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                <Typography sx={{ ml: 120 }} variant='subtitle2'>
                    Made by Shalom Dahan
                </Typography>
            </Toolbar>
        </AppBar>
    )
}