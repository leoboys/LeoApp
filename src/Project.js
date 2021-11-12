import { Container, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import "./Project.css";
function Project(){
    return(
        <div>
            <Divider  />
            <Container maxwidth="sm">
            <Grid container spacing={4} >
                <Grid item xs={4}  >
                    <Box sx={{bgcolor:"grey", borderRadius:"200px", width:"300px", height:"300px" , boder:"1px solid grey" }} >

                    </Box>
                </Grid>
                <Grid item xs={4}  >
                    <Box sx={{bgcolor:"grey", borderRadius:"200px", width:"300px", height:"300px" , boder:"1px solid grey" }} >

                    </Box>
                </Grid>
                <Grid item xs={4}  >
                    <Box sx={{bgcolor:"grey", borderRadius:"200px", width:"300px", height:"300px" , boder:"1px solid grey" }} >

                    </Box>
                </Grid>
            </Grid>
            </Container>

        </div>
    )
}

export default Project;