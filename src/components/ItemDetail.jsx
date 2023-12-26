import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'


const ItemDetail = ({producto}) => {

    /*const {productoId} = useParams()*/
  return (
    <Card maxW='sm'>
        <CardBody mt='6' spacing='3'>
            <Stack>
            <Heading size='md'>{producto.titulo}</Heading>
            <Text>
                {producto.descripcion}
            </Text>
            <Text color='blue.600' fontSize='2x1'>
                ${producto.precio}
            </Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <ButtonGroup spacing='2'>
                <ItemCount/>
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default ItemDetail