"use client"

import { Heading, Stack, Button, Center, Box, Text, Icon, Flex, Image } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Page = () => {
  return (
    <>
      <Center mt="7">
        <Stack gap="12" justify = "center" align="flex-start" direction="row" h="12">
        {/*...*/}
          <Image src={"/images/logo.png"} alt={"Image"} width = "15%"/>
          <Heading size="sm">Home</Heading>
          <Heading size="sm">About us</Heading>
          <Heading size="sm">Explore</Heading>
          <Heading size="sm">Product</Heading>
          <Heading size="sm">Premium</Heading>
          <Heading size="sm">Question for the day</Heading>
          <Heading>
          <Image src = "images/sign.png" alt = "Image" width = "45%"/>
          </Heading>
        </Stack>
      </Center>
    


      <Center width="100%" maxWidth="1200px">
        <div style={{ position: "relative", width: "80%" }}> {/* Decrease width to make the frame more centered */}
          <Image src="images/frame 1.png" alt="Image" width="100%" height="auto" style={{padding: "8px", borderRadius: "0.375rem", objectFit: "cover",}}/>
          {/* Overlay text */}
        <div style={{position: "absolute", top: "50%", transform: "translateY(-50%)", color: "white", zIndex: "1", paddingRight: "40px", paddingLeft: "20px", maxWidth: "80%",}}>
          <Text fontSize="4xl" fontWeight="700"  mb="4" pl="6">
            Unlock the power of data <br />
            with our intuitive and <br />
            easy-to-use SQL platform.
          </Text>

          <Text fontWeight="400" textStyle="md" mb="4" mt="4"  pl="6">
            Whether you're a beginner or a seasoned pro, our platform makes it <br />
            simple to analyze and manage your data.
          </Text>

          <Button size="sm" color="blue" backgroundColor="white"  h="10" _hover={{ backgroundColor: "#cce0ff" }}>
            Discover more
          </Button>
        </div>
        </div>
      </Center>



      <Stack py="10" maxWidth="1500px">
        <Flex align="right" width="80%">
        {/* Text section }}*/}
        <Box maxWidth="50%" ml={{ md: "16" }} pr={{ md: "4" }}>
          <Text textStyle="xl" fontWeight="700" fontSize="xl" ml = "70px">
            Our vision with
          </Text>
          <Text textStyle="xl" color="#173da6" fontWeight="700" fontSize="xl" ml = "70px">
            The Data Folks
          </Text>
          <Text textStyle="xs" fontWeight="500" mb="10" ml = "70px">
            With our comprehensive SQL solutions, we enable users to analyze and manipulate the data with ease,<br />
            allowing them to extract meaningful insights and make data-driven decisions.<br />
            Our goal is to educate and prepare users who want to make waves in the world of data,<br />
            making it more accessible and understandable for everyone.
          </Text>
        </Box>

        {/* Image section */}
        <Box maxWidth="50%" ml={{ md: "16" }}>
          <Image src="/images/frame 2.png" alt="Image" width="100%" objectFit="contain" />
        </Box>
        </Flex>
      </Stack>




      <Text fontWeight = "700" textAlign = "center" textStyle = "xl">Explore</Text>
        

      <Flex justify="center" align="center" mt="8" mb="8">
        <Box display="flex" borderRadius="full" width="auto" border="1px solid" borderColor="gray.300">
          <Box backgroundColor = "blue.600" color="white" p="4" textAlign="center" borderTopLeftRadius="full" borderBottomLeftRadius="full" width="120px" zIndex="1">
          <Text fontSize="sm" fontWeight="bold">
            What We Do
          </Text>
        </Box>

        {/* "Who We Are" Section with White Background */}
        <Box backgroundColor="white" color="gray.700" p="4" textAlign="center" borderTopRightRadius="full" borderBottomRightRadius="full" width="120px" borderLeft="1px solid" borderColor="gray.300" marginLeft="-10px">
          <Text fontSize="sm" fontWeight="bold">
            Who We Are
          </Text>
        </Box>
        </Box>
      </Flex>



      <Text fontWeight = "700" textAlign = "center" textStyle = "xl" mb = "5">We are good at what we do</Text>
      <Text textAlign = "center" textStyle = "xs" fontWeight = "500" mb = "6">At The Data Folks, we understand the importance of being prepared for technical interviews. That's why we've <br />created this landing page to help you hone your SQL skills and feel confident when it comes to demonstrating your <br />expertise during your interview.</Text>

  

      <Flex justify="center" align="center" gap="4" mt="4" mb = "10">
      {/* First Image */}
      <Box width="35%">
        <Image src="/images/practical.png" alt="Image" width="100%" objectFit="contain" />
      </Box>

      {/* Second Image */}
      <Box width="35%">
        <Image src="/images/tutorials.png" alt="Image" width="100%" objectFit="contain" />
      </Box>
      </Flex>



      <Text fontWeight = "700" textAlign = "center" textStyle = "xl" mb = "4">Products</Text>
      <Text textAlign = "center" textStyle = "xs" fontWeight = "500" mb = "10">In addition to our courses, we offer a range of supplementary resources to support your learning journey, including <br />daily questions, practice exercises, and a study path.</Text>
  


      <Flex justify = "center" align = "center" mb = "20">
      <Image src="/images/frame 3.png" alt="Image" width="75%" objectFit="contain"/>
      </Flex>



      <Stack mb = "10" justify="center">
      {/* Wrapper with relative positioning to allow text on top */}
      <Flex justify="right" width="75%" position="relative" bg="lightgray" p="6" borderRadius="8px" ml = "80px" mx = "auto">
        <Image src="/images/boy.png" alt="Image" width="30%" objectFit="contain"/>
    
        {/* Text on top of the image*/}
        <Box position="absolute" top="20%" left="10%" zIndex="1">
          <Text fontWeight="700" mb="8" textAlign="left" textStyle="xl" pl="6">
            You might be wondering <br />who this product is for?
          </Text>
          <Text textStyle="xs" textAlign="left" pl="6" fontWeight = "400">
            This product is designed for individuals who want to improve their SQL skills or are preparing for a SQL interview. <br />
            Whether you are a beginner or an experienced SQL user, this course will provide you with a comprehensive and <br />
            ordered approach to learning SQL concepts through a series of questions. If you want to master SQL and enhance <br />
            your career prospects, this product is perfect for you
          </Text>
        </Box>
      </Flex>
      </Stack>

    

  
      <Box backgroundColor = "blue.600" width="100%" color="white" textAlign="center" p="4">
        <Stack direction="column" align="center">
          <Image src = {"/images/logo (1).png"} alt = {"Image"} width = "15%"/>

          <Stack direction="row" justify="center">
            <Text color="white" mr="4" textStyle="xs">Home</Text>
            <Text color="white" mr="4" textStyle="xs">About us</Text>
            <Text color="white" mr="4" textStyle="xs">Explore</Text>
            <Text color="white" mr="4" textStyle="xs">Product</Text>
            <Text color="white" mr="4" textStyle="xs">Premium</Text>
            <Text color="white" mr="4" textStyle="xs">Question for the day</Text>
          </Stack>

          {/* Social Media Icons Section */}
          <Stack direction="row" justify="center" mt="4">
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
