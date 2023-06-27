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
import { CreateSkillBadge } from "./CreateSkillBadge"


function ProjectDetailsModal({ isOpen, onClose, project }) {
    // get dimension of the component before rendering
    // ref: https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
    const carouselBoxRef = useRef()

    // to check the mobile or not
    const [isMobile] = useMediaQuery("(max-width: 992px)")

    function getCardWidth() {
        let screenObj = window.screen

        // orientation angle 90 means - horizontal / landscape mode
        let newWidth = screenObj.availWidth
        // screenObj.orientation.angle === 90 ? screenObj.availWidth * 0.8 - 12 : screenObj.availWidth
        return Math.min(newWidth, 992)
    }

    function getCardHeight(width) {
        let screenObj = window.screen

        // if phone is held horizontally / landscape mode - width can be more than 2x to height
        // in otherwords aspect ratio can be bigger than 2:1 depending on phone
        // that is why set height accordingly by taking 80% of height available without padding; margin
        // if phone is help vertically / portait mode - height is far more than width
        // in such cases we can take height hakf of the width
        let newHeight =
            // width * 0.5
            screenObj.orientation.angle === 90 ? screenObj.availHeight * 0.8 - 12 : width * 0.6

        return Math.max(newHeight, 200)
    }

    // to keep track of the dimensions
    const [cardWidth, setCardWidth] = useState(() => getCardWidth())
    const [cardHeight, setCardHeight] = useState(() => getCardHeight(getCardWidth()))

    // to store all project images at once
    const [projectImages, setProjectImages] = useState(
        () => getProjectImages({ project, cardWidth, cardHeight })
    )



    useEffect(() => {
        // to handle what happens when screen resizes
        const handleResize = () => {
            // if carousel box is mounted (Modal is mounted), then we can track our box's dimensions
            // otherwise we must give the initial dimesions for our box
            if (carouselBoxRef.current) {
                let newWidth = Math.min(carouselBoxRef.current.offsetWidth, 992)
                let newHeight = getCardHeight(newWidth)
                setCardWidth(newWidth)
                setCardHeight(newHeight)
            } else {
                setCardWidth(getCardWidth())
                setCardHeight(getCardHeight(getCardWidth()))
            }

            setProjectImages(getProjectImages({ project, cardWidth, cardHeight }))
        }

        // to handle what happen when screen orientation is changed
        // we just want to set dimensions or our box on change of orientation; dimensions of the box are changed
        const handleOrientation = () => {
            handleResize()
        }

        // listen for screen resize
        window.addEventListener("resize", handleResize)

        // listen for screen orientation change
        window.addEventListener("orientationchange", handleOrientation)

        // clean up code:
        // 1. remove handler of resize
        // 2. remove handle of screen orientation
        return () => {
            console.log(`before return from effect hook: ${cardWidth}, ${cardHeight}`)
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("orientationchange", handleOrientation)
        }

    }, [cardWidth, cardHeight])

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
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            size={{ base: "md", md: "full", lg: "6xl" }}
        >
            <ModalOverlay />
            <ModalContent
                my={{ base: 2, md: 2, lg: "auto" }}
            >

                <ModalHeader
                    as={Stack}
                    direction={{ base: "column", md: "row" }}
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
                    px={{ base: 0 }}
                >
                    {
                        project.technologies.map(tech => <CreateSkillBadge key={nanoid()} skill={tech} />)
                    }
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}


function getProjectImages({ project, cardWidth, cardHeight }) {
    let dataList = []
    project.projectImgs?.map(url => {
        console.log(`creating imgs with dim: ${cardWidth}, ${cardHeight}`)
        let data = (
            <Box
                key={nanoid()}
                w={cardWidth}
                h={cardHeight}
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
        dataList.push(data)
    })

    return dataList
}

export { ProjectDetailsModal };
