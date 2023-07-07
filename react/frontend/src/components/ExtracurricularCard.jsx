import "./ExtracurricularCard.css"

import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"
import { Flex, Image } from "@chakra-ui/react"
import { Card, CardBody, CardFooter } from "@chakra-ui/react"
import { Text, Heading, Spacer, Divider } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"


const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}


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
                <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap">
                    <Text>
                        {ex.name}
                    </Text>
                    <Spacer />
                    <Text px={{ base: 0, lg: 2 }}>
                        {ex.year}
                    </Text>

                </Flex>
                <AccordionIcon />
            </AccordionButton>

            {/* body of accordion */}
            <AccordionPanel
                p={{ base: 2, lg: 4 }}
                size={{ base: "md", lg: "lg" }}
            >
                <Card
                    _hover={{ cursor: "pointer" }}
                    p={{ base: 0, lg: 2 }}
                    m={{ base: 0, lg: 2 }}
                    border="1px solid"
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                    onClick={
                        ex.uri !== null ?
                            () => window.open(ex.uri, "_blank") :
                            () => undefined
                    }
                >
                    <CardBody >
                        <Image src={ex.image} className="extracurricularImg" />
                    </CardBody>
                    <CardFooter
                        {...textFontStyle}
                        textAlign="justify">
                        {ex.details}
                    </CardFooter>
                </Card>
            </AccordionPanel>

        </AccordionItem >
    )
}

export { ExtracurricularCard }
