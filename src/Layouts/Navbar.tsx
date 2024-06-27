import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from '@mui/material';


function Navbar() {
    const listbar = [
        'Customer',
        'Product',
        'Sales Order Header',
        'Sales Order Detail'
    ]

    return (            
            <AppBar

                sx={{ position: "fixed", display: 'fixed', flexDirection: 'space-between',
                     opacity: '100%',
                      backgroundColor: '#135D66',
                      paddingLeft: 4   }}
            >
                <Toolbar>
                    <Typography variant="h5" noWrap component="div" sx={{ marginLeft: 10, marginRight: 12 }}>
                        Web App
                    </Typography>

                    {listbar.map((name) => (
                        <Link href={`http://localhost:3001/${name}`} sx={{
                            marginRight: 13,
                            textDecoration: 'none',
                        }}>
                            <Typography sx={{
                                padding: 2,
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                <PersonIcon />
                                {name}

                            </Typography>
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        
    );
}

export default Navbar;