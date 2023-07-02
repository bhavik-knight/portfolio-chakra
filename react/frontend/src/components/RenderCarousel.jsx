import { nanoid } from "nanoid"
import { useState, useEffect, useRef } from "react"
import { Box, Container, Center, Wrap, Flex, Stack, HStack, VStack } from "@chakra-ui/react"
import { Image, Text } from "@chakra-ui/react"
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { BiRadioCircle } from "@react-icons/all-files/bi/BiRadioCircle"
import { VscCircleFilled } from "@react-icons/all-files/vsc/VscCircleFilled"
import { useMediaQuery } from "@chakra-ui/react"
import { first } from "lodash"
import { ResponsiveIcons } from "./ResponsiveIcons"


function RenderCarousel({ items, cardWidth, cardHeight, btnType = "numbers", timeInterval = 5 }) {

    const [isMobile] = useMediaQuery("(max-width:992px)")

    // total number of items to be rendered
    const length = items.length

    // keep track of the current item to be rendered
    const [current, setCurrent] = useState(0)

    function handlePrevClick() {
        // wrap it back to the last component to make it circular
        current < 1 && setCurrent(current => current + length)
        setCurrent(current => (current - 1) % length)
    }

    function handleNextClick() {
        setCurrent(current => (current + 1) % length)
    }

    // for the pagination button at the bottom
    function handleBtnClick(index) {
        setCurrent(index)
    }

    // pagination buttons
    function getButtons(active, siblings = 2) {
        const numberOfButtons = siblings * 2 + 1

        // if we have less data then total number of buttons; show less buttons
        if (length < numberOfButtons) {
            return [...Array(length).keys()]
        }

        if (active < siblings) {
            active = siblings
        } else if (active >= length - siblings) {
            active = length - siblings - 1
        }

        // return all buttons
        return [...Array(numberOfButtons).keys()].map(i => i - siblings + active)
    }

    // autoplay of cards
    const timeRef = useRef(0)
    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }

        // auto play at `timeInterval` seconds
        timeRef.current = setTimeout(() => handleNextClick(), timeInterval * 1000)

        // cleaning up the timer
        return () => clearTimeout(timeRef.current)
    }, [handleNextClick])


    // autoplay: play / pause functionality
    const [autoplay, setAutoplay] = useState(true)
    function handleAutoplay() {
        setAutoplay(prevAutoplay => !prevAutoplay)
    }
    useEffect(() => {
        if (!autoplay) {
            if (timeRef.current) {
                clearTimeout(timeRef.current)
            } else {
                handleNextClick
            }
        }
    }, [autoplay])


    // pagination buttons
    const paginationButtons = (btnType) => {
        // to get the numbered pagination or dots
        let btns = null

        btnType === "dots" ?
            btns = getButtons(current).map((b, index) => {
                return (
                    <IconButton
                        className="btnIcon"
                        key={nanoid()}
                        onClick={() => handleBtnClick(b)}
                        variant="ghost"
                        _hover={{ boxShadow: "1px 1px 4px" }}
                        icon={current === b ? <VscCircleFilled /> : <BiRadioCircle />}
                    />
                )
            }) :
            btns = getButtons(current).map((b, index) => {
                return (
                    <Button
                        className="btnIcon"
                        key={nanoid()}
                        p={0}
                        size={{ base: "xs", md: "sm", lg: "md" }}
                        onClick={() => handleBtnClick(b)}
                        isActive={b === current}
                        variant="outline"
                        _hover={{ boxShadow: "1px 1px 4px" }}
                    >
                        {b + 1}
                    </Button>
                )
            })

        return btns
    }

    const firstLastBtnStyles = {
        variant: "outline",
        size: { base: "xs", md: "sm", lg: "md" },
        // w: "fit-content",
        _hover: { boxShadow: "1px 1px 4px" }
    }


    return (
        items.length !== 0 &&
        <Box py={2} px={1} w="100%">
            {/* top text */}
            <HStack
                as={Center}
                justify="space-between" mx="auto"
                w={{ base: "100%", lg: cardWidth }}
            >
                <Button {...firstLastBtnStyles} onClick={() => handleBtnClick(0)}>First</Button>
                <Flex size={{ base: "sm", lg: "md" }} mx={1} gap={1} as={Center}>
                    <IconButton
                        {...firstLastBtnStyles}
                        isRound
                        onClick={handleAutoplay}
                        icon={autoplay ? ResponsiveIcons.pause.icon : ResponsiveIcons.play.icon}
                        aria-label="autoplay button"
                    />
                    {current + 1} of {length}
                </Flex>
                <Button {...firstLastBtnStyles} onClick={() => handleBtnClick(length - 1)}>Last</Button>
            </HStack>

            {/* moddle carousel card area */}
            <Box mx="auto" w="100%">
                {/* carousel part */}
                <Card
                    ref={timeRef}
                    overflow="hidden"
                    className="wrapper-card"
                    h={cardHeight}
                    w={{ base: "100%", lg: cardWidth }}
                    px={0}
                    mx="auto"
                    border="1px solid"
                    borderRadius="1em"
                >
                    <Flex
                        width={cardWidth * length}
                        transition="transform ease-out 1s"
                        transform={`translate(${-(current * cardWidth)}px)`}
                    >
                        {items}
                    </Flex>
                </Card>

            </Box >

            {/* pagination area */}
            <Flex
                mx="auto"
                width={{ base: "100%", lg: cardWidth }}
                direction="row"
                alignItems="center"
            >

                {/* left arrow button */}
                <IconButton
                    isRound
                    icon={<ArrowBackIcon />}
                    aria-label="previous-button"
                    onClick={handlePrevClick}
                    _hover={{ boxShadow: "1px 1px 4px" }}
                    size={{ base: "xs", lg: "md" }}
                    variant="outline"
                />

                {/* dots or numbered pagination */}
                <ButtonGroup
                    as={Center}
                    mx="auto"
                    p={0}
                    isAttached
                    _size={{ base: "xs", md: "sm", lg: "md" }}
                >
                    {paginationButtons(btnType)}
                </ButtonGroup >

                {/* right arrow button */}
                <IconButton
                    isRound
                    icon={<ArrowForwardIcon />}
                    aria-label="next-button"
                    onClick={handleNextClick}
                    _hover={{ boxShadow: "1px 1px 4px" }}
                    size={{ base: "xs", lg: "md" }}
                    variant="outline"
                />

            </Flex>
        </Box >
    )
}

export { RenderCarousel }

{/*
*/}
