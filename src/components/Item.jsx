import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({titulo, precio, descripcion}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titulo}</Heading>
      <Text>
        {descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount/>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item