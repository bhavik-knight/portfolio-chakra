import { nanoid } from "nanoid"
import { useState, useEffect, useRef, useContext, useCallback, createContext } from "react"
import { useMediaQuery } from "@chakra-ui/react"
import { AccordionItem, AccordionPanel, AccordionButton, AccordionIcon } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Stack, HStack, VStack, StackDivider } from "@chakra-ui/react"
import { Heading, Text, Spacer, Divider } from "@chakra-ui/react"
import { Button, IconButton, Icon } from "@chakra-ui/react"
import { Flex, Center, Container, Box } from "@chakra-ui/react"
import { RenderCarousel } from "./RenderCarousel"


// for pdfs
import { Viewer, Worker } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"

// text-font-styles
const textFontStyle = {
    fontSize: { base: "0.8em", md: "0.9em", lg: "0.95em" },
    textAlign: "justify",
    px: { base: 2, lg: 4 },
    py: 1
}

// use for card-headers
const headerFontStyle = {
    fontSize: { base: "xs", md: "sm", lg: "md" },
}


const WindowContext = createContext()
function CertificateCard({ certs }) {

    const certRef = useRef()
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    // card carrying all details + credentials
    const [cardWidth, setCertWidth] = useState(() => getWidth())
    const [cardHeight, setCertHeight] = useState(() => getHeight(getWidth()))

    // certificate pdf dimentions
    const [certDim, setCertDim] = useState({
        width: { base: cardWidth, md: cardWidth * 0.7 },
        height: { base: cardHeight, lg: cardHeight * 0.7 }
    })

    function getWidth() {
        return Math.min(window.screen.availWidth, 980)
    }

    function getHeight(width) {
        let screenObj = window.screen
        let newHeight = screenObj.orientation.angle === 90 ?
            screenObj.availHeight * 0.8 - 12 : width * 0.6
        return Math.max(newHeight, 256)
    }

    useEffect(() => {
        const handleResize = () => {
            if (certRef.current) {
                let newWidth = Math.min(certRef.current?.offsetWidth, 980)
                let newHeight = getHeight(newWidth)
                setCertWidth(newWidth)
                setCertHeight(newHeight)
            } else {
                setCertWidth(getWidth())
                setCertHeight(getHeight(getWidth()))
            }

            setCertDim({
                width: { base: cardWidth, md: cardWidth * 0.7 },
                height: { base: cardHeight, lg: cardHeight * 0.7 }
            })
        }

        const handleOrientation = () => {
            handleResize()
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("orientationchange", handleOrientation)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("orientationchange", handleOrientation)
        }
    }, [cardWidth, cardHeight])

    // get all certs data
    const [certificateList, setCertificateList] = useState([])
    useEffect(() => {
        let details = certs.certificateDetails
        let certificates = details.map(c =>
            <CreateCertificate
                key={nanoid()}
                c={c}
                certRef={certRef}
                cardWidth={cardWidth}
                cardHeight={cardHeight}
                certDim={certDim}
            />
        )

        setCertificateList(certificates)
    }, [certs])


    return (
        <WindowContext.Provider value={isMobile}>
            <AccordionItem key={nanoid()} py={2}>
                <AccordionButton
                    as={Heading}
                    fontSize={{ base: "sm", md: "md", lg: "xl" }}
                    _hover={{ cursor: "pointer" }}
                    _expanded={{ boxShadow: "0px 2px 8px" }}
                >
                    <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap">
                        {certs.title}
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel
                    p={{ base: 0, lg: 4 }}
                    size={{ base: "md", lg: "lg" }}
                >
                    <VStack my={2} gap={0} spacing={0}>
                        <Flex
                            p={0}
                            justifyContent="space-between"
                            wrap="wrap"
                            {...textFontStyle}
                            w="100%"
                        >
                            <Text py={0}>{certs.platform}</Text>
                            <Text py={0}>{certs.institute}</Text>
                        </Flex>

                        <Divider mx="auto" my={1} width="95%" />

                        <Text {...textFontStyle} my={0} py={0} w="100%">{certs.about}</Text>
                    </VStack>

                    <Divider mx="auto" my={1} width="95%" />

                    <RenderCarousel items={certificateList} cardWidth={cardWidth} cardHeight={cardHeight} timeInterval={10} />

                </AccordionPanel>
            </AccordionItem>

        </WindowContext.Provider>
    )
}


function CreateCertificate({ c, certRef, cardWidth, cardHeight, certDim }) {
    const isMobile = useContext(WindowContext)
    return (
        isMobile ?
            <Card
                ref={certRef}
                key={nanoid()}
                p={0}
                w={cardWidth * 1.2}
                h={cardHeight * 1.2}
                onClick={c.uri !== null ? () => window.open(c.uri, "_blank") : undefined}
                cursor={c.uri !== null && "pointer"}
            >
                <Flex
                    as={Flex}
                    p={0} mx="auto" my={0}
                    width={certDim.width}
                    height={certDim.height}
                >
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
                        <Viewer fileUrl={c.certImg} />
                    </Worker>
                </Flex>
            </Card >

            :

            <Card
                ref={certRef}
                key={nanoid()}
                py={{ base: 0, lg: 4 }}
                px={0}
                w={cardWidth * 1.2}
                h={cardHeight * 1.2}
            >

                <Flex
                    w="95%"
                    my={0} mx="auto" px={{ base: 1, lg: 4 }}
                    justify={{ base: "space-evenly", md: "space-between" }}
                    alignItems="center"
                >

                    <Text {...headerFontStyle}>{c.certName}</Text>
                    {
                        c.uri !== null &&
                        <Button
                            p={2}
                            size={{ base: "xs", md: "sm" }}
                            _hover={{ boxShadow: "1px 1px 4px" }}
                            vairant="outline"
                            onClick={() => window.open(c.uri, "_blank")}
                        >
                            Credentials
                        </Button>
                    }
                </Flex>
                <Divider mx="auto" w="95%" my={1} />
                <Flex
                    as={Flex}
                    my={{ base: 0, lg: 1 }} mx="auto"
                    p={0}
                    width={certDim.width}
                    height={certDim.height}
                >
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
                        <Viewer fileUrl={c.certImg} />
                    </Worker>
                </Flex>
                <Divider mx="auto" w="95%" my={1} />
                <Text {...textFontStyle} mx="auto" w="100%" >
                    {c.learnings}
                </Text>
            </Card >
    )
}


export { CertificateCard }
