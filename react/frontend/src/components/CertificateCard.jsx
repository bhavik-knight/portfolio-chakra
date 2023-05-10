import { nanoid } from "nanoid"
import { Flex, Container, Center } from "@chakra-ui/react"
import { Image, Text, Textarea, Heading } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"

function CertificateCard({ details }) {
    return (
        <Flex p={4} wrap="wrap">
            {
                details.map(c => {
                    return (
                        <Card
                            key={nanoid()}
                            border="1px solid white"
                            p={2} m={2}
                            boxSize="70%"
                            mx="auto"
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
                            <CardFooter>
                                <Text>
                                    {c.learnings}
                                </Text>
                            </CardFooter>
                        </Card>

                    )
                })

            }
        </Flex>
    )
}

export { CertificateCard }
