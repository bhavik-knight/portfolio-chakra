import { WrapItem, Text, Divider, Stack, Wrap, List, ListItem, Tooltip, Button, ButtonGroup, IconButton, Icon, Flex, useMediaQuery } from "@chakra-ui/react"
import { nanoid } from "nanoid"

function Sidenav({ pages, activePage, selectPage }) {
    return (
        Object.keys(pages).map((page) => {
            return (
                <Tooltip
                    hasArrow
                    placement="right"
                    key={nanoid()}
                    label={page}
                    aria-label={page}
                    textTransform="capitalize"
                >
                    <Button
                        key={nanoid()}
                        name={page}
                        variant="ghost"
                        className="sidenavButton"
                        onClick={(event) => selectPage(event)}
                        isActive={page === activePage}
                        leftIcon={pages[page].icon}
                    >
                        {page}
                    </Button>
                </Tooltip>
            )
        })
    )
}

export { Sidenav }
