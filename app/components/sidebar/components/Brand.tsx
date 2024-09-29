// Chakra imports
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HSeparator } from '../../../components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('brand.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Box h='26px' w='175px' my='32px' color={logoColor}>
				<span className='font-bold text-xl'>زیوا</span>
			</Box>
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
