import { Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react";
import { Card } from "../Card";
import { cardsContent } from "./cardsContent";

const Component: React.FC = ({ children }): JSX.Element => {
  return (
    <Flex
      h={475}
      w='100%'
      justify='center'
      align='center'
      bgColor='white.800'
    >
      {children}
    </Flex>
  )
}

export const Wrapper: React.FC = (): JSX.Element => {
  const [active, setActive] = useState<String | null>(null);

  const handleActiveCard = (id: string) => {
    active === id ? setActive('') : setActive(id)
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      pt={12}
      pb={12}
      pr={20}
      pl={20}
    >
      <Heading
        as='h1'
        fontSize='50px'
        fontWeight='bold'
        color='gray.900'
        mb={4}
      >
        Heading
      </Heading>
      <Text
        fontSize='17px'
        color='gray.900'
      >
        Text
      </Text>

      <Flex
        wrap='wrap'
        gap={6}
        mt={12}
        justify='center'
      >
        <Card
          title={cardsContent[0].title}
          text={cardsContent[0].text}
          icon={cardsContent[0].icon}
          active={cardsContent[0].id === active}
          onClick={() => handleActiveCard(cardsContent[0].id)}
        />
        <Card
          title={cardsContent[1].title}
          text={cardsContent[1].text}
          icon={cardsContent[1].icon}
          active={cardsContent[1].id === active}
          onClick={() => handleActiveCard(cardsContent[1].id)}
        />
        <Card
          title={cardsContent[2].title}
          text={cardsContent[2].text}
          icon={cardsContent[2].icon}
          active={cardsContent[2].id === active}
          onClick={() => handleActiveCard(cardsContent[2].id)}
        />
        {(active === '0') && (
          <Component>
            Content of card 1
          </Component>
        )}
        {(active === '1') && (
          <Component>
            Content of card 2
          </Component>
        )}
        {(active === '2') && (
          <Component>
            Content of card 3
          </Component>
        )}
        <Card
          title={cardsContent[3].title}
          text={cardsContent[3].text}
          icon={cardsContent[3].icon}
          active={cardsContent[3].id === active}
          onClick={() => handleActiveCard(cardsContent[3].id)}
        />
        <Card
          title={cardsContent[4].title}
          text={cardsContent[4].text}
          icon={cardsContent[4].icon}
          active={cardsContent[4].id === active}
          onClick={() => handleActiveCard(cardsContent[4].id)}
        />
        <Card
          title={cardsContent[5].title}
          text={cardsContent[5].text}
          icon={cardsContent[5].icon}
          active={cardsContent[5].id === active}
          onClick={() => handleActiveCard(cardsContent[5].id)}
        />
        {(active === '3') && (
          <Component>
            Content of card 4
          </Component>
        )}
        {(active === '4') && (
          <Component>
            Content of card 5
          </Component>
        )}
        {(active === '5') && (
          <Component>
            Content of card 6
          </Component>
        )}
        <Card
          title={cardsContent[6].title}
          text={cardsContent[6].text}
          icon={cardsContent[6].icon}
          active={cardsContent[6].id === active}
          onClick={() => handleActiveCard(cardsContent[6].id)}
        />
        <Card
          title={cardsContent[7].title}
          text={cardsContent[7].text}
          icon={cardsContent[7].icon}
          active={cardsContent[7].id === active}
          onClick={() => handleActiveCard(cardsContent[7].id)}
        />
        <Card
          title={cardsContent[8].title}
          text={cardsContent[8].text}
          icon={cardsContent[8].icon}
          active={cardsContent[8].id === active}
          onClick={() => handleActiveCard(cardsContent[8].id)}
        />
        {(active === '6') && (
          <Component>
            Content of card 7
          </Component>
        )}
        {(active === '7') && (
          <Component>
            Content of card 8
          </Component>
        )}
        {(active === '8') && (
          <Component>
            Content of card 9
          </Component>
        )}
        <Card
          title={cardsContent[9].title}
          text={cardsContent[9].text}
          icon={cardsContent[9].icon}
          active={cardsContent[9].id === active}
          onClick={() => handleActiveCard(cardsContent[9].id)}
        />
        <Card
          title={cardsContent[10].title}
          text={cardsContent[10].text}
          icon={cardsContent[10].icon}
          active={cardsContent[10].id === active}
          onClick={() => handleActiveCard(cardsContent[10].id)}
        />
        {(active === '9') && (
          <Component>
            Content of card 10
          </Component>
        )}
        {(active === '10') && (
          <Component>
            Content of card 11
          </Component>
        )}
      </Flex>
    </Flex>
  )
}