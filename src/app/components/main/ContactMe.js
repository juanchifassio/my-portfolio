import {
    Container,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();
    const toast = useToast();

    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_hfcia0j',
                'template_hjdnrxi',
                e.target,
                'user_6oaUZzTwWFE9B35MiwhWh'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        toast({
            title: 'Email recieved!',
            description: 'I will get in touch soon.',
            status: 'success',
            duration: 9000,
            isClosable: true
        });
    }

    return (
        <Box fontFamily={'mono'} textAlign={'center'} as="section" id="contact">
            <Text
                fontSize="3xl"
                borderBottom="1px"
                borderColor="gray.200"
                py={10}
            >
                Contact Me
            </Text>
            <Container maxW="full" mt={10} centerContent overflow="hidden">
                <Box>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box
                                    bg={useColorModeValue(
                                        'gray.300',
                                        'gray.800'
                                    )}
                                    boxShadow={'2xl'}
                                    borderRadius="lg"
                                    w={500}
                                    mb={5}
                                >
                                    <Box m={8}>
                                        <VStack spacing={5}>
                                            <form
                                                className="contact-form"
                                                onSubmit={sendEmail}
                                                ref={form}
                                            >
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup
                                                    borderColor="#E0E1E7"
                                                    type="text"
                                                    className="from-name"
                                                    autoComplete={false}
                                                >
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <BsPerson color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                        placeholder="name"
                                                        _hover={{
                                                            borderColor: 'teal'
                                                        }}
                                                        name="name"
                                                        isRequired
                                                    />
                                                </InputGroup>

                                                <FormLabel>Email</FormLabel>
                                                <InputGroup
                                                    borderColor="#E0E1E7"
                                                    className="from-email"
                                                    autoComplete={false}
                                                >
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <MdOutlineEmail color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        name="email"
                                                        type="text"
                                                        size="md"
                                                        placeholder="mail"
                                                        isRequired
                                                        _hover={{
                                                            borderColor: 'teal'
                                                        }}
                                                    />
                                                </InputGroup>

                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    borderColor="#E0E1E7"
                                                    placeholder="message"
                                                    _hover={{
                                                        borderColor: 'teal'
                                                    }}
                                                    autoComplete={false}
                                                    name="message"
                                                    isRequired
                                                />

                                                <Button
                                                    mt={5}
                                                    colorScheme="teal"
                                                    variant="solid"
                                                    type="submit"
                                                    value="Send"
                                                    className="submit"
                                                >
                                                    SEND MESSAGE
                                                </Button>
                                            </form>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box>
                                    <Box
                                        py={{
                                            base: 5,
                                            sm: 5,
                                            md: 8,
                                            lg: 10
                                        }}
                                    >
                                        <VStack
                                            pl={0}
                                            spacing={3}
                                            alignItems="flex-start"
                                        >
                                            <HStack py={5}>
                                                <MdPhone size="20px" />
                                                <Heading
                                                    size="sm"
                                                    fontFamily={'mono'}
                                                >
                                                    +54-1167889299
                                                </Heading>
                                            </HStack>
                                            <HStack py={5}>
                                                <MdEmail size="20px" />
                                                <Heading
                                                    size="sm"
                                                    fontFamily={'mono'}
                                                >
                                                    juanchifassio@gmail.com
                                                </Heading>
                                            </HStack>
                                            <HStack py={5}>
                                                <MdLocationOn size="20px" />
                                                <Heading
                                                    size="sm"
                                                    fontFamily={'mono'}
                                                >
                                                    Palermo, Buenos Aires
                                                </Heading>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={20}
                                        px={5}
                                        alignItems="flex-start"
                                    >
                                        <IconButton
                                            as="a"
                                            href="https://github.com/juanchifassio"
                                            aria-label="github"
                                            size="lg"
                                            colorScheme="teal"
                                            isRound={true}
                                            target="_blank"
                                            icon={<FaGithub size="28px" />}
                                        />
                                        <IconButton
                                            as="a"
                                            href="https://www.linkedin.com/in/juan-martin-fassio-b012b0154/"
                                            aria-label="linkedin"
                                            size="lg"
                                            colorScheme="teal"
                                            isRound={true}
                                            target="_blank"
                                            icon={<FaLinkedinIn size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactMe;
