import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Project.css";
function Project() {
  return (
    <div>
      <Divider />
      <Container maxwidth="sm">
        <Typography variant="h4" sx={{ textAlign: "center", marginTop: "10%" }}>
          Our Projects
        </Typography>
        <Divider className="div" />
        <Grid container spacing={2} sx={{ marginTop: "10%" }}>
          <Grid item xs={4}>
            <Box className="box1">
              <Typography
                variant="h6"
                sx={{ textAlign: "center", paddingTop: "40px", color: "white" }}
              >
                Leo Boys Trust
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              className="box2"
              sx={{
                position: "absolute",
                borderRadius: "250px",
                width: "300px",
                height: "300px",
                border: "2px solid black",
              }}
            >
              <Typography
                variant="h6"
                sx={{ textAlign: "center", paddingTop: "40px", color: "white" }}
              >
                Leo Dance Crew
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              className="box3"
              sx={{
                position: "absolute",
                borderRadius: "250px",
                width: "300px",
                height: "300px",
                border: "2px solid black",
              }}
            >
              <Typography
                variant="h6"
                sx={{ textAlign: "center", paddingTop: "40px", color: "white" }}
              >
                Leo Film Productions
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Project;
