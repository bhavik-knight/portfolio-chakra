import { getData } from "../data/getData";
import { ExperienceCard } from "./ExperienceCard";

import { nanoid } from "nanoid";
import { Heading, Text } from "@chakra-ui/react";
import { Stack, Divider } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";
import { Spinner, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MdWork } from "react-icons/md";

const textFontStyle = {
    fontSize: { base: "0.9em", md: "0.95em", lg: "1em" },
    textAlign: "justify",
    px: { base: 4, lg: 8 },
    py: 2,
};

const headerFontStyle = {
    fontSize: { base: "lg", md: "xl", lg: "2xl" },
    mx: "auto",
};

function Experiences() {
    // fetch all experiences data from the firebase db
    const [experiences, setExperiences] = useState([]);
    // fetch all volunteer data from the firebase db
    const [volunteer, setVolunteer] = useState([]);

    // to check if all the data is loaded for the page
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData("experiences").then((data) => setExperiences(data));
    }, []);

    useEffect(() => {
        setLoading(true);
        getData("volunteer")
            .then((data) => setVolunteer(data))
            .catch((error) => console.log(error.message));
    }, []);

    useEffect(() => {
        setLoading(experiences.length === 0 && volunteer.length === 0);
    }, [experiences, volunteer]);

    return loading ? (
        <Stack
            gap={{ base: 2, lg: 4 }}
            as={Center}
            minH="95vh"
            w="100%">
            <Spinner size="xl" />
        </Stack>
    ) : (
        <Stack
            gap={{ base: 2, lg: 4 }}
            w="100%"
            minH="90vh">
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    mx="auto"
                    my={2}
                    py={2}>
                    Experiences
                </CardHeader>

                <Divider
                    width="95%"
                    mx="auto"
                    my={2}
                />

                <CardBody>
                    <Stack
                        as={List}
                        spacing={2}
                        {...textFontStyle}>
                        <ListItem>
                            <ListIcon as={MdWork} />I am actively seeking a Software Developer role.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdWork} />I am enthusiastic about contributing to projects that can positively
                            impact the environment and local communities as part of a team, collaborating with experts
                            in the field.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdWork} />I would like to demonstrate my technical and transferable skills
                            gained through my previous work experience, self-learning, and professional training by
                            working on innovative projects.
                        </ListItem>
                    </Stack>
                </CardBody>
            </Card>

            {/* section about work */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    {...headerFontStyle}>
                    Work Experience{experiences.length > 1 && `s`}
                </CardHeader>

                <CardBody
                    px={{ base: 0, lg: 4 }}
                    py={0}>
                    <Accordion allowToggle>
                        {experiences.map((e) => (
                            <ExperienceCard
                                key={nanoid()}
                                job={e}
                            />
                        ))}
                    </Accordion>
                </CardBody>
            </Card>

            {/* section about volunteer work */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    {...headerFontStyle}>
                    Volunteer Experience{volunteer.length > 1 && `s`}
                </CardHeader>

                <CardBody
                    px={{ base: 0, lg: 4 }}
                    py={0}>
                    <Accordion allowToggle>
                        {volunteer.map((v) => (
                            <ExperienceCard
                                key={nanoid()}
                                job={v}
                            />
                        ))}
                    </Accordion>
                </CardBody>
            </Card>
        </Stack>
    );
}

export { Experiences };
