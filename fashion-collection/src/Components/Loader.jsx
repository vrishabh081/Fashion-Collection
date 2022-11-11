import { Spinner } from '@chakra-ui/react'

function Loader()
{
    return (
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        display="block"
        margin="2vh auto"
      />
    );
}

export default Loader;