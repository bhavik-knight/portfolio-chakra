import { List, ListItem, Button, ButtonGroup, IconButton, Icon, Flex } from "@chakra-ui/react"
import { nanoid } from "nanoid"

function Sidenav({ pages, activePage, selectPage }) {

    return (
        <Flex flexWrap="wrap" flexDirection={{ base: "row", md: "column" }}>
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
                            size={{ base: "sm", md: "lg" }}
                            width={{ base: "fit-content", md: "200px" }}
                        >
                            {page}
                        </Button >
                    )
                })
            }
        </Flex >
    )
}

export { Sidenav }
