import { ResponsiveIcons } from "./ResponsiveIcons";

import { Stack } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

// for pdf rendering
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

import packageJson from "../../package.json";
const pdfjsVersion = packageJson.dependencies["pdfjs-dist"].slice(1);

// body text font style
const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2,
};

// card header style
const headerFontStyle = {
    fontSize: { base: "lg", md: "xl", lg: "2xl" },
    mx: "auto",
};

// change this name for the resume filename
const fileName = "Bhavik_Bhagat_Jr_Soft_Dev_2425_Resume_Template.pdf";

function Resume() {
    // get url of storage where pdf is stored
    const [resumeURL, setResumeURL] = useState(`images/${fileName}`);

    // to keep track of the area where pdf to be rendered
    const pdfRef = useRef();
    const [pdfWidth, setPdfWidth] = useState(0);
    useEffect(() => {
        function handleResize() {
            if (pdfRef.current) {
                setPdfWidth(pdfRef.current?.offsetWidth);
            }
        }
        window.addEventListener("resize", handleResize);
    }, []);

    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
    const transform = (slot) => ({
        ...slot,
        Open: () => <></>,
        OpenMenuItem: () => <></>,
        SwitchTheme: () => <></>,
        SwitchThemeMenuItem: () => <></>,
        CurrentPageInput: () => <></>,
        NumberOfPages: () => <></>,
        GoToNextPage: () => <></>,
        GoToNextPageMenuItem: () => <></>,
        GoToPreviousPage: () => <></>,
        GoToPreviousPageMenuItem: () => <></>,
        GoToFirstPage: () => <></>,
        GoToFirstPageMenuItem: () => <></>,
        GoToLastPage: () => <></>,
        GoToLastPageMenuItem: () => <></>,
    });

    return (
        <Stack
            gap={{ base: 1, lg: 2 }}
            w="100%"
            minH="90vh">
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    mx="auto"
                    my={1}
                    py={1}>
                    Resume
                </CardHeader>

                <Divider
                    mx="auto"
                    width="95%"
                />

                <CardBody textAlign="justify">
                    <Text {...textFontStyle}>
                        You can download or print the resume using the toolbar buttons. Please contact me for the latest
                        resume.
                    </Text>
                </CardBody>
            </Card>

            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}
                p={{ base: 0, lg: 4 }}>
                <CardHeader
                    my={0}
                    bg="white"
                    px={{ base: 0, lg: 8 }}>
                    <Toolbar className="pdfToolbar">{renderDefaultToolbar(transform)}</Toolbar>
                </CardHeader>

                <CardBody
                    ref={pdfRef}
                    m={0}
                    p={0}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl={resumeURL}
                            withCredentials={true}
                            plugins={[toolbarPluginInstance]}
                            defaultScale={SpecialZoomLevel.PageWidth}
                        />
                    </Worker>
                </CardBody>
            </Card>
        </Stack>
    );
}

export { Resume };
