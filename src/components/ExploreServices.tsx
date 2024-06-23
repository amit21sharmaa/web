import { Box, Card, CardContent, Typography } from "@mui/material";
import { exploreServiceArray } from "./ExploreServiceArray";
import DesignedButton from "../common/DesignedButton";
import '../components/ExploreServices.css'

const ExploreServices = () => {
    return (
    <div className="exploreServices">
        <Box className="exploreServicesText">
            <Typography variant="h5" >
                Explore Our Services
            </Typography>
            <Typography sx={{lineHeight:'28px', color:'#47536B'}}>
                We are self-service data analytics software that lets you create visually.
            </Typography>
            <Box className="serviceComponent">
                {exploreServiceArray.map((item,key) => {
                    return (
                        <Card className="serviceComponentCard" key={key} elevation={0} sx={{width:'17%',color:'#0F0049', border:'none',textAlign:'left', backgroundColor:'#FBFBFB'}}>
                            <CardContent>
                                <Typography gutterBottom component="div" sx={{color:'#0F0049', height:'20%'}}>
                                    <img src={item.sourcePath} alt={item.headerText} width='30%'/>
                                </Typography>
                                <Typography gutterBottom component="div" sx={{color:'#0F0049'}}>
                                    {item.headerText}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.subHeaderText}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Box>
            <DesignedButton buttonName="Learn More" />
        </Box>
    </div>
  );
}

export default ExploreServices;