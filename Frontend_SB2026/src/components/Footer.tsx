
import {
  Typography,
  Box,
  Container,
  Grid,
  Link,
} from '@mui/material'

import MailIcon from '@mui/icons-material/Mail'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import { themedStyle } from '../App'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={
                themedStyle(
                    {
                        dark: {
                            backgroundColor: '#053256',
                            color: '#e9e9e9',
                        },
                        light: {
                            backgroundColor: '#69a3e2',
                            color: '#3f3f3f',
                        },
                        mix: {
                            py: 3,
                            px: 2,
                            mt: 'auto',
                        },
                    }
                )
            }
        >
            <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>Contact</Typography>
                    <Typography variant="body2">Email: support@newsapi.org</Typography>
                    <Typography variant="body2">Telefon: +40 700 000 000</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>Social</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link href="https://www.facebook.com" color="inherit"><FacebookIcon /></Link>
                        <Link href="https://www.instagram.com/" color="inherit"><InstagramIcon /></Link>
                        <Link href="mailto:support@newsapi.org" color="inherit"><MailIcon /></Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                © {new Date().getFullYear()} HyperNews.org
            </Typography>
            </Container>
        </Box>
    )
}

export default Footer
