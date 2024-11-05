import React from 'react'
import Image from 'next/image'
import { Chip } from '@nextui-org/chip'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'

const ProductCard = () => {
  return (
    <div>
        <Card isFooterBlurred isBlurred shadow='lg' className='w-fit'>
            <CardHeader className='justify-end flex flex-row'>
                <Chip variant='flat' color='success' >₦ 500</Chip>
                {/* <Chip color='success' variant='shadow'>Best Seller</Chip> */}
            </CardHeader>
            <CardBody className='overflow-hidden'>
                <Image
                    src='/biscuit.png'
                    alt='biscuit'
                    width={100}
                    height={50}
                    className='mx-auto scale-[1.5] rounded-lg object-cover '    
                />
            </CardBody>
            <CardFooter className='flex flex-row justify-between gap-4'>
                <p>Parle G Biscuit</p>
                <Button className='bg-orange-400 text-white' variant='shadow'>
                    <p>Add to Cart</p>
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default ProductCard