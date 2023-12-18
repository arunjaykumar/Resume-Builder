import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Navbar } from "./";
import aboutCV from "../Utils/Images/aboutCV.jpg";
// An overview of the website

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume-Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Resume Building made easy and efficient.<br/>
            <b>A Free, Quick and Easy Way to Create Your Professional Resume.</b><br/>
            ResumeBuilder is created to help the users save time in building resumes.
            With ResumeBuilder, a versatile resume can be made instantly 
            with a potential from standing out of the crowd to landing the dream job.
            One can select the template best fit for the purpose, upload the good profile picture, 
            fill out the details regarding qualifications and work experience. and save the resume that is instantly built.
            As simple as that. Saving all the time and efforts to make a resume.
            One may also access the resumes pre made at any time with the My Resumes tab.
            May all your dreams come true. All the very best!    
          </Typography>
          <Stack
            sx={{
              width: "30%",
              placeSelf: "center",
            }}
          >
            <img
              src={aboutCV}
              alt="img"
            // style={{width:"20%", height:"10%"}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Kindly Share in your circle
          </Typography>
          <Box className="icons">
            <Link to="https://www.instagram.com">
              <Instagram
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="error"
              />
            </Link>

            <Link to="https://www.facebook.com">
              <FacebookOutlinedIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>

            <Link to="https://www.linkedin.com/in/deshmukhsahil/">
              <LinkedInIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>
            <Link to="https://web.whatsapp.com">
              <WhatsAppIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="success"
              />
            </Link>
            <Link to="https://www.twitter.com">
              <TwitterIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="info"
              />
            </Link>
            <Link to="https://github.com/DeshmukhSahil">
              <GitHub
                sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
              />
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
