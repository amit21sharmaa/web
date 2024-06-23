import { Box, Typography } from "@mui/material";
import DesignedButton from "../common/DesignedButton";
import picturePath from '../assests/BuildingBrands.jpg';
import clickup from '../assests/clickup.png';
import dropbox from '../assests/dropbox.png';
import github from '../assests/github.png';
import '../components/BuildingBrand.css';

const BuildingBrand = () => {
    return(
        <div>
            <Box className = "buildingBrand">
                <Box className = "buildingBrandText">
                    <Typography variant="h3" sx={{mb:3}}>
                        Building Brands in the <span style={{color:"#6153CD"}}>Digital Age</span> 
                    </Typography>
                    <Typography sx={{color:"#47536B",mb:3, fontSize:'1.5rem'}} >
                        Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights. 
                    </Typography>
                    <DesignedButton buttonName="Learn More" />
                </Box>
                <Box sx={{width:'40%',}}>
                    <img src={picturePath} alt="BuildingBrands" className="BuildingBrandsPicture" />
                </Box>
            </Box>
            <Box className = "buildingBrandCompanyLogo">
                <Typography >
                    Powering next-gen companies
                </Typography>
                <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
                    <img src={clickup} alt="clickup" width='200px' style={{}} />
                    <img src={dropbox} alt="dropbox" width='200px' style={{}} />
                    <img src={github} alt="github" width='200px' style={{}} />
                </Box>
            </Box>
        </div>
    )
}

export default BuildingBrand;