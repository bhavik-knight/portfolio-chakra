import "./ExtracurricularCard.css"
import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { Flex, Stack, Image } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Text, Heading, Spacer, Divider } from "@chakra-ui/react"

function ExtracurricularCard({ ex }) {
    return (
        <AccordionItem py={2}>
            {/* heading for accordion */}
            <AccordionButton
                as={Heading}
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                _hover={{ cursor: "pointer" }}
                _expanded={{ boxShadow: "0px 2px 8px" }}
            >
                <Flex
                    width="100%"
                    direction={{ base: "column", md: "row" }}
                    wrap="wrap"
                >
                    <Text>
                        {ex.name}
                    </Text>
                    <Spacer />
                    <Text px={2}>
                        {ex.year}
                    </Text>

                </Flex>
                <AccordionIcon />
            </AccordionButton>

            {/* body of accordion */}
            <AccordionPanel
                p={4}
                size={{ base: "md", lg: "lg" }}
            >
                <Card
                    _hover={{ cursor: "pointer" }}
                    border="2px solid"
                    onClick={ex.uri !== null ? () => window.open(ex.uri, "_blank") : () => undefined}
                >
                    <CardBody>
                        <Image src={ex.image} className="extracurricularImg" />
                    </CardBody>
                    <CardFooter textAlign="justify">
                        {ex.details}
                    </CardFooter>
                </Card>
            </AccordionPanel>

        </AccordionItem >
    )
}

export { ExtracurricularCard }
