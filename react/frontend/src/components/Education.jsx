import { getData } from "../data/getData";
import { CertificateCard } from "./CertificateCard";
import { EducationCard } from "./EducationCard";
import { TrainingCard } from "./TrainingCard";
import { ExtracurricularCard } from "./ExtracurricularCard";

import { nanoid } from "nanoid";
import { Heading, Text } from "@chakra-ui/react";
import { Center, Stack, Divider, Spinner } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

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

function Education() {
    const [loading, setLoading] = useState(true);

    const [education, setEducation] = useState([]);
    useEffect(() => {
        setLoading(true);
        getData("education")
            .then((data) => setEducation(data))
            .catch((error) => console.log(error.message));
        // .finally(setLoading(false))
    }, []);

    const [training, setTraining] = useState([]);
    useEffect(() => {
        setLoading(true);
        getData("training")
            .then((data) => setTraining(data))
            .catch((error) => console.log(error.message));
        // .finally(setLoading(false))
    }, []);

    const [extracurriculars, setExtraCurriculars] = useState([]);
    useEffect(() => {
        setLoading(true);
        getData("extracurriculars")
            .then((data) => setExtraCurriculars(data))
            .catch((error) => console.log(error.message));
        // .finally(setLoading(false))
    }, []);

    const [certificates, setCertificates] = useState([]);
    useEffect(() => {
        setLoading(true);
        getData("certificates")
            .then((data) => setCertificates(data))
            .catch((error) => console.log(error.message));
        // .finally(setLoading(false))
    }, []);

    useEffect(() => {
        setLoading(
            education.length === 0 &&
                training.length === 0 &&
                extracurriculars.length === 0 &&
                certificates.length === 0
        );
    }, [education, training, extracurriculars, certificates]);

    const [isMobile] = useMediaQuery("(max-width:992px");
    const getCredentialInfoStyle = (isMobile) => {
        return isMobile ? { bg: "green", color: "white", display: "flex" } : { display: "none" };
    };

    const [credentialInfoStyle, setCredentialInfoStyle] = useState(getCredentialInfoStyle(isMobile));
    useEffect(() => {
        const handleResize = () => {
            setCredentialInfoStyle(getCredentialInfoStyle(isMobile));
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    // console.log(`mobile: ${isMobile}, ${JSON.stringify(credentialInfoStyle)}`)
    return loading ? (
        <Stack
            gap={{ base: 2, lg: 4 }}
            as={Center}
            minH="90vh"
            w="100%">
            <Spinner size="xl" />
        </Stack>
    ) : (
        <Stack
            gap={{ base: 2, lg: 4 }}
            w="100%"
            minH="90vh">
            {/* education */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    mx="auto"
                    my={2}
                    py={2}>
                    Education
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
                            <ListIcon as={FaGraduationCap} />I graduated with a Post Baccalaureate Diploma in Artificial
                            Intelligence from St. Francis Xavier University, where I studied some core subjects of
                            Computer Science and enriched my knowledge and skills to build my career in the Computer
                            Science field. Post-graduation I completed numerous certifications through training programs
                            to explore more domains of Comuter Science, and to begin my career as a Jr Software
                            Developer.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaGraduationCap} />
                            The HOD of the CS department at StFX University suggested that I should have been a graduate
                            program student or at least must give thought to completing a master's program,
                            acknowledging my understanding of the fundamentals and depth of the knowledge to be
                            successful at that level.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaGraduationCap} />
                            My understanding of the fundamentals and practical applications through assignment works or
                            projects have been always highly praised not only by university professors but also by
                            teaching assistants, and teachers at each of the training programs I participated in. This
                            showcase my sinceraity and dedication to complete any program I take either to broden my
                            knowledge or to advance my in my career.
                        </ListItem>
                    </Stack>
                </CardBody>
            </Card>

            {/* Degree */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    {...headerFontStyle}>
                    Degrees
                </CardHeader>
                <CardBody
                    px={{ base: 0, lg: 4 }}
                    py={0}>
                    <Accordion allowToggle>
                        {education.map((e) => (
                            <EducationCard
                                key={nanoid()}
                                edu={e}
                            />
                        ))}
                    </Accordion>
                </CardBody>
            </Card>

            {/* training */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    {...headerFontStyle}>
                    Trainings
                </CardHeader>

                <CardBody
                    px={{ base: 0, lg: 4 }}
                    py={0}>
                    <Accordion allowToggle>
                        {training.map((t) => (
                            <TrainingCard
                                key={nanoid()}
                                t={t}
                            />
                        ))}
                    </Accordion>
                </CardBody>
            </Card>

            {/* certificates */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    {...headerFontStyle}>
                    Certificates
                </CardHeader>

                <Text
                    {...textFontStyle}
                    {...credentialInfoStyle}>
                    Tap on the certificate to check the credentials if available.
                </Text>
                <CardBody
                    px={{ base: 0, lg: 4 }}
                    py={0}>
                    <Accordion allowToggle>
                        {/* one accordion item - one certificate group */}
                        {certificates.map((c) => (
                            <CertificateCard
                                key={nanoid()}
                                certs={c}
                            />
                        ))}
                    </Accordion>
                </CardBody>
            </Card>

            {/* extra curricular */}
            <Card
                as="section"
                _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader
                    as={Heading}
                    {...headerFontStyle}>
                    Extracurricular Activities
                </CardHeader>
                <CardBody
                    px={{ base: 0, lg: 4 }}
                    py={0}>
                    <Accordion allowToggle>
                        {extracurriculars.map((ex) => (
                            <ExtracurricularCard
                                key={nanoid()}
                                ex={ex}
                            />
                        ))}
                    </Accordion>
                </CardBody>
            </Card>
        </Stack>
    );
}

export { Education };
