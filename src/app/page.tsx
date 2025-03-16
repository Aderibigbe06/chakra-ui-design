"use client"

import { Heading, Stack, Button, Center, Box, Text, Icon, Flex, Image } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Page = () => {
  return (
    <>
      {/* Container to hold both Center components with consistent width */}
      <div style={{ width: "92%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* First Center - Navigation */}
      <Center mt="8" width="100%" maxWidth="1200px">
        <Stack justify="space-between" align="center" direction="row" width="100%" height="35px" padding="0 10px">
          <Image src="/images/logo.png" alt="Logo" width="220px" height="36px" />
          <Flex justify="space-evenly" align="center" width="100%" maxWidth="800px" px="4">
            <Heading size="sm">Home</Heading>
            <Heading size="sm">About us</Heading>
            <Heading size="sm">Explore</Heading>
            <Heading size="sm">Product</Heading>
            <Heading size="sm">Premium</Heading>
            <Heading size="sm">Question for the day</Heading>
          </Flex>
          <Image src="/images/sign.png" alt="Sign" width="66px" height="34px" borderRadius="5px"/>
        </Stack>
      </Center>

      {/* Second Center - Hero Section */}
      <Center width="100%" maxWidth="1200px">
      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
        <Image src="/images/frame 1.png" alt="Image" width="100%" height="604px" 
        style={{ padding: "10px", borderRadius: "20px", objectFit: "cover", margin: "0 auto", display: "block", }}/>
        {/* Overlay text*/}
        <div style={{ position: "absolute", width: "727px", height: "213px", top: "250px", left: "50px", transform: "translateY(-50%)", color: "white", zIndex: "1", paddingRight: "40px", paddingLeft: "20px", maxWidth: "80%",}}>
          <Text fontWeight="700" mb="4" pl="6" fontFamily="Inter" fontSize="56px" lineHeight="61.6px" letterSpacing="0%"> 
            Unlock the power of data <br /> 
            with our intuitive and <br /> 
            easy-to-use SQL platform. 
          </Text>
          <Text fontWeight="500" textStyle="md" mb="4" mt="4" pl="6" fontFamily="Inter" fontSize="20px" lineHeight="32px" letterSpacing="0%"> 
            Whether you're a beginner or a seasoned pro, our platform makes it <br /> 
            simple to analyze and manage your data. 
          </Text>
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
            <Button size="sm" color="blue" backgroundColor="white" h="10" _hover={{ backgroundColor: "#cce0ff" }} fontFamily="Inter" fontWeight="600" fontSize="20px" lineHeight="100%" letterSpacing="0%"> 
              Discover more 
            </Button>
          </div>
        </div>
      </div>
      </Center>
      </div>




      <Stack py="10" maxWidth="1500px">
        <Flex align="right">
        {/* Text section }}*/}

        <Box maxWidth="50%" width = "604px" height = "102px" top = "825px" left = "80px">
          <Text textStyle="xl" fontWeight="700" ml = "65px" fontFamily = "Inter" fontSize = "40px" lineHeight = "44px" letterSpacing = "0%">
            Our vision with
          </Text>
          <Text textStyle="xl" color="#173da6" fontWeight="700" ml = "65px" fontFamily = "Inter" fontSize = "40px" lineHeight = "44px" letterSpacing = "0%">
            The Data Folks
          </Text>

          <Text textStyle="xs" fontWeight="500" mb="10" ml = "65px" fontFamily = "Inter" fontSize = "20px" lineHeight = "41px" letterSpacing = "0%">
            With our comprehensive SQL solutions, we enable users to analyze and manipulate the data with ease,
            allowing them to extract meaningful insights and make data-driven decisions.
            Our goal is to educate and prepare users who want to make waves in the world of data,
            making it more accessible and understandable for everyone.
          </Text>
        </Box>
       

        {/* Image section */}
        <Box maxWidth="50%" ml={{ md: "8" }}>
          <Image src="/images/frame 2.png" alt="Image" width="592.74px" height = "382.87px" top = "808.48px" left = "775px" objectFit="contain" />
        </Box>
        </Flex>
      </Stack>




      <Text fontWeight = "700" textAlign = "center" textStyle = "xl" fontFamily = "Inter" fontSize = "40px" lineHeight = "44px" letterSpacing = "0%" >Explore</Text>




      <div style={{ position: "relative", width: "45%", maxWidth: "1200px", margin: "auto" }}>
      {/* Second Image (Base Image) */}
      <div style={{ position: "relative", width: "90%" }}>
        <Image src="/images/rectangle1.png" alt="Rectangle 1" width="100%" objectFit="contain"/>
        {/* Text for 'Who we are' */}
          <div
            style={{ position: "absolute", top: "45%", right: "18%", transform: "translateY(-50%)", color: "black", fontWeight: "bold", fontSize: "15px", }}>
          <Text>Who we are</Text>
          </div>
      </div>

        {/* First Image (Overlay Image) */}
        <div
          style={{
            position: "absolute",
            top: "25%", // Adjust this to place the first image within the base image
            left: "10%", // Adjust this to position the overlay image
            width: "50%", // Adjust the size of the overlay image
            }}>
          <Image src="/images/rectangle2.png" alt="Rectangle 2" width="67%" objectFit="contain" />
          {/* Text for 'What we do' */}
          <div
            style={{ position: "absolute", top: "45%", left: "15%", transform: "translateY(-50%)", color: "white", fontWeight: "bold", fontSize: "13px",}} >
              <Text>What we do</Text>
          </div>
        </div>
        </div>




      <Text fontWeight = "700" textAlign = "center" textStyle = "xl" fontFamily = "Inter" fontSize = "40px" lineHeight = "44px" letterSpacing = "0%" mb = "5">We are good at what we do</Text>
      <Text textAlign = "center" textStyle = "xs" fontWeight = "500" fontFamily = "Inter" fontSize = "20px" lineHeight = "41px" letterSpacing = "0%" mb = "6">At The Data Folks, we understand the importance of being prepared for technical interviews. That's why we've <br />created this landing page to help you hone your SQL skills and feel confident when it comes to demonstrating your <br />expertise during your interview.</Text>

  

      <Flex justify="center" align="center" gap="4" mt="4" mb = "10">
      {/* First Image */}
      <Box width="45%">
        <Image src="/images/practical.png" alt="Image" width="630px" height = "443px" top = "400px" objectFit="contain" />
      </Box>
      {/* Second Image */}
      <Box width="45%">
        <Image src="/images/tutorials.png" alt="Image" width="630px" height = "443px" top = "400px" left = "650px" objectFit="contain" />
      </Box>
      </Flex>


      

      <Text fontWeight = "700" textAlign = "center" textStyle = "xl" fontFamily = "Inter" fontSize = "40px" lineHeight = "44px"  mb = "4">Products</Text>
      <Text textAlign = "center" textStyle = "xs" fontFamily = "Inter" fontSize = "20px" lineHeight = "41px" letterSpacing = "0%" fontWeight = "500" mb = "10">In addition to our courses, we offer a range of supplementary resources to support your learning journey, including <br />daily questions, practice exercises, and a study path.</Text>
  


      <Flex justify = "center" align = "center" mb = "20">
      <Image src="/images/frame 3.png" alt="Image" width="1150px" height = "260px" top = "2689px" left = "92px" objectFit="contain"/>
      </Flex>


      

      <Stack mb = "10" justify="center">
      {/* Wrapper with relative positioning to allow text on top */}
      <Flex justify="right" width="90%" position="relative" bg="lightgray" p="6" borderRadius="10px" ml = "80px" mx = "auto">
        <Image src="/images/boy.png" alt="Image" width="400px" height = "451px" top = "3070px" left = "80px" borderRadius = "10px" objectFit="contain"/>
    
        {/* Text on top of the image*/}
       

        <Box position="absolute" zIndex="1" width = "1104px" height = "164px" top = "120px" left = "88px">
          <Text fontWeight="700" mb="8" textAlign="left" textStyle="xl" pl="6" fontFamily = "Inter" fontSize = "40px" lineHeight = "44px" letterSpacing = "0%">
            You might be wondering <br />who this product is for?
          </Text>

          <Text textStyle="xs" textAlign="left" pl="6" fontWeight = "500" fontFamily = "Inter" fontSize = "20px" lineHeight = "41px" letterSpacing = "0%">
            This product is designed for individuals who want to improve their SQL skills or are preparing for a <br />
            SQL interview. Whether you are a beginner or an experienced SQL user, this course will provide you <br />
            with a comprehensive and ordered approach to learning SQL concepts through a series of questions. <br />
            If you want to master SQL and enhance your career prospects, this product is perfect for you
          </Text>
        </Box>
      </Flex>
      </Stack>



      <Box backgroundColor = "#423CDE"  color="white" textAlign="center" p="4">
        <Stack direction="column" align="center">
          <Image src = {"/images/logo (1).png"} alt = {"Image"} width = "280px" height = "45.31px" top = "70px" left = "580px" mb = "4"/>

          <Stack direction="row" justify="center" width = "778px" height = "24px" top = "171px" left = "362px" gap = "40px">
            <Text color="white" mr="4" textStyle="xs">Home</Text>
            <Text color="white" mr="4" textStyle="xs">About us</Text>
            <Text color="white" mr="4" textStyle="xs">Explore</Text>
            <Text color="white" mr="4" textStyle="xs">Product</Text>
            <Text color="white" mr="4" textStyle="xs">Premium</Text>
            <Text color="white" mr="4" textStyle="xs">Question for the day</Text>
          </Stack>

          {/* Social Media Icons Section */}
          <Stack width = "157px" height = "31px" top = "251px" left = "642px" gap = "36px" direction="row" justify="center" mt="4" mb = "6">
            <Icon as={FaFacebook} boxSize="6" color="white" mr="6" />
            <Icon as={FaTwitter} boxSize="6" color="white" mr="6" />
            <Icon as={FaInstagram} boxSize="6" color="white" />
          </Stack>
          </Stack>
      </Box>
      
    </>
  )
}

export default Page
