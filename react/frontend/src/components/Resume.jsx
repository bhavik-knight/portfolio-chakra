import { Stack, Box, Center, Container, useColorMode } from "@chakra-ui/react"
import { Spinner, Divider, Spacer } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Heading, Text, chakra } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { useRef, useState, useEffect } from "react"
import { useColorModeValue } from "@chakra-ui/react"

// for pdf rendering
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"

import { toolbarPlugin, ToolbarSlot, TransformToolbarSlot } from "@react-pdf-viewer/toolbar"
import "@react-pdf-viewer/toolbar/lib/styles/index.css"

import packageJson from '../../package.json'
const pdfjsVersion = packageJson.dependencies['pdfjs-dist'].slice(1)


// body text font style
const textFontStyle = {
    fontSize: { base: "0.8em", md: "0.9em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}

// card header style
const headerFontStyle = {
    fontSize: { base: "md", md: "lg", lg: "xl" },
    mx: "auto",
}


function Resume() {

    const pdfRef = useRef()
    const [pdfWidth, setPdfWidth] = useState(0)
    useEffect(() => {
        function handleResize() {
            if (pdfRef.current) {
                setPdfWidth(pdfRef.current?.offsetWidth)
            }
        }
        window.addEventListener("resize", handleResize)
    }, [])

    const toolbarPluginInstance = toolbarPlugin()
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance
    const transform = (slot) => ({
        ...slot,
        Open: () => <></>,
        SwitchTheme: () => <></>,
        CurrentPageInput: () => <></>,
        NumberOfPages: () => <></>,
        GoToNextPage: () => <></>,
        GoToPreviousPage: () => <></>,
        GoToFirstPage: () => <></>,
        GoToLastPage: () => <></>,
    })


    return (
        <Stack p={{ base: 0, lg: 2 }} gap={{ base: 1, lg: 2 }} w="100%" minH="100vh">
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader as={Heading} mx="auto" my={1} py={1}>
                    Resume
                </CardHeader>

                <Divider mx="auto" width="95%" />

                <CardBody textAlign="justify">
                    <Text {...textFontStyle}>
                        You can download or print the resume using the toolbar buttons. Please contact me for the latest resume.
                    </Text>
                </CardBody>
            </Card>

            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }} p={{ base: 0, lg: 4 }}>
                <CardHeader my={0} bg="white" px={{ base: 0, lg: 8 }}>
                    <Toolbar className="pdfToolbar">{renderDefaultToolbar(transform)}</Toolbar>
                </CardHeader>

                <CardBody ref={pdfRef} m={0} p={0}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl="images/BhavikBhagat_Resume_JrSoftwareDev.pdf"
                            plugins={[toolbarPluginInstance]}
                            theme="auto"
                            defaultScale={SpecialZoomLevel.PageWidth}
                        />
                    </Worker>
                </CardBody>
            </Card>
        </Stack >
    )
}


export { Resume }
