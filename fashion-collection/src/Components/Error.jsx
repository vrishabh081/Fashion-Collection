import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

function Error()
{
    return(
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>OOP's</AlertTitle>
            <AlertDescription>Something is wrong.</AlertDescription>
        </Alert>
    )
}

export default Error;