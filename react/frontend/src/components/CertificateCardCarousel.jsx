import { IconButton, Spinner, chakra } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { Wrap, Box, Stack, VStack, HStack, Flex, Spacer, Container, Center } from "@chakra-ui/react"
import { Button, ButtonGroup, Image, Text, Heading } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useState, useRef, useEffect } from "react"
import { useMediaQuery } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { Document, Page } from "react-pdf"
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


function CertificateCardCarousel({ details }) {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [cardWidth, setCardWidth] = useState(1024)
    const [cardHeight, setCardHeight] = useState(512)
    useEffect(() => {
        setCardWidth(isMobile ? 300 : 1024)
        setCardHeight(isMobile ? 128 : 512)
    }, [isMobile])

    // to keep track of the current carousel
    const length = details.length
    const [current, setCurrent] = useState(0)

    function handlePrevClick() {
        current < 1 && setCurrent(current => current + length)
        setCurrent(current => (current - 1) % length)
    }

    function handleNextClick() {
        setCurrent(current => (current + 1) % length)
    }

    function handlePageClick(index) {
        setCurrent(index)
    }

    // to keep track of the number of buttons in the paginations
    const siblings = 2
    const numberOfPaginationButtons = siblings * 2 + 1
    function showButtons(active) {
        if (length < numberOfPaginationButtons) {
            return [...Array(length).keys()]
        }

        if (active < siblings) {
            active = siblings
        } else if (active >= length - siblings) {
            active = length - siblings - 1
        }

        let newArray = [...Array(numberOfPaginationButtons).keys()].map(i => i - siblings + active)
        return newArray
    }

    // autoplay of carousel cards
    const timeRef = useRef(0)
    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }

        // trigger next button click after 4 seconds
        timeRef.current = setTimeout(() => handleNextClick(), 10000)

        return () => clearTimeout(timeRef.current)
    }, [handleNextClick])


    // the certificates data cards preparation
    const card =
        details.map(c => {
            return (
                <Card
                    key={nanoid()}
                    m={2}
                    mx="auto"
                    p={2}
                >
                    <CardHeader
                        as={Stack}
                        mx="auto"
                        my={0}
                        width="95%"
                        direction={{ base: "column", lg: "row" }}
                        alignItems={{ base: "space-between", lg: "center" }}
                        justifyContent="space-between"
                    >
                        <Heading fontSize={{ base: "sm", md: "xl" }}>
                            {c.certName}
                        </Heading>
                        {
                            c.uri !== null &&
                            <>
                                <Button
                                    p={2}
                                    size={{ base: "xs", lg: "md" }}
                                    _hover={{ boxShadow: "1px 1px 4px" }}
                                    variant="outline"
                                    onClick={() => window.open(c.uri, "_blank")}
                                >
                                    Credentials
                                </Button>
                            </>
                        }
                    </CardHeader>

                    <CardBody as={Center} my={0}>
                        <Document
                            file={c.certImg}
                            externalLinkTarget="_blank"
                            loading={
                                <Center width={cardWidth}>
                                    <Spinner size="xl" />
                                </Center>
                            }
                        >
                            <Page
                                pageNumber={1}
                                renderTextLayer
                                renderAnnotationLayer
                                width={cardWidth * 0.9}
                                height={cardHeight}
                            />
                        </Document>
                    </CardBody>

                    {
                        !isMobile &&
                        <CardFooter as={Text} textAlign="justify" mx="auto" width="95%">
                            {c.learnings}
                        </CardFooter>
                    }
                </Card>
            )
        })

    return (
        <Box>
            {/* show current & total number of certificates */}
            <Center as={Text}>{current + 1} of {length}</Center>

            {/* middle-part: left-arrow = card = right-arrow */}
            <HStack justifyContent="center">
                <IconButton
                    aria-label="left-arrow-button"
                    icon={<ArrowLeftIcon />}
                    onClick={handlePrevClick}
                    variant="ghost"
                    size={{ base: "sm", lg: "md" }}
                    _hover={{ boxShadow: "1px 1px 4px" }}
                />

                {/* carousel part */}
                <Wrap
                    overflow="hidden"
                    width={`${cardWidth}px`}
                    height="fit-content"
                    border="1px solid"
                    borderRadius="0.5em"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Center
                        className="certificates-card-container"
                        width={`${cardWidth * length}px`}
                        transition="transform ease-out 1s"
                        transform={`translate(${-(current * cardWidth)})`}
                    >
                        {
                            card.map((_, index) => {
                                return (
                                    <Box key={nanoid()} width={cardWidth}>
                                        {card[current]}
                                    </Box>
                                )
                            })
                        }
                    </Center>
                </Wrap>

                <IconButton
                    aria-label="right-arrow-button"
                    icon={<ArrowRightIcon />}
                    onClick={handleNextClick}
                    variant="ghost"
                    _hover={{ boxShadow: "1px 1px 4px" }}
                    _size={{ base: "xs", lg: "md" }}
                />

            </HStack >

            {/* pagination area */}
            < Center
                as={ButtonGroup}
                my={2}
                spacing={2}
                variant="ghost"
                _size={{ base: "xs", lg: "md" }}
            >
                {
                    showButtons(current).map((b, index) => {
                        return (
                            <Button
                                key={nanoid()}
                                onClick={() => handlePageClick(b)}
                                isActive={b === current}
                                variant="outline"
                                _hover={{ boxShadow: "1px 1px 4px" }}
                                _size={{ base: "xs", lg: "md" }}
                            >
                                {b + 1}
                            </Button>
                        )
                    })
                }
            </Center >
        </Box >
    )
}

export { CertificateCardCarousel }
