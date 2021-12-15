import React from 'react';
import {
    Box,
    Text,
    Stack,
    Center,
    Heading,
    useColorModeValue,
    Tag,
    Button,
    Link,
    DarkMode
} from '@chakra-ui/react';
import theme from '../../../theme';

const ProjectCard = ({ projects }) => {
    const renderProjects = projects.map((project) => (
        <Center py={12} key={project.title}>
            <Box
                role={'group'}
                p={6}
                maxW={'400px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                height={'400px'}
                fontFamily={'mono'}
            >
                <Tag size={'md'} variant="solid" colorScheme="teal" mr={150}>
                    {project.tag}
                </Tag>
                <Stack pt={10} align={'center'}>
                    <Heading
                        fontSize={'2xl'}
                        fontWeight={500}
                        fontFamily={'mono'}
                    >
                        {project.title}
                    </Heading>
                    <Stack>
                        <Text
                            fontWeight={100}
                            fontSize={'md'}
                            justifyContent={'center'}
                            mb={10}
                        >
                            {project.desc}
                        </Text>
                        <Link
                            href={project.demolink}
                            isExternal
                            style={{ textDecoration: 'none' }}
                        >
                            <Button colorScheme="teal" variant="solid">
                                DEMO
                            </Button>
                        </Link>
                        <Link
                            href={project.demosource}
                            isExternal
                            style={{ textDecoration: 'none' }}
                        >
                            <Button colorScheme="teal" variant="solid">
                                SOURCE CODE
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    ));

    return <>{renderProjects}</>;
};

export default ProjectCard;
