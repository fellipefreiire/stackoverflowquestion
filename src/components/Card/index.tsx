import { Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react";
import { CardIcon } from './icons'

interface ICardProps {
  title: string;
  text: string;
  icon: string;
  active: boolean;
  onClick: () => void, setActive?: Dispatch<SetStateAction<void>>
}

export const Card: React.FC<ICardProps> = ({
  title,
  text,
  icon,
  active,
  onClick
}): JSX.Element => {
  return (
    <>
      <Flex
        maxWidth={357}
        minWidth={357}
        h={140}
        boxShadow='card'
        borderRadius={8}
        bgColor={active ? 'red.900' : 'white.900'}
        gap={4}
        p={6}
        _hover={{ cursor: 'pointer' }}
        onClick={onClick}
      >
        <Icon
          w={42}
          h={42}
          color={active ? 'white.900' : 'red.900'}
          as={CardIcon[icon]}
        />

        <Flex
          direction='column'
        >
          <Heading
            fontSize={20}
            fontWeight='bold'
            color={active ? 'white.900' : 'gray.800'}
          >
            {title}
          </Heading>
          <Text
            fontSize={17}
            color={active ? 'white.900' : 'gray.800'}
            maxWidth={254}
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </>
  )
}