import React, { useEffect } from 'react'
import {Container , Grid , Box ,Typography,Button,IconButton,TextField}from '@mui/material'
import Img1 from './Other 19.png'
import ForbesImg from './image 8.png' ; 
import MITImg from './image 7.png'; 
import FastImg from './image 6.png' ; 
import TechCrunchImg from './image 5.png'; 
import Section3Img from './Other 18.png';
import Section4Img from './Other 17.png';
import ProfilePic from './Screen Shot 2022-05-09 at 10.28.png'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const PurpleColor = '#9090DC'; 

const Main = () => {

    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);

  return (
    <Container>
        <Grid container spacing={2}   ml={"0px"}>
            <Grid item xs={12} sm={6}  data-aos="fade-down"  sx={{
                mt:"120px"
            }}>
                <Typography variant='h3'
                    fontFamily={"outfit"}
                    fontWeight={900}
                    color={"white"}
                    
                >DISCOVER AND COLLECT<br></br> RARE NFT's</Typography>
                <Typography
                    variant='h6'
                sx={{fontFamily:"outfit",color:"white",
                    mt:"20px",
                    fontWeight : 400 , 
                    mb : "20px",
                }}
                >The most secure marketplace for buying <br></br>and selling unique crypto assets.</Typography>
                <Box mt={"50px"}>
                    <Button
                        xs={6}
                     sx={{
                        background:PurpleColor,
                        color : "white",
                        width : "180px",
                        borderRadius :"50px",
                        mr:'10px',
                        mb:"20px"
                     }}
                    >BUY NFT's</Button>
                    <Button
                        xs={6}
                        sx={{
                            borderRadius: "83px",
                            border: "2px solid #97D5D5",
                            width :"180px",
                            color : "white",
                            mb:"20px",

                        }}
                    >SELL NFT's</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img
                data-aos="fade-down"
                    src={Img1}
                    style={{maxWidth:'90%',
                            height:'auto',
                            padding : 0 ,                
                        }}  
              >
                </img>
            </Grid>
        </Grid>

        <Container data-aos="fade-up" sx={{mb:'20px'}}>
            <Typography sx={{
                fontFamily : "outfit", 
                color : "white", 
                mb : "20px",
                fontWeight : 600 , 
            }} >FEATURED ON</Typography>
            <Box sx={{
                pt:"5px",
                pb : "5px",
                borderRadius: "20px",
                opacity: "0.7300000190734863",
                background: "rgba(99, 88, 189, 0.19)",
            }}>
                <Grid container spacing={1} sx={{mt:"20px"}} textAlign={"center"} display={"flex"}>
                    <Grid item xs={12} sm={3} mb={"10px"}>
                        <img
                            src={ForbesImg}
                        ></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <img
                            src={MITImg}
                        ></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <img
                            src={FastImg}
                            
                        ></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <img
                            src={TechCrunchImg}
                            style={{marginBottom:"30px"}}
                        ></img>
                    </Grid>
                </Grid>
            </Box>
        </Container>

            {/* SECTION 3  */}
            <Grid container spacing={2} sx={{mt:"40px"}}>
                <Grid item xs={12} sm={6}>
                    <img
                    data-aos="fade-right"
                        src={Section3Img}
                        style={{maxWidth:'90%',
                        height:'auto',
                        padding : 0 ,                
                    }}  
                    ></img>
                </Grid>

                <Grid item data-aos="fade-up" xs={12} sm={6} sx={{mt:"5%"}}>
                    <Box>
                        <Typography sx={{
                            color: "#AAD9D9",
                            fontWeight : 600 ,
                            letterSpacing : "2px", 
                            mb : "20px", 
                        }}>ANALYTICS</Typography>
                        <Typography
                        sx={{
                            color: "#FFF",
                            fontSize: "57px",
                            fontFamily: "Outfit",
                            fontStyle: "normal",
                            fontWeight: 900,
                            lineHeight: "101%",
                            textTransform: "capitalize",
                        }}
                        >built-in analytics <br></br> to track your nfts</Typography>
                        <Typography sx={{fontSize:"20px",
                        color :"white", 
                        mt :" 20px",
                        fontWeight : 400, 
                    }}>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time. </Typography>
                        <Button sx={{
                            backgroundColor : PurpleColor,
                            color :"white" ,
                            mt:"40px",
                            width : "180px", 
                            borderRadius :"40px",
                            fontFamily :"outfit",
                        }}>view our pricing</Button>
                    </Box>
                </Grid>
            </Grid>

                        {/* SECTION 4 */}
                           
            <Grid container spacing={2} sx={{mt:"40px"}}>

            <Grid item data-aos="fade-up" xs={12} sm={6} sx={{mt:"5%"}}>
                    <Box>
                        <Typography sx={{
                            color: "#AAD9D9",
                            fontWeight : 600 ,
                            letterSpacing : "2px", 
                            mb : "20px", 
                        }}>GET OUT APP</Typography>
                        <Typography
                        sx={{
                            color: "#FFF",
                            fontSize: "57px",
                            fontFamily: "Outfit",
                            fontStyle: "normal",
                            fontWeight: 900,
                            lineHeight: "101%",
                            textTransform: "capitalize",
                        }}
                        >Browse Nfts From <br></br> Your Smartphone</Typography>
                        <Typography sx={{fontSize:"20px",
                        color :"white", 
                        mt :" 20px",
                        fontWeight : 400, 
                    }}>Our Krypto app is the easiest way to keep track of your assets when you're on the go.</Typography>
                        <Button sx={{
                            backgroundColor : PurpleColor,
                            color :"white" ,
                            mt:"40px",
                            width : "180px", 
                            borderRadius :"40px",
                            fontFamily :"outfit",
                        }}>DOWNLOAD ON IOS</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img
                    data-aos="fade-right"
                        src={Section4Img}
                        style={{maxWidth:'90%',
                        height:'auto',
                        padding : 0 ,                
                    }}  
                    ></img>
                </Grid>

            
            </Grid>

                {/* SECTION 5 */}
                <Container sx={{textAlign:"center",mt:"80px",mb:"80px"}} >
                    <Typography
                    data-aos = "fade-up"
                        color ={"#AAD9D9"}
                        sx={{
                            fontFamily : "outfit", 
                            fontWeight : 600 , 
                            letterSpacing : "3px"
                        }}
                    >TESTIMONIALS</Typography>
              <Typography 
              data-aos = "fade-up"
                sx={{
                    color :"white", 
                    fontWeight : 800,
                    fontSize :"50px",
                    fontFamily :"outfit", 
                    lineHeight : "101%",
                    mt :"10px",
                    mb :"50px"
                    

                }}
              >Read What Others <br></br> Have To Say</Typography>
                    
                    <Grid container spacing={3} data-aos = "fade-up">
                        <Grid textAlign={"center"} alignContent={"center"} data-aos = "fade-up" justifyContent={"center"} alignItems={"center"} item xs={12} sm={4}>
                           <Box textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                           <Box textAlign={"center"} component={"img"} sx={{
                            backgroundColor : "white", 
                            width :"120px",
                            height :"120px",
                            borderRadius : "100%",
                            mt :"50px",
                            mb :"-40px",
                            zIndex : -1,
                            //borderRadius : "20px",
                           }}
                           src={ProfilePic}
                           >

                           </Box>
                           <Box sx={{
                            background : "#0E0E48", 
                            pt : "35px",
                            pl : "15px", 
                            pr :"15px",
                            pb :"35px",
                            borderRadius :"25px",
                           }}>
                            <Typography sx={{
                                fontFamily : "outfit",
                                color : "white", 
                                fontWeight : 600 ,
                                fontSize :"20px",
                                mt :"20px", 
                                letterSpacing : "5px",


                            }}>OLIVIA COLE</Typography>
                            <Typography
                                sx={{fontSize:"16px",
                            color :"white",
                        fontFamily :"outfit",
                        fontWeight :200,
                    }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  </Typography>
                            </Box>
                            </Box>
                         </Grid>
                        
                         <Grid textAlign={"center"} data-aos = "fade-up" alignContent={"center"} justifyContent={"center"} alignItems={"center"} item xs={12} sm={4}>
                           <Box textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                           <Box textAlign={"center"} component={"img"} sx={{
                            backgroundColor : "white", 
                            width :"120px",
                            height :"120px",
                            borderRadius : "100%",
                            mt :"50px",
                            mb :"-40px",
                            zIndex : -1,
                            //borderRadius : "20px",
                           }}
                           src={ProfilePic}
                           >

                           </Box>
                           <Box sx={{
                            background : "#0E0E48", 
                            pt : "35px",
                            pl : "15px", 
                            pr :"15px",
                            pb :"35px",
                            borderRadius :"25px",
                           }}>
                            <Typography sx={{
                                fontFamily : "outfit",
                                color : "white", 
                                fontWeight : 600 ,
                                fontSize :"20px",
                                mt :"20px", 
                                letterSpacing : "5px",


                            }}>OLIVIA COLE</Typography>
                            <Typography
                                sx={{fontSize:"16px",
                            color :"white",
                        fontFamily :"outfit",
                        fontWeight :200,
                    }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  </Typography>
                            </Box>
                            </Box>
                         </Grid>
                         <Grid textAlign={"center"} data-aos = "fade-up" alignContent={"center"} justifyContent={"center"} alignItems={"center"} item xs={12} sm={4}>
                           <Box textAlign={"center"} alignContent={"center"} justifyContent={"center"}>
                           <Box textAlign={"center"} component={"img"} sx={{
                            backgroundColor : "white", 
                            width :"120px",
                            height :"120px",
                            borderRadius : "100%",
                            mt :"50px",
                            mb :"-40px",
                            zIndex : -1,
                            //borderRadius : "20px",
                           }}
                           src={ProfilePic}
                           >

                           </Box>
                           <Box sx={{
                            background : "#0E0E48", 
                            pt : "35px",
                            pl : "15px", 
                            pr :"15px",
                            pb :"35px",
                            borderRadius :"25px",
                           }}>
                            <Typography sx={{
                                fontFamily : "outfit",
                                color : "white", 
                                fontWeight : 600 ,
                                fontSize :"20px",
                                mt :"20px", 
                                letterSpacing : "5px",


                            }}>OLIVIA COLE</Typography>
                            <Typography
                                sx={{fontSize:"16px",
                            color :"white",
                        fontFamily :"outfit",
                        fontWeight :200,
                    }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  </Typography>
                            </Box>
                            </Box>
                         </Grid>
                        

                   
                    </Grid>



                  </Container>

                  {/* SECTION 6 */}

                  <Container data-aos = "fade-up" sx={{
                    borderRadius: "34px",
                    background: "linear-gradient(316deg, #AAD9D9 0%, #9090DC 100%, #7D7DDC 100%)",
                    textAlign : "center", 
                    p : "30px", 
                    mb:"80px",
                }}>
                    <Typography data-aos = "fade-up" sx={{
                        fontWeight : 600 , 
                        fontSize : "20px", 
                        color :" #0E0E48",
                        fontFamily : "outfit", 
                        mb :"20px", 
                        mt:"30px",
                    }}>ARE YOU READY ? </Typography>
                    <Typography data-aos = "fade-up" sx={{
                        fontWeight : "900",
                        color :"white", 
                        fontSize :"50px", 
                        fontFamily : "outfit", 
                        lineHeight :"101%",
                    }}>Be A Part Of The <br></br>Next Big Thing</Typography>
                    <Button sx={{
                        borderRadius: "83px",
                        background: "#0E0E48",
                        mt:"40px",
                        width :"180px",
                        color :"white",
                        p :"15px",
                        fontFamily :"outfit",
                        
                    }}>Get Started</Button>
                   </Container>

    {/* FOOTER */}
    <Container data-aos = "fade-up" sx={{mt : "60px",mb:"30px"}}>

<Box>
    <Grid container spacing={2} sx={{mt:"20px"}}>
        <Grid item xs={12} sm={6}>
            <Box textAlign={"left"}>
                <Typography fontFamily={"outfit"} fontWeight={900} color={"white"} fontSize={"20px"}>KRYPTO.</Typography>
                <FacebookIcon sx={{color:"white" ,mt:"20px",mr:"20px"}}/>
                <TwitterIcon sx={{color:"white" ,mt:"20px",mr:"20px"}} />
                <YouTubeIcon  sx={{color:"white" ,mt:"20px",mr:"20px"}}/>
                <Typography fontFamily={"outfit"}  mt={"20px"} color={"white"}fontWeight={400}>@2023KRYPTO.</Typography>
            </Box>
        </Grid>
        
        <Grid item xs={6} sm={2}>
           <Box >
                <li style={{listStyle:"none",fontFamily:"outfit",color:"white"}}>
                    <li style={{fontWeight:700}} >Krypto</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Buy NFTs</li>
                    <li>Sell NFTs</li>
                </li>
            </Box> 
        </Grid>

          
        <Grid item xs={6} sm={2}>
           <Box>
                <li style={{listStyle:"none",color:"white"}}>
                    <li style={{fontWeight:700}} >Market</li>
                    <li>Browse NFTs</li>
                    <li>Buy NFTs</li>
                    <li>Sell NFTs</li>
                </li>
            </Box> 
        </Grid>

          
        <Grid item textAlign={"center"} xs={12} sm={2}>
           <Box>
                    <Typography color={"white"} fontFamily={"outfit"} fontWeight={800}>Join Our Newsletter</Typography>
                   
                    <TextField id="outlined-basic " label="Email" variant="outlined" sx={{background:"#11124B",
                       borderRadius :"20px",
                       fontFamily :"outfit",
                       mt :"20px",
                        color :"white",
                }} />
                

            </Box> 
        </Grid>

    </Grid>
</Box>

<Box  textAlign={"center"} sx={{mt:"20px"}}>
    <Typography fontFamily={"outfit"} color={"white"}>Developed With {<FavoriteIcon sx={{color:"red"}} />} by Abdullah Shakir</Typography>
    <IconButton href="https://www.linkedin.com/in/abdullah-shakir-107583217/" target='_blank'><LinkedInIcon sx={{color:"white",fontSize:"30px"}} /></IconButton>
    <IconButton href="https://wa.me/+923341863542" target="_blank" ><WhatsAppIcon  sx={{color:"white",fontSize:"30px"}} /></IconButton>
    <IconButton href='https://github.com/NotAbdullah87 ' target='_blank' ><GitHubIcon sx={{color:"white",fontSize:"30px"}} /> </IconButton>
</Box>
{/* https://www.linkedin.com/in/abdullah-shakir-107583217/ */}
{/* https://github.com/NotAbdullah87 */}
</Container>

    </Container>
  )
}

export default Main