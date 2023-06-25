import "./ProjectDetailsModal.css"
import { nanoid } from "nanoid"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
} from "@chakra-ui/react"

import { useDisclosure } from "@chakra-ui/react"
import { AspectRatio, Box, Flex, Stack, Center, Container, Grid } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Button, ButtonGroup, Tooltip } from "@chakra-ui/react"
import { Heading, Text, Divider, Spacer, Img } from "@chakra-ui/react"
import { UnorderedList, List, ListItem } from "@chakra-ui/react"
import { Image, Tag } from "@chakra-ui/react"
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react"
import { useMediaQuery } from "@chakra-ui/react"
import { RenderCarousel } from "./RenderCarousel"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { ExternalLinkIcon, CloseIcon } from "@chakra-ui/icons"


function ProjectDetailsModal({ isOpen, onClose, project }) {
    // get dimension of the component before rendering
    // ref: https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
    const carouselBoxRef = useRef()

    // to check the mobile or not
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    const getCarouselWidth = () => {
        let screenObj = window.screen
        let newWidth = screenObj.orientation.angle === 90 ?
            screenObj.availWidth * 0.9 - 12 :
            screenObj.availWidth
        return Math.min(newWidth, 992)
    }

    // to keep track of the dimensions
    const [cardWidth, setCardWidth] = useState(() => getCarouselWidth())
    const [cardHeight, setCardHeight] = useState(cardWidth * 0.5)

    useEffect(() => {
        // to handle what happens when screen resizes
        const handleResize = () => {
            // if carousel box is mounted (Modal is mounted), then we can track our box's dimensions
            // otherwise we must give the initial dimesions for our box
            if (carouselBoxRef.current) {
                let newWidth = Math.min(carouselBoxRef.current.offsetWidth, 992)
                let newHeight = Math.min(newWidth * 0.5)
                setCardWidth(newWidth)
                setCardHeight(newHeight)
            } else {
                setCardWidth(getCarouselWidth())
                setCardHeight(cardWidth * 0.5)
            }
        }

        // to handle what happen when screen orientation is changed
        // we just want to set dimensions or our box on change of orientation; dimensions of the box are changed
        const handleOrientation = () => { handleResize() }

        // listen for screen resize
        window.addEventListener("resize", handleResize)

        // listen for screen orientation change
        window.addEventListener("orientationchange", handleOrientation)

        // clean up code:
        // 1. remove handler of resize
        // 2. remove handle of screen orientation
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("orientationchange", handleOrientation)
        }

    }, [])

    // to store all project images at once
    const projectImages = []
    // use of callback to improve performance
    useCallback(
        project.projectImgs?.map(url => {
            // console.log(`creating imgs with dim: ${cardWidth}, ${cardHeight}`)
            let data = (
                <Box
                    key={nanoid()}
                    w={`${cardWidth}px`}
                    h={`${cardHeight}px`}
                >
                    <Image
                        src={url}
                        w={cardWidth}
                        h={cardHeight}
                        objectFit="contain"
                        objectPosition="top"
                    />
                </Box>
            )
            projectImages.push(data)
        }),
        [project]
    )

    // some styles for the buttons: source; link; close
    const btnHoverStyle = {
        size: { base: "xs", md: "sm", lg: "md" },
        _hover: {
            color: `${useColorModeValue("blue", "cyan")}`,
            bg: `transparent`,
            border: `1px solid`
        }
    }

    return (
        <Modal onClose={onClose}
            isOpen={isOpen}
            isCentered
            size={{ base: "2xl", md: "4xl", lg: "6xl" }}
            m={0} p={0}
        >
            <ModalOverlay />
            <ModalContent>

                <ModalHeader
                    as={Stack}
                    direction={{ base: "column", lg: "row" }}
                    alignItems="center"
                    justifyContent={{ base: "center", lg: "space-between" }}
                >
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                        {project.title} - Details
                    </Text>
                    <Spacer />
                    <ButtonGroup isAttached variant="outline">
                        {
                            project.source != null &&
                            <Button
                                leftIcon={ResponsiveIcons.skills.icon}
                                onClick={() => window.open(project.source, "_blank")}
                                bg="orange.500" color="white"
                                {...btnHoverStyle}
                            >
                                {ResponsiveIcons.source.name}
                            </Button>
                        }
                        {
                            project.uri !== null &&
                            <Button
                                rightIcon={ResponsiveIcons.link.icon}
                                onClick={() => window.open(project.uri, "_blank")}
                                bg="white" color="blue"
                                {...btnHoverStyle}
                            >
                                {ResponsiveIcons.link.name}
                            </Button>
                        }
                        <Button
                            rightIcon={ResponsiveIcons.close.icon}
                            onClick={onClose}
                            bg="green.600" color="white"
                            {...btnHoverStyle}
                        >
                            {ResponsiveIcons.close.name}
                        </Button>
                    </ButtonGroup>
                </ModalHeader>

                <Divider mx="auto" width="95%" my={0} />

                <ModalBody w="100%" px={{ base: 0, lg: 2 }}>
                    <Box px={8}>
                        <UnorderedList
                            fontSize={{ base: "0.8em", md: "0.9em", lg: "1em" }}
                        >
                            {
                                project.details.map(task => {
                                    return (
                                        <ListItem key={nanoid()}>
                                            {task}
                                        </ListItem>
                                    )
                                })

                            }
                        </UnorderedList>
                    </Box>
                    <Divider mx="auto" my={1} />

                    {/* project images carousel */}
                    <Box ref={carouselBoxRef} mx={0} px={0}>
                        {
                            project.projectImgs !== "" &&
                            <RenderCarousel
                                items={projectImages}
                                cardWidth={cardWidth}
                                cardHeight={cardHeight}
                            />
                        }
                    </Box>
                </ModalBody>

                <Divider mx="auto" width="95%" />

                <ModalFooter
                    mx="auto"
                    as={Flex}
                    justifyContent="space-evenly" spacing={1} flexWrap="wrap"
                >
                    {
                        project.technologies.map(tech => {
                            const techName = `${ResponsiveIcons[tech]?.name || tech}`
                            const techFullName = `${ResponsiveIcons[tech]?.fullName || ResponsiveIcons[tech]?.name || tech}`
                            return (
                                <Tooltip
                                    key={nanoid()}
                                    label={techFullName || techName}
                                    aria-label={techFullName || techName}
                                    hasArrow
                                >
                                    <Stack
                                        className="projectTech"
                                        as={Center}
                                        width={{ base: "32px", md: "64px", lg: "100px" }}
                                        p={2}
                                        mx="auto"
                                    >
                                        {ResponsiveIcons[tech]?.icon}
                                        <Text
                                            className="projectTechName"
                                        >
                                            {ResponsiveIcons[tech]?.name || tech}
                                        </Text>
                                    </Stack>
                                </Tooltip>
                            )
                        })
                    }
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export { ProjectDetailsModal };
