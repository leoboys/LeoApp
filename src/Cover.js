import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Cover.css";
import Back from "./Images/back.png";
// import Back from "./Images/png.png";
// import Back from "./Images/production.webp";

function Cover(){
    return (
   <div className="body" >
       <Box >
   <Typography className="title" variant="h1" >
       LEO BOYS PRODUCTION
   </Typography>
   <Typography variant="h4" className="sub-title" > Work Hard Take Harder</Typography>
   </Box>
    <img src={Back} alt="back" className="build" />
    
   </div>
   
   );
}

export default Cover;