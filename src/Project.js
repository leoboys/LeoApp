import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Project.css";
function Project(){
    return(
        <div>
            <Container maxwidth="md">
            <Grid container spacing={2} >
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