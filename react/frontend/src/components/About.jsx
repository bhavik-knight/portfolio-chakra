import { useState, useEffect } from "react"
import { Container, useBoolean, useMediaQuery, withDefaultColorScheme } from "@chakra-ui/react"

function About() {
    const [scroll, setScroll] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const [small, setSmall] = useState(false)
    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [scroll])

    useEffect(() => {
        function handleWidth() {
            setWidth(window.innerWidth)
            setSmall(window.innerWidth < 800)
        }

        window.addEventListener("resize", handleWidth)
        return () => window.removeEventListener("resize", handleWidth)
    }, [])

    return (
        <Container mt={40}>
            {scroll} -
            {JSON.stringify(small)} -
            {width}
        </Container>
    )
}

export { About }
