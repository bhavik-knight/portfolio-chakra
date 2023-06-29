import { nanoid } from "nanoid"
import { useState, useEffect, useRef, useContext, useLayoutEffect, useCallback, createContext } from "react"
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

    function getWidth() {
        return Math.min(window.screen.availWidth, 744)
    }

    function getHeight(width) {
        let newHeight = window.screen.orientation.angle === 90 ?
            window.screen.availHeight * 0.8 - 12 : width * 0.6
        return Math.max(newHeight, 256)
    }

    // this is a clever way to trigger a component refresh/remount on accordion button click
    // wanted to trigger this to set style of the carousel certficate according to new size
    // even when window is not resized or rotated
    // doing this because wanted to make sure that carousel works as intended in the landscape mobile mode
    // which was one of the toughtest way for me to figure out to render it correctly
    // the idea was to find the parent compoenent width, the cardWidth of the certificate
    // and use the padding value as the difference between both width
    // this idea works perftly and renders the certificate correctly without any glitches
    const [random, setRandom] = useState(Math.random())

    const certRef = useRef()
    const panelRef = useRef()
    const [isMobile] = useMediaQuery("(max-width:992px)")

    // card carrying all details + credentials
    const [cardWidth, setCardWidth] = useState(() => getWidth())
    const [cardHeight, setCardHeight] = useState(() => getHeight(cardWidth))

    // certificate pdf dimentions
    const [certDim, setCertDim] = useState({
        width: { base: cardWidth, lg: cardWidth * 0.8 },
        height: { base: cardHeight, lg: cardWidth * 0.7 }
    })

    // certificate list to be displayed in carousel
    const [certificateList, setCertificateList] = useState([])

    useEffect(() => {
        const handleResize = () => {
            if (certRef.current) {
                let newWidth = Math.min(certRef.current.offsetWidth, 744)
                let newHeight = getHeight(newWidth)
                setCardWidth(newWidth)
                setCardHeight(newHeight)
            } else {
                setCardWidth(getWidth())
                setCardHeight(getHeight(getWidth()))
            }

            setCertDim({
                width: { base: cardWidth, lg: cardWidth * 0.8 },
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

    }, [cardWidth, cardHeight, random])


    return (
        <WindowContext.Provider value={isMobile}>
            <AccordionItem key={nanoid()} py={2}>
                <AccordionButton
                    as={Heading}
                    fontSize={{ base: "sm", md: "md", lg: "xl" }}
                    _hover={{ cursor: "pointer" }}
                    _expanded={{ boxShadow: "0px 2px 8px" }}
                    onClick={() => setRandom(new Date())}
                >
                    <Flex width="100%" direction={{ base: "column", md: "row" }} wrap="wrap">
                        {certs.title}
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel
                    ref={panelRef}
                    px={0} py={{ base: 0, md: 4 }}
                    size={{ base: "md", md: "lg" }}
                >
                    <VStack my={0} gap={0} spacing={0}>
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

                        <Text {...textFontStyle} my={0} py={1} w="100%">{certs.about}</Text>
                    </VStack>

                    <Divider mx="auto" width="95%" />

                    <Box px={{ base: 0, md: (panelRef.current?.offsetWidth - cardWidth) / 2 }}>
                        <RenderCarousel
                            items={certificateList}
                            cardWidth={cardWidth}
                            cardHeight={cardHeight}
                            timeInterval={10}
                        />
                    </Box>

                </AccordionPanel>
            </AccordionItem>

        </WindowContext.Provider >
    )
}


function CreateCertificate({ c, certRef, cardWidth, cardHeight, certDim }) {
    const isMobile = useContext(WindowContext)

    return (
        <Card
            ref={certRef}
            py={{ base: 0, lg: 2 }}
            px={0}
            w={cardWidth}
            h={cardHeight}
            overflow="scroll"
            justify="space-between"
            gap={0} spacing={0}
            onClick={c.uri ? () => window.open(c.uri, "_blank") : undefined}
        >

            <Flex
                display={isMobile ? "none" : "flex"}
                my={0} px={{ base: 1, lg: 4 }} w="100%"
                justify="space-between"
                alignItems="center"
                {...headerFontStyle}
            >

                <Text>{c.certName}</Text>
                {
                    c.uri !== null &&
                    <Button
                        p={2}
                        size="sm"
                        _hover={{ boxShadow: "1px 1px 4px" }}
                        vairant="outline"
                        onClick={() => window.open(c.uri, "_blank")}
                    >
                        Credentials
                    </Button>
                }

            </Flex>

            {!isMobile && <Divider mx="auto" w="95%" my={2} />}

            <CardBody
                as={Flex}
                my={{ base: 0, lg: 1 }} mx="auto"
                p={0}
                width={certDim.width}
                height={certDim.height}
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
                    <Viewer fileUrl={c.certImg} />
                </Worker>
            </CardBody>

            {!isMobile && <Divider mx="auto" w="95%" my={2} />}

            <CardFooter as={Text}
                {...textFontStyle}
                mx="auto"
                w="100%"
                py={0}
                my={0}
                px={4}
                textAlign="justify"
                display={isMobile && "none"}
            >
                {c.learnings}
            </CardFooter>
        </Card>
    )
}


export { CertificateCard }
