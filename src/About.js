import { Container,  Divider,  Grid, Typography } from "@mui/material";

import  "./About.css";

function About(){
    return(
        <div>
            <Container maxWidth="lg" className="about" sx={{width:"100vh"}} >
                <Typography sx={{textAlign:"center", marginTop:"10%" ,}} variant="h4" >About Us</Typography>
                <Divider className="div" />
                <Grid container spacing={2} sx={{ marginTop:"5%" ,}} >
                    <Grid item xs={6} sx={{paddingRight:"50px" , borderRight:"1px solid Brown"}} >
                    <Typography sx={{textAlign:"left"}} variant="body1">Watching movies is like having a dialogue in the dark. We laugh, cry, share our deepest fears and joys along with the characters on screen. It's this collective experience, which is almost similar to having a shared dream, that makes movies a surreal experience. Hence, every film becomes a statement about life itself. We, at 2D Entertainment Pvt Ltd, believe in harnessing the power of great stories to engage with the audience at a deeper level.</Typography>
                    <Typography sx={{textAlign:"left", marginTop:"20px"}} variant="body1">A brain child of actor Suriya, who has built a reputation for himself for playing challenging roles, 2D Entertainment Pvt Ltd was established in 2014. As a production company, we are keen on nurturing fresh ideas and produce content which will touch people's lives, apart from entertaining them. In the past two years, 2D Entertainment Pvt Ltd has produced three films, each different from the other, and within a short span of time, we have emerged as one of the</Typography>
                    </Grid>
                    
                    <Grid item xs={6} sx={{ marginLeft:"0px" }} >
                    <Typography sx={{textAlign:"left"}} variant="body2">Watching movies is like having a dialogue in the dark. We laugh, cry, share our deepest fears and joys along with the characters on screen. It's this collective experience, which is almost similar to having a shared dream, that makes movies a surreal experience. Hence, every film becomes a statement about life itself. We, at 2D Entertainment Pvt Ltd, believe in harnessing the power of great stories to engage with the audience at a deeper level.</Typography>
                    <Typography sx={{textAlign:"left", marginTop:"20px"}} variant="body2">A brain child of actor Suriya, who has built a reputation for himself for playing challenging roles, 2D Entertainment Pvt Ltd was established in 2014. As a production company, we are keen on nurturing fresh ideas and produce content which will touch people's lives, apart from entertaining them. In the past two years, 2D Entertainment Pvt Ltd has produced three films, each different from the other, and within a short span of time, we have emerged as one of the</Typography>
                    </Grid>
                    
                </Grid>
                
            </Container>

        </div>
    )
}

export default About;