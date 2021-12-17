import React from 'react';
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Link,
    Heading
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import CV from '../../documents/Resume_Fassio.pdf'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location
        });
    };

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Heading size="md" fontFamily={'mono'}>
                        <Link
                            onClick={handleClick}
                            href="#me"
                            style={{ textDecoration: 'none' }}
                        >
                            Juan Martin Fassio
                        </Link>
                    </Heading>

                    <Flex alignItems={'center'}>
                        <Stack
                            direction={'row'}
                            spacing={7}
                            fontFamily={'mono'}
                            fontSize={'lg'}
                        >
                            <Box>
                                <Link
                                    onClick={handleClick}
                                    href="#projects"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Projects
                                </Link>
                            </Box>
                            <Box>
                                <Link
                                    onClick={handleClick}
                                    href="#contact"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Contact
                                </Link>
                            </Box>
                        </Stack>
                        <Link
                            href={CV}
                            isExternal
                            style={{ textDecoration: 'none' }}
                            ml={10}
                        >
                            <Button
                                colorScheme="teal"
                                variant="solid"
                                fontFamily={'mono'}
                                fontSize={'lg'}
                                fontWeight={10}
                            >
                                Resume
                            </Button>
                        </Link>
                        <Button onClick={toggleColorMode} ml={5}>
                            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Navbar;
