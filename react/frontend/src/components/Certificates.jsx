import { nanoid } from "nanoid"
import { Flex, Stack, Container, Center } from "@chakra-ui/react"
import { Image, Text, Textarea, Heading } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

function CertificateCard({ details }) {
    const certCards = details.map(c =>
        <Stack direction={{ base: "column", lg: "row" }}>
            {/* <Card width="50%">
                <Image src={c.certImg} alt={c.certName} />
            </Card> */}
            <Card
                key={nanoid()}
                border="1px solid white"
                p={2} m={2}
                mx="auto"
                width="80%"
            >
                <CardHeader>
                    <Heading fontSize={{ base: "sm", md: "xl" }}>{c.certName}</Heading>
                </CardHeader>

                <CardBody my={0}>
                    <Image src={c.certImg} alt={c.certName} />
                </CardBody>

                <CardFooter>
                    <Text textAlign="justify">
                        {c.learnings}
                    </Text>
                </CardFooter>
            </Card>
        </Stack >
    )

    console.log(`cert cards = ${certCards}`)

    return (
        <Carousel>
            {certCards}
        </Carousel>
    )
}

export { CertificateCard }
