import { nanoid } from "nanoid"
import { Flex, Container, Center } from "@chakra-ui/react"
import { Image, Text, Textarea, Heading } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"


function Certificate({ c }) {


    return (
        <Card
            key={nanoid()}
            _hover={{ boxShadow: "2px 2px 8px", border: "2px solid", cursor: "pointer" }}
            p={4} m={8}
            mx="auto"
            onClick={() => window.open(c.uri, "_blank")}
        >
            <CardHeader
                as={Center}
                my={0}
            >
                <Heading
                    fontSize={{ base: "sm", md: "xl" }}
                >
                    {c.certName}
                </Heading>

            </CardHeader>
            <CardBody my={0}>
                <Image src={c.certImg} alt={c.certName} />
            </CardBody>
            <CardFooter as={Text} textAlign="justify">
                {c.learnings}
            </CardFooter>
        </Card>
    )
}

function CertificateCard({ details }) {
    return (
        <Flex as={Carousel} p={4} wrap="wrap" autoPlay interval={4000} infiniteLoop>
            {
                details.map(c => <Certificate key={nanoid()} c={c} />)

            }
        </Flex>
    )
}

export { CertificateCard }
