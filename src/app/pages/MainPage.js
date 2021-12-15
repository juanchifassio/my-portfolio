import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import AboutMe from '../components/main/AboutMe';
import Projects from '../components/main/Projects';
import ContactMe from '../components/main/ContactMe';

const MainPage = () => {
    return (
        <Box bg={useColorModeValue('white', 'gray.700')}>
            <AboutMe />
            <Projects />
            <ContactMe />
        </Box>
    );
};

export default MainPage;
