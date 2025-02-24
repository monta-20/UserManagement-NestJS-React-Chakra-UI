import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalWrapper';

const Row = ({ id, fullname, email, age, country }) => {
  return (
    <Tr>
      <Td>
        <Avatar name={fullname} />
      </Td>
      <Td>{fullname}</Td>
      <Td>{email}</Td>
      <Td>{age}</Td>
      <Td>{country}</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme={'blue'}>
            <AiFillEdit
             
            />
          </Button>
          <Button colorScheme={'red'}>
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default Row;