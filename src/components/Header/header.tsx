import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useHeader} from "../../hooks/useHeader.tsx";
import {AccountCircle} from "@mui/icons-material";

interface HeaderProps {
    darkMode: string;
    toggleDarkMode: () => void;
}

const Header = ({darkMode, toggleDarkMode} : HeaderProps) => {
    const hookProps = useHeader();
    const {
        anchorEl,
        handleNavigate,
        handleClose,
        handleMenu
    } = hookProps;

    return (
        <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, left: 0, width: '100%' }}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={darkMode === 'dark'}
                            onChange={toggleDarkMode}
                            aria-label="login switch"
                        />
                    }
                    label={darkMode === 'dark' ? 'Switch To Light Mode' : 'Switch To Dark Mode'}
                />
            </FormGroup>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleNavigate('/')}>Home</MenuItem>
                        <MenuItem onClick={() => handleNavigate('users')}>Users</MenuItem>
                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                        <div>
                            <AccountCircle />
                        </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;