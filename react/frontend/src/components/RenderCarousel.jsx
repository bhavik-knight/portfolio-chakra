import { nanoid } from "nanoid"
import { useState, useEffect, useRef } from "react"
import { Box, Container, Center, Wrap, Flex, Stack, HStack, VStack } from "@chakra-ui/react"
import { Image, Text } from "@chakra-ui/react"
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { BiRadioCircle } from "@react-icons/all-files/bi/BiRadioCircle"
import { VscCircleFilled } from "@react-icons/all-files/vsc/VscCircleFilled"


function RenderCarousel({ items, cardWidth, cardHeight, btnType = "numbers" }) {
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

        // auto play at 5 seconds
        timeRef.current = setTimeout(() => handleNextClick(), 5000)

        // cleaning up the timer
        return () => clearTimeout(timeRef.current)
    }, [handleNextClick])


    // pagination buttons
    const paginationButtons = (btnType) => {
        // to get the numbered pagination or dots
        let btns = null

        btnType == "dots" ?
            btns = getButtons(current).map((b, index) => {
                return (
                    <IconButton
                        key={nanoid()}
                        onClick={() => handleBtnClick(b)}
                        variant="ghost"
                        _hover={{ boxShadow: "1px 1px 4px 1px" }}
                        _size={{ base: "sm", lg: "xl" }}
                        icon={current === b ? <VscCircleFilled /> : <BiRadioCircle />}
                    />
                )
            }) :
            btns = getButtons(current).map((b, index) => {
                return (
                    <Button
                        key={nanoid()}
                        onClick={() => handleBtnClick(b)}
                        isActive={b === current}
                        variant="outline"
                        _hover={{ boxShadow: "1px 1px 4px" }}
                        _size={{ base: "xs", lg: "md" }}
                    >
                        {b + 1}
                    </Button>
                )
            })

        return btns
    }

    return (
        <Box mx="auto" p={4}>
            {/* top text */}
            <Center as={Text} size={{ base: "sm", lg: "md" }}>
                {current + 1} of {length}
            </Center>

            {/* moddle carousel card area */}
            <HStack mx="auto">
                {/* left arrow button */}
                <IconButton
                    isRound
                    icon={<ArrowBackIcon />}
                    aria-label="previous-button"
                    onClick={handlePrevClick}
                    _hover={{ boxShadow: "1px 1px 4px" }}
                    _size={{ base: "xs", lg: "md" }}
                    variant="outline"
                />

                {/* carousel part */}
                <Card
                    overflow="hidden"
                    w={cardWidth}
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
                {/* right arrow button */}
                <IconButton
                    isRound
                    icon={<ArrowForwardIcon />}
                    aria-label="next-button"
                    onClick={handleNextClick}
                    _hover={{ boxShadow: "1px 1px 4px" }}
                    _size={{ base: "xs", lg: "md" }}
                    variant="outline"
                />
            </HStack >

            {/* pagination area */}
            <Flex
                mx="auto"
                width="90%"
                direction="row"
                alignItems="center"
            >
                <Button
                    onClick={() => handleBtnClick(0)}
                    size={{ base: "sm", lg: "md" }}
                    width="fit-content"
                >
                    first
                </Button>

                {/* dots or numbered pagination */}
                <Center as={ButtonGroup} mx="auto" my={2} isAttached>
                    {paginationButtons(btnType)}
                </Center >

                <Button
                    onClick={() => handleBtnClick(0)}
                    size={{ base: "sm", lg: "md" }}
                    width="fit-content"
                >
                    last
                </Button>
            </Flex>
        </Box >
    )
}

export { RenderCarousel }

{/*
*/}
