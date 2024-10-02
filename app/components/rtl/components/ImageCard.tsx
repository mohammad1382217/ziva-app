import * as React from 'react';
import Image from "next/image"; 
import Card from '../../card/Card';
import { Flex } from '@chakra-ui/react';
import imageCard from "../../../assests/Frame 1261154258.png"

const ImageCard = () => {
	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Image src={imageCard} alt={"استخر"} fill className="rounded-2xl" />
			</Flex>
		</Card>
	);
} 

export default ImageCard;