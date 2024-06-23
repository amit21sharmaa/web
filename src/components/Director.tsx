import { Box, Typography } from "@mui/material";
import director from '../assests/director.png';
import leftArrow from '../assests/left-arrow.png';
import rightArrow from '../assests/right-arrow.png';
import '../components/director.css';

const Director = () => {
    return(
        <div >
            <Box className="directorComponent">
                <Box sx={{width:'40%', ml:3}}>
                    <img src={director} alt="directorImg"  style={{width:'80%', minWidth:'200px'}} />
                </Box>
                <Box className="directorQuote">
                    <Typography sx={{color:"#47536B",mb:3, fontSize:'1.5rem'}} >
                        “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”
                    </Typography>
                    <Typography sx={{color:"#47536B",mb:3, fontSize:'1.2rem'}} >
                        <strong>David Calathan</strong> - Director of Design Operations, New York
                    </Typography>
                    <Typography sx={{position:'absolute', right:'20%'}}>
                        <img src={leftArrow} alt="leftArrow" width='20px' style={{marginRight:'5px'}} />
                        <img src={rightArrow} alt="rightArrow" width='20px' style={{marginLeft:'5px'}} />
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Director;