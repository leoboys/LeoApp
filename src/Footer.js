
import { Button, Container, Divider, Grid, InputBase, Link,Box  ,  Typography } from "@mui/material";
// import { Box } from "@mui/system";
import "./Footer.css";
import Logo from "./Images/logo.png";
import { ReactComponent as Facebook } from "./SVG/fb.svg";
import { ReactComponent as Twitter } from "./SVG/twit.svg";
import { ReactComponent as GooglePlus } from "./SVG/googleplus.svg";
import { ReactComponent as Instagram } from "./SVG/insta.svg";

function Footer(){
    return(
        <div className="footer">
             <Container maxWidth="lg" >

{/* ------------------------------------------------ */}

                 <Typography className="footer-head" >Want to join with Us? </Typography>
                 <p className="footer-sub">Choose your part of domain in below. </p>

                <Box sx={{display:"flex", flexGrow: 1}} >
                    <Button className="buy-button" >Production</Button>
                    <Divider orientation="horizontal" className="div-line" />
                    <Button className="sell-button" >Service</Button>
                </Box>

 {/*-------------------------------------------------  */}
                
                <Divider className="div-line2" />

{/* --------------------------------------------------- */}

                <Box sx={{ width:"100%", flexGrow: 1 , marginY:"5%" , marginX:"5%"}} maxWidth="lg">
                <Grid container spacing={2}>
                 <Grid item xs={2}>
                {/* <Logo className="dravi-logo" />     */}
                <img src={Logo} alt="" className="dravi-logo" />
                <Typography sx={{flexGrow: 1, order: 1}} className="logo-name" > LEO BOYS</Typography>
                
                <Box sx={{display:"flex", flexGrow: 1 , marginX:"-23%"}} >
                <Link href="https://www.facebook.com/merasalbros" underline="none" > <Facebook className="icon-fb" /> </Link>
                <Link href="#" underline="none" > <Twitter className="icon-twit"  /> </Link>
                <Link href="https://www.youtube.com/channel/UCFoS1Q6diwcxYhhezNQRjxQ" underline="none" > <GooglePlus className="icon-google"  /> </Link>
                <Link href="https://www.instagram.com/leoboysproduction/" underline="none" > <Instagram className="icon-insta"  /> </Link>
                   
                </Box>
                
                 </Grid>
                <Grid item xs={2}>
                  
                        <Typography className="quick">Quick Links</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                    <Box sx={{marginX:"-20%" ,  marginY:"10%"    }} >
                     <ul>   <Link href="#" underline="none" className="link-home">- Home</Link> </ul>
                     <ul>   <Link href="#" underline="none" className="link-about">- About Us</Link> </ul> 
                     <ul>   <Link href="#" underline="none" className="link-service">- Service</Link>   </ul> 
                     <ul>   <Link href="#" underline="none" className="link-testimony">- Testimonials</Link></ul>
                     <ul>   <Link href="#" underline="none" className="link-contact">- Contact Us</Link>  </ul>
                     </Box>
                </Grid>
                <Grid item xs={2} sx={{ marginX:"0%" }}>
                <Typography className="site">Sitemap</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                    <Box sx={{marginX:"-20%" ,  marginY:"10%"}} >
                     <ul>   <Link href="#" underline="none" className="link-process">- Our Process</Link> </ul>
                     <ul>   <Link href="#" underline="none" className="link-do">- What We Do</Link> </ul> 
                     <ul>   <Link href="#" underline="none" className="link-location">- Location</Link>   </ul> 
                     <ul>   <Link href="#" underline="none" className="link-testimony">- Projects</Link></ul>
                     <ul>   <Link href="#" underline="none" className="link-purchase">- Plans</Link>  </ul>
                     </Box>
                    
                </Grid>
                <Grid item xs={2} sx={{ marginX:"0%" }}>
                <Typography className="quick">Discover</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                    <Box sx={{marginX:"-20%", marginY:"10%"}} >
                     <ul>   <Link href="#" underline="none" className="link-home">- Privacy Policy</Link> </ul>
                     <ul>   <Link href="#" underline="none" className="link-about">- Terms & Conditions</Link> </ul> 
                     <ul>   <Link href="#" underline="none" className="link-service">- Owners</Link>   </ul> 
                     <ul>   <Link href="#" underline="none" className="link-testimony">- Members</Link></ul>
                     {/* <ul>   <Link href="#" underline="none" className="link-contact">-Contact Us</Link>  </ul> */}
                     </Box>
                    
                </Grid>
                <Grid item xs={3} sx={{ marginX:"4%" }} >
                <Typography className="quick">Subscribe</Typography>
                        <Divider orientation="horizontal" className="div-line3"/>
                        <Box sx={{ display:"flex", flexGrow: 1 , marginY:"-15%" }} >
                            <InputBase sx={{flex: 1,}} type="email" outline="none" placeholder="Email Address"  className="email-box" />
                            
                            <Button  className="email-button">Subscribe</Button> 
                        </Box>
                </Grid>
                </Grid>
                </Box>
             </Container>

        </div>
    )
}

export default Footer;