import { chakra } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { Stack, Flex, Container, Center } from "@chakra-ui/react"
import { Button, Image, Text, Heading } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


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
                            boxSize="90%"
                            mx="auto"
                            _hover={{ cursor: "pointer", boxShadow: "2px 2px 8px" }}
                        >
                            <CardHeader
                                // bg="blue.200"
                                as={Stack}
                                my={0}
                                direction={{ base: "column", lg: "row" }}
                                alignItems={{ base: "space-between", lg: "center" }}
                                justifyContent="space-evenly"
                            >
                                <Heading fontSize={{ base: "sm", md: "xl" }}>
                                    {c.certName}
                                </Heading>
                                {
                                    c.uri !== null &&
                                    <Button
                                        p={2}
                                        _hover={{ border: "1px solid" }}
                                        boxShadow="1px 1px 4px"
                                        variant="ghost"
                                        onClick={() => window.open(c.uri, "_blank")}
                                    >
                                        Credentials
                                    </Button>
                                }
                            </CardHeader>
                            <CardBody as={Center} my={0}>
                                {/* <chakra.embed
                                    width={{ base: "300px", lg: "1024px" }}
                                    height={{ base: "200px", lg: "768px" }}
                                    src={c.certImg}
                                    type="application/pdf"
                                /> */}
                                {
                                    <Document file={c.certImg}>
                                        <Page pageNumber={1} width={800} height={512}></Page>
                                    </Document>
                                }
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
