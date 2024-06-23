import { Box, Card, Typography } from "@mui/material";
import DesignedButton from "../common/DesignedButton";
import realtimeAnalytics1 from "../assests/Realtime analytics1.png";
import realtimeAnalytics2 from "../assests/Realtime analytics2.jpg";
import realtimeAnalytics3 from "../assests/Realtime analytics3.jpg";
import '../components/OurBlog.css'

const blogPicturePathArray = [realtimeAnalytics1, realtimeAnalytics2, realtimeAnalytics3];

const OurBlog = () => {
    return (
    <div className="ourBlog">
        <Box className="ourBlogBox">
            <Typography variant="h5" sx={{ mb:2,fontSize:'1.5rem'}}>
                Our Blogs
            </Typography>
            <Box className="ourBlogSubBox">
                <Box className="blogComponents">
                    {blogPicturePathArray.map((item,key) =>{
                        return(
                            <Box key={key} sx={{width:'40%'}}>
                                <img src={item} alt="realtimeAnalytics"  style={{height:'60%',width:'90%'}} />
                                <Card elevation={0} sx={{backgroundColor:'white'}}>
                                    <Typography variant="h6"sx={{pt:1,pl:1, color:'#0F0049'}}>
                                        Realtime analytics
                                    </Typography>
                                    <Typography sx={{fontSize:'10px',pt:1,pl:1, color:'#0F0049'}}>
                                        “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. 
                                    </Typography>
                                </Card>
                            </Box>
                        )
                    })}
                </Box>
            <DesignedButton buttonName="Learn More" />
            </Box>
        </Box>
    </div>
  );
}

export default OurBlog;