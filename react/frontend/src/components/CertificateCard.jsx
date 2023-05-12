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
                            border="1px solid"
                            p={2} m={2}
                            boxSize="80%"
                            mx="auto"
                            _hover={{ cursor: "pointer", boxShadow: "2px 2px 8px" }}
                            onClick={c.uri !== null ? () => window.open(c.uri, "_blank") : () => "undefined"}
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
                            <CardBody as={Center} my={0}>
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
        </Flex >
    )
}

export { CertificateCard }
