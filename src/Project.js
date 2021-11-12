import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Project.css";
function Project(){
    return(
        <div className="project" >
            <Divider  />
            <Container maxwidth="sm" className="project-container" >
                <Typography variant="h4" className="title" > Our Projects </Typography>
                <Divider className="div" />
            <Grid container spacing={4} sx={{ display:"flex", flexGrow: 1, alignContent:"start", marginTop:"10%" }} >
            
            <Grid item xs={4}  >
            <Box  display="flex" justifyContent="center" >
                <div className="box1" >
            <Typography variant="h5" className="trust" >Leo Trust</Typography>
            <Typography variant="subtitle2" className="trust-def" >We want to make money for third-world-country kids, 
                and We need to be smart about how to do it.</Typography>
                </div>
            </Box>
            </Grid>
            
            
            <Grid item xs={4} >
            <Box display="flex" justifyContent="center"  >
                <div className="box2"  >
            <Typography variant="h5" className="dance" >Dance Crew</Typography>
            <Typography variant="subtitle1" className="dance-def" >Distinct Dance Crew</Typography>
            <Typography variant="subtitle2" className="dance-def1" >Never miss a chance to dance</Typography>
            </div>
            </Box>
            </Grid>
            
            
            <Grid item xs={4} >
            <Box  display="flex" justifyContent="center" >
                <div className="box3" >
            <Typography variant="h5" className="pro" >Leo Production</Typography>
            <Typography variant="subtitle2" className="pro-def" >One hopeful sign that the filmmakers can learn and grow is that the sequel does not contain a single pie, if you know what I mean</Typography>
            </div>
            </Box>
            </Grid>
           
            </Grid>
            </Container>

        </div>
    )
}

export default Project;