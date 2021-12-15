import React from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <Box
            fontFamily={'mono'}
            textAlign={'center'}
            as="section"
            id="projects"
        >
            <Text
                fontSize="3xl"
                borderBottom="1px"
                borderColor="gray.200"
                py={10}
            >
                My Projects
            </Text>
            <Grid
                templateColumns={{
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(1, 1fr)',
                    lg: 'repeat(2, 1fr)'
                }}
                mt={5}
            >
                <ProjectCard
                    projects={[
                        {
                            title: 'Crypto News App',
                            desc: 'Crypto App made with React, Chart.js, News API and CoinGecko Api. Styled with Chakra UI and deployed with Firebase.',
                            demolink: '#',
                            sourcelink: '#',
                            tag: 'Javascript - React'
                        },
                        {
                            title: 'Weather App',
                            desc: 'Weather App made with React, OpenWeather API and Geolocation API. Styled with Chakra UI and deployed with Firebase.',
                            demolink: 'https://weatherapp-939a1.web.app/',
                            sourcelink:
                                'https://github.com/juanchifassio/Weather-App',
                            tag: 'Javascript - React'
                        }
                    ]}
                />
            </Grid>
        </Box>
    );
};

export default Projects;
