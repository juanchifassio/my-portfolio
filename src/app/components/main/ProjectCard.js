import React from 'react';
import {
    Box,
    Text,
    Stack,
    Center,
    Heading,
    Tag,
    Button,
    Link,
    Flex
} from '@chakra-ui/react';

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
                minH={'400px'}
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
                        <Flex textAlign={'justify'}>
                            <Text fontWeight={100} fontSize={'md'} mb={10}>
                                {project.desc}
                            </Text>
                        </Flex>
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
                            href={project.sourcelink}
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
