import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Heading, Text } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { List, ListItem } from "@chakra-ui/react"
import { Flex, Divider } from "@chakra-ui/react"


const textFontStyle = {
    fontSize: { base: "0.8em", md: "0.9em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2
}

const headerFontStyle = {
    fontSize: { base: "md", md: "lg", lg: "xl" },
    mx: "auto",
}

function AboutMe() {
    return (
        <Card as="section" _hover={{ boxshadow: "4px 4px 16px" }}>
            <CardHeader as={Heading} {...headerFontStyle}>
                About me
            </CardHeader>

            <Divider width="95%" mx="auto" my={1} />

            <CardBody as={Flex} wrap="wrap" justifyContent="space-evenly">
                <Stack as={List} spacing={2} {...textFontStyle}>
                    <ListItem>
                        I am a Pythonist, passionate about Artificial Intelligence having a thorough foundation in Mathematics.
                    </ListItem>
                    <ListItem>
                        Becoming a Software Engineer had always been my childhood dream, even though my undergraduate education was in a different field. It was during the second semester of my Bachelor's degree in Mechanical Engineering that I discovered my love for programming and developed a deep passion for Computer Science. This revelation occurred when I took a course on Computer Programming using C-language.
                    </ListItem>
                    <ListItem display="none">
                        After successfully completing my Bachelor's degree in Mechanical Engineering, I began working as an ad-hoc lecturer at the College. However, my passion for Computer Science continued to thrive, and I embarked on a journey to build a career that would align with my long-standing dream.
                    </ListItem>
                    <ListItem>
                        In 2015, I embarked on a transformative journey that led me to the field of Computer Science, marking a significant turning point in my career path as I pursued my lifelong aspirations. I owe a great debt of gratitude to Dr. David J. Malan, an esteemed professor at Harvard, whose fervent instruction of the CS50 course sparked a profound metamorphosis in my life.
                    </ListItem>
                    <ListItem>
                        During my tenure as a technician at Brainwaves System, I dedicated myself to study part time and earning numerous online certifications from renowned institutions such as Harvard, MIT, and Microsoft through platforms like Edx, Coursera, and MIT-OCW. These certifications, focusing on the fundamentals of programming, enabled me to lay a solid groundwork in the field and propel my career aspirations forward.
                    </ListItem>
                    <ListItem>
                        In the future, my goal is to pursue a career in Machine Learning and Artificial Intelligence. I aim to leverage my recent degree, build upon the skills I have acquired over the years, and continuously upskill myself.
                    </ListItem>
                </Stack>
            </CardBody>
        </Card >
    )
}


export { AboutMe }
