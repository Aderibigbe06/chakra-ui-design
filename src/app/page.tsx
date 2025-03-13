"use client"

import { Heading, Stack } from "@chakra-ui/react"
import { Button, Center } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react"
import { Blockquote } from "@chakra-ui/react"
import { Icon, Flex } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaDatabase, FaBook } from 'react-icons/fa';

//import  DecorativeBox  from "compositions/lib/decorative-box"


const Page = () => {
  return (
    <>
    <Center>
    <Stack gap = "20" align = "flex-start" direction ="row" h = "20">
      <Heading size = "sm" color = "#173da6">The Data Folks</Heading>
      <Heading size = "sm">Home</Heading>
      <Heading size = "sm">About us</Heading>
      <Heading size = "sm">Explore</Heading>
      <Heading size = "sm">Product</Heading>
      <Heading size = "sm">Premium</Heading>
      <Heading size = "sm">Question for the day</Heading>
      <Heading ><Button size = "sm" background = "linear-gradient(135deg, #1e3c72, #2a5298)">Sign up</Button></Heading>
    </Stack>
    </Center>

  
    <Center>
      <Box background="linear-gradient(135deg, #1e3c72, #2a5298)" width="95%" height="50%" padding="8" color="white" fontWeight="700" textStyle="4xl" mb="4" borderRadius="0.375rem" boxShadow="xl" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
        <Text fontSize="4xl" fontWeight="700">
          Unlock the power of data <br />with our intuitive and <br />easy-to-use SQL platform.
        </Text>

        <Text color="white" fontWeight="400" textStyle="md" mb="4" mt="4">
          Whether you're a beginner or a seasoned pro, our platform makes it <br />simple to analyze and manage your data.
        </Text>

        <Button size="sm" color="blue" backgroundColor="white" h="10" _hover={{ backgroundColor: "#cce0ff" }}>
          Discover more
        </Button>
      </Box>
    </Center>


    <Stack>
      <Text textStyle = "xl" fontWeight = "700" fontSize = "xl" ml = "10" mt = "4">Our vision with</Text>
      <Text textStyle = "xl" color = "#173da6" fontWeight = "700" fontSize = "xl" ml = "10">The Data Folks</Text>
      <Text textStyle = "xs" fontWeight = "500" mb = "10" ml = "10">With our comprehensive SQL solutions, we enable users to <br/>analyze and manipulate the data with ease, allowing them to <br />extract meaningful insights and make data-driven decisions.<br />Our goal is to educate and prepare users who want to make <br />waves in the world of data, making it more accesssible and <br />understandable for everyone.</Text>
    </Stack>


    <Text fontWeight = "700" textAlign = "center" textStyle = "xl">Explore</Text>
        

    <Flex justify="center" align="center" mt="8" mb="8">
      <Box display="flex" borderRadius="full" overflow="hidden" width="auto" border="1px solid" borderColor="gray.300">
        {/* "What We Do" Section with Blue Background */}
        <Box background = "linear-gradient(135deg, #1e3c72, #2a5298)" color="white" p="4" textAlign="center" borderTopLeftRadius="full" borderBottomLeftRadius="full" width="120px" zIndex="1" // Ensure it's above the white section
        >
          <Text fontSize="sm" fontWeight="bold">
            What We Do
          </Text>
        </Box>

        {/* "Who We Are" Section with White Background */}
        <Box backgroundColor="white" color="gray.700" p="4" textAlign="center" borderTopRightRadius="full" borderBottomRightRadius="full" width="120px" borderLeft="1px solid" borderColor="gray.300" marginLeft="-10px" // Adjusts position of the white box to slightly overlap the blue box
        >
          <Text fontSize="sm" fontWeight="bold">
            Who We Are
          </Text>
        </Box>
      </Box>
    </Flex>


    <Text fontWeight = "700" textAlign = "center" textStyle = "xl" mb = "3">We are good at what we do</Text>
    <Text textAlign = "center" textStyle = "xs" fontWeight = "500" mb = "4">At The Data Folks, we understand the importance of being prepared for technical interviews. That's why we've <br />created this landing page to help you hone your SQL skills and feel confident when it comes to demonstrating your <br />expertise during your interview.</Text>



    <Flex justify="center" align="center" gap="4" mt="8" mb="8">
      {/* SQL Practical Problems Box */}
      <Box backgroundColor="black" color="white" width="400px" height="200px" borderRadius="10px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" boxShadow="lg">
        <Icon as={FaDatabase} boxSize="10" color="white" mb="4" /> {/* SQL icon */}
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
          SQL Practical Problems
        </Text>
      </Box>
      {/* SQL Tutorial Box */}
      <Box backgroundColor="lightblue" color="black" width="400px" height="200px" borderRadius="10px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" boxShadow="lg">
        <Icon as={FaBook} boxSize="10" color="black" mb="4" /> {/* Tutorial icon */}
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
          SQL Tutorial
        </Text>
      </Box>
    </Flex>


    <Text fontWeight = "700" textAlign = "center" textStyle = "xl">Products</Text>
    <Text textAlign = "center" textStyle = "xs" fontWeight = "500" mb = "6">In addition to our courses, we offer a range of supplementary resources to support your learning journey, including <br />daily questions, practice exercises, and a study path.</Text>
  


    <Flex justify="flex-end">
      <Blockquote.Root background="#a3cfff" width="50%" color="white" fontWeight="500" textStyle="xs" mb="8" borderRadius="1rem" p = "6">
        <Blockquote.Content>
          Users can sign in for free to solve a new question every 24 hours, which will be of varying <br />
          difficulty - easy, medium or hard at random and if they successfully solve it, they will earn <br />
          points and maintain a streak by solving daily.
        </Blockquote.Content>
        <Button backgroundColor="white" color="#a3cfff" size="sm" mt = "4">
          Let's try it out
        </Button>
      </Blockquote.Root>
    </Flex>


    <Stack>
      <Flex justify="center" align="center" width="100%">
        <Box backgroundColor="#d4d4d8" width="90%" p="8" m="6" borderRadius="0.375rem" mb="6" mt="4" ml="10">
          <Text fontWeight="700" mb="4" textAlign="left" textStyle="xl"  pl="6" >
            You might be wondering <br />who this product is for?
          </Text>
          <Text textStyle="xs" textAlign="left" pl = "6">
            This product is designed for individuals who want to improve their SQL skills or are preparing for a SQL interview. <br />
            Whether you are a beginner or an experienced SQL user, this course will provide you with a comprehensive and <br/>
            ordered approach to learning SQL concepts through a series of questions. If you want to master SQL and enhance <br/>
            your career prospects, this product is perfect for you
          </Text>
        </Box>
      </Flex>
    </Stack>


    <Box background="linear-gradient(135deg, #1e3c72, #2a5298)" width="100%" color="white" textAlign="center" p="4">
      <Stack direction="column" align="center">
        <Text color="white" fontSize="2xl" textStyle="md">The Data Folks</Text>

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
