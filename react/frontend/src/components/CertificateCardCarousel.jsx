
import { IconButton, chakra } from "@chakra-ui/react"
import { nanoid } from "nanoid"
import { Wrap, Box, Stack, VStack, HStack, Flex, Spacer, Container, Center } from "@chakra-ui/react"
import { Button, ButtonGroup, Image, Text, Heading } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useState, useRef, useEffect } from "react"
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
        timeRef.current = setTimeout(() => handleNextClick(), 4000)

        return () => clearTimeout(timeRef.current)
    }, [handleNextClick])


    // styles for cards & carousel
    const cardWidth = 1024;
    const cardHeight = 768;


    // the certificates data cards preparation
    const card =
        details.map(c => {
            return (
                <Card
                    key={nanoid()}
                    m={2}
                    mx="auto"
                    p={2}
                    border="1px dashed"
                    _hover={{ cursor: "pointer", boxShadow: "2px 2px 8px" }}
                >
                    <CardHeader
                        as={Stack}
                        my={0}
                        direction={{ base: "column", lg: "row" }}
                        alignItems={{ base: "space-between", lg: "center" }}
                        justifyContent="space-around"
                    >
                        <Heading fontSize={{ base: "sm", md: "xl" }}>
                            {c.certName}
                        </Heading>
                        {
                            c.uri !== null &&
                            <>
                                <Spacer />
                                <Button
                                    p={2}
                                    _hover={{ border: "1px solid" }}
                                    boxShadow="1px 1px 4px"
                                    variant="ghost"
                                    onClick={() => window.open(c.uri, "_blank")}
                                >
                                    Credentials
                                </Button>
                            </>
                        }
                    </CardHeader>
                    <CardBody as={Center} my={0}>
                        {/* <chakra.embed
                            width={{ base: `256px`, lg: `${cardWidth * 0.8}px` }}
                            height={{ base: `64px`, lg: `${512}px` }}
                            src={c.certImg}
                        /> */}

                        {/*
                        <Document file={c.certImg}>
                            <Page pageNumber={1} width={800} height={512}></Page>
                        </Document>
                        */}
                    </CardBody>
                    <CardFooter as={Text} textAlign="justify">
                        {c.learnings}
                    </CardFooter>
                </Card>
            )
        })

    return (
        <Box
            border="1px solid red"
            p={2}
        >
            {/* show current & total number of certificates */}
            <Center as={Text}>{current + 1} of {length}</Center>

            {/* middle-part: left-arrow = card = right-arrow */}
            <HStack justifyContent="center">
                <IconButton
                    aria-label="left-arrow-button"
                    icon={<ArrowLeftIcon />}
                    onClick={handlePrevClick}
                />

                {/* carousel part */}
                <Wrap
                    overflow="hidden"
                    width={`${cardWidth}px`}
                    // height={`${cardHeight}px`}
                    height="fit-content"
                    border="1px solid"
                    borderRadius="0.5em"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Center
                        className="certificates-card-container"
                        width={`${cardWidth * length}px`}
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
                />

            </HStack >

            {/* pagination area */}
            < Center as={ButtonGroup} spacing={2} >
                {
                    showButtons(current).map((b, index) => {
                        return (
                            <Button
                                key={nanoid()}
                                className="dots"
                                onClick={() => handlePageClick(b)}
                                isActive={b === current}
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
