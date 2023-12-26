import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({titulo, id}) => {
  return (
      <Card maxW='sm' className='card'>
    <CardBody>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{titulo}</Heading>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button>
          <Link to ={`/producto/${id}`}>
            Ver Detalle
            </Link>
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default Item