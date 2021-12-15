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
                started, i have dedicated all my spare time to it. I first
                started learning Python and got pretty good at algorithms, but i
                wanted to learn more. So i began learning Django and React, and
                started developing simple web pages. Im really looking forward
                to work on a tech company and learn more stuff! soy un campeon y
                un capo xddd soy un campeon y un capo xddd soy un campeon y un
                capo xddd soy un campeon y un capo xddd soy un campeon y un capo
                xddd soy un campeon y un capo xddd soy un campeon y un capo xddd
            </Text>
        </Box>
    );
};

export default AboutMe;
