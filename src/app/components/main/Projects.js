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
                            title: 'Appointment Scheduler App',
                            desc: 'Appointment Scheduler App where you, as a service provider, can set up your schedule for clients to book appointments. Made with React JS, Typescript, Firebase Database and Authenticacion. Demo soon!',
                            demolink: '#',
                            sourcelink:
                                'https://github.com/juanchifassio/Appointment-Scheduler-App',
                            tag: 'Typescript - React'
                        },
                        {
                            title: 'Crypto News App',
                            desc: 'Crypto App made with React, Chart.js, Chakra UI and Firebase Services (Auth, Realtime DataBase, Hosting).',
                            demolink: 'https://meloncrypto-auth-dev.web.app/',
                            sourcelink:
                                'https://github.com/tomascabralh/melon-crypto/tree/darkmode',
                            tag: 'Javascript - React'
                        },
                        {
                            title: 'Weather App',
                            desc: 'Weather App made with React, OpenWeather API and Geolocation API. Styled with Chakra UI and deployed with Firebase.',
                            demolink: 'https://weatherapp-939a1.web.app/',
                            sourcelink:
                                'https://github.com/juanchifassio/Weather-App',
                            tag: 'Javascript - React'
                        },
                        {
                            title: 'CRM project',
                            desc: 'Customer Relationship Management project, where you can manage your agents and assign them leads. Deployed with Heroku. This is my first Django project.',
                            demolink: 'https://crm-byjuanfassio.herokuapp.com/',
                            sourcelink:
                                'https://github.com/juanchifassio/CRM/tree/master',
                            tag: 'Python - Django'
                        }
                    ]}
                />
            </Grid>
        </Box>
    );
};

export default Projects;
