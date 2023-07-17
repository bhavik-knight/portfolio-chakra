import { ResponsiveIcons } from "./ResponsiveIcons"
import { nanoid } from "nanoid"
import { Button, ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react"
import { useMediaQuery, useColorModeValue } from "@chakra-ui/react"
import { HStack, VStack } from "@chakra-ui/react"


const btnStyles = {
    variant: "ghost",
    _hover: { boxShadow: "1px 1px 8px" },
    p: { base: 0, md: 2, lg: 4 }
}


function Sidenav({ pages, activePage, selectPage, sidenavHeader, isLandscape }) {

    // to check the screen is large or not to display icons on sidenav buttons
    const [isMobile] = useMediaQuery("(max-width: 992px)")
    const topPosition = sidenavHeader ? 0 : { base: "50px", lg: "5vh" }
    const bgColor = sidenavHeader ? "transparent" : { base: useColorModeValue("gray.100", "gray.800"), lg: "transparent" }
    const alignStyle = sidenavHeader ? "center" : "flex-start"

    return (
        <ButtonGroup
            as={isMobile ? HStack : VStack}
            bg={bgColor}
            isAttached={isMobile}
            px={{ base: 0, lg: 2 }}
            py={{ base: 0, lg: 4 }}
            mx={sidenavHeader && "auto"}
            spacing={0}
            gap={0}
            w={sidenavHeader ? "fit-content" : { base: "100vw", lg: "fit-content" }}
            h={sidenavHeader ? "50px" : "fit-content"}
            position="sticky"
            justify={{ base: "center", lg: "flex-start" }}
            alignItems={alignStyle}
            top={topPosition}
            zIndex={sidenavHeader ? 999 : 5}
            sx={{ WebkitTransform: `translate3d(0, 0, 0)` }}
        >
            {
                Object.keys(pages).map((page) => (
                    <CreateButton
                        key={nanoid()}
                        activePage={activePage}
                        selectPage={selectPage}
                        page={page}
                        isMobile={isMobile}
                    />
                ))
            }
        </ButtonGroup >
    )
}


function CreateButton({ isMobile, page, activePage, selectPage, isLandscape }) {
    return (
        <Tooltip
            hasArrow
            placement="auto"
            label={page}
            aria-label={page}
            textTransform="capitalize"
        >
            {
                isMobile ?
                    <IconButton
                        {...btnStyles}
                        className="btnIcon"
                        aria-label={page}
                        onClick={event => selectPage(event)}
                        isActive={page === activePage}
                        name={page}
                        icon={ResponsiveIcons[page]?.icon}
                    />
                    :
                    <Button
                        {...btnStyles}
                        borderRadius="1em"
                        aria-label={page}
                        onClick={(event) => selectPage(event)}
                        isActive={page === activePage}
                        name={page}
                        leftIcon={ResponsiveIcons[page]?.icon}
                        justifyContent="flex-start"
                        textTransform="capitalize"
                        w="100%"
                    >
                        {page}
                    </Button>
            }
        </Tooltip>
    )
}


export { Sidenav }
