import { Box, Image, Text, Center } from '@chakra-ui/react';
import React from 'react';
import Fassio from '../../../images/Fassio_Juan.jpg';

const AboutMe = () => {
    return (
        <Box fontFamily={'mono'} textAlign={'center'} as="section" id="me">
            <Text
                fontSize="3xl"
                borderBottom="1px"
                borderColor="gray.200"
                py={10}
            >
                About Me
            </Text>
            <Center my={20}>
                <Image
                    src={Fassio}
                    alt="Juan Martin Fassio"
                    borderRadius="full"
                    boxSize={400}
                />
            </Center>
            <Text
                px={{ base: 0, sm: 50, md: 200, lg: 350 }}
                my={30}
                fontWeight={'bold'}
                fontSize={'lg'}
            >
                Hi! My name is Juan Martin Fassio. I am a self taught computer
                programmer (learning since August 2021), and ever since i
                started, i have been fully immersed in the coding world. I first
                started learning Python, it's syntax, basic algorithms (and some
                really complex ones), functions, classes and methods, threads
                and much more. I began learning MySQL and managed to merge it
                with my web scraping skills (beautifulSoup 🥣), but i wanted to
                learn more. This was the moment i heard about Django, this web
                production framework, so i put my hands on it. Learning Django
                woke up my curiosity towards the front end part of web
                development. So i dug into HTML, CSS, Javascript (what a
                journey!) and finally React, the library i feel most comfortable
                working on right now.{' '}
            </Text>
            <Text
                px={{ base: 0, sm: 50, md: 200, lg: 350 }}
                my={30}
                fontWeight={'bold'}
                fontSize={'lg'}
            >
                This was a modest summary of my journey on my pursuit of
                becoming one day a developer. My main goal now is learning new
                techs, being part of awesome projects and form incredible teams.
            </Text>
        </Box>
    );
};

export default AboutMe;
