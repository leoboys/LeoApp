import { AppBar,  Button,  Divider,  Drawer,  InputBase,  Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import Logo from "./Images/logo.png";
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Cover from './Cover';
import { useState } from 'react';
import { Box } from '@mui/system';
import About from './About';
import Project from './Project';

function App() {
  const [emailId, setEmailId] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleClick() {
    setOpenDrawer(!openDrawer);
  }

  function handleChange() {
    // alert ( emailId + " Subscribed successfully");
    alert(`${emailId} subscribed succedssfully`);
    setEmailId("");
    setOpenDrawer(!openDrawer);
  }

  function emailChange(e){
    setEmailId(e.target.value);
  }
  return (
    
    <div>
      <AppBar sx={{height: "70px "}} >
        <Toolbar sx={{ bgcolor:"rgb(56, 8, 0)" }} >
          
       <Link underline="none" href="#" sx={{flexGrow: 0 , marginLeft: "10%"}} > <img src={Logo} alt="" className="lb-Logo" /> </Link>
       <Typography sx={{ flexGrow: 1}}>LEO BOYS</Typography>

       <Link underline="none" href="#" sx={{color:"white"  }} > Home </Link>
       <Link underline="none" href="#" sx={{color:"white" , paddingLeft: "20px" }} > About-Us </Link>
       <Link underline="none" href="#" sx={{color:"white" , paddingLeft: "20px" }} > Projects </Link>
       <Link underline="none" href="#" sx={{color:"white" , paddingLeft: "20px" ,   }} > Classes </Link>
       <Button onClick={handleClick} sx={{color:"white" , paddingLeft: "20px" , marginRight:"10%"   }}  > <MenuIcon /> </Button>
       <Drawer anchor="right" open={openDrawer} onClose={handleClick}   >
       <Box sx={{ color:"white", width: "100%", height: "100%", maxWidth: 460, bgcolor: "rgb(139, 56, 8)"  }}>
       <nav aria-label="main menu folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={handleClick}>
              <ListItemText primary="About-Us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={handleClick}>
              <ListItemText primary="Project" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={handleClick}>
              <ListItemText primary="Classes" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      <nav aria-label="contact menu folders">
        <List>
          <ListItem disablePadding>
           
              <ListItemText primary="Contact" sx={{paddingLeft:"20px"}} />
               <Divider orientation="vertical" />
            <ListItemText sx={{marginLeft:"50px", paddingRight:"20px" }}  primary=" +91 8838134251" />
          </ListItem>
          <ListItem disablePadding>
          <InputBase sx={{flex: 1, marginLeft:"20px"}} onChange={emailChange} value={emailId} outline="none" placeholder="Email Address"  className="email-box" />
          <Button sx={{ marginRight:"20px" }} className="email-button" onClick={handleChange} >Subscribe</Button> 
          </ListItem>
        </List>
      </nav>
      </nav>
      </Box>
      </Drawer>
        </Toolbar>
      </AppBar>
      <Cover/>
      <About />
      <Project />
     
      
    
    </div>
  );
}

export default App;
