import { Stack, Wrap, List, ListItem, Button, ButtonGroup, IconButton, Icon, Flex } from "@chakra-ui/react"
import { nanoid } from "nanoid"

function Sidenav({ pages, activePage, selectPage }) {

    return (
        // <Stack as={Wrap} direction={{ base: "row", md: "column" }}>
        <Wrap>
            {
                Object.keys(pages).map((page) => {
                    return (
                        <Button
                            key={nanoid()}
                            name={page}
                            variant="solid"
                            colorScheme="blackAlpha"
                            className="sidenavButton"
                            onClick={(event) => selectPage(event)}
                            isActive={page === activePage}
                            leftIcon={pages[page]["icon"]}
                            fontSize={{ base: "sm", md: "lg" }}
                            width={{ base: "fit-content", md: "200px" }}
                        >
                            {page}
                        </Button >
                    )
                })
            }
        </Wrap>
        /* </Stack > */
    )
}

export { Sidenav }
