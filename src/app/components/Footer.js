import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            px={4}
            h={16}
            fontFamily={'mono'}
            textAlign={'right'}
        >
            <Text py={5}>Juan Martin Fassio © 2021 —</Text>
        </Box>
    );
};

export default Footer;
