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

// compute only once
function ProjectImages({ project, w, h }) {
    console.log(`in callback: ${w}, ${h}`)
    const data = project.projectImgs !== "" &&
        useCallback(
            project.projectImgs?.map(imgURL => {
                return (
                    <Box
                        key={nanoid()}
                        w={w} h={h}
                        bgImage={`url(${imgURL})`}
                        bgRepeat="no-repeat"
                        bgPosition="center"
                        bgSize="contain"
                        bgClip="border-box"
                    >
                    </Box>
                )
            }),
            [project]
        )
    return data
}

function ProjectDetailsModal({ isOpen, onClose, project }) {
    // to check the mobile or not
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    const [cardWidth, setCardWidth] = useState(isMobile ? 480 : 992)
    const [cardHeight, setCardHeight] = useState(cardWidth * 0.5)

    // get dimension of the component before rendering
    // ref: https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
    const carouselBoxRef = useRef()
    useEffect(() => {
        const handleResize = () => {
            if (carouselBoxRef.current) {
                let newWidth = Math.min(carouselBoxRef.current.offsetWidth, 992)
                let newHeight = Math.min(newWidth * 0.5, carouselBoxRef.current.offsetHeight)
                setCardWidth(newWidth)
                setCardHeight(newHeight)
            }
        }

        handleResize()

        const resizeOrientationHandler = () => {
            handleResize()
        }

        window.addEventListener("resize", resizeOrientationHandler)
        window.addEventListener("orientationchange", resizeOrientationHandler)
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("orientationchange", handleResize)
        }

    }, [])

    const projectImages = project.projectImgs !== "" && useCallback(
        project.projectImgs?.map(url => {
            console.log(`creating imgs with dim: ${cardWidth}, ${cardHeight}`)
            return (
                <Box
                    key={nanoid()}
                    w={`${cardWidth}px`}
                    h={`${cardHeight}px`}
                // bgImage={`url(${url})`}
                // bgRepeat="no-repeat"
                // bgPosition="center"
                // bgSize="contain"
                // bgClip="border-box"
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
        }),
        [project]
    )

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
                    justifyContent={{ base: "center", lg: "space-between" }}>
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
