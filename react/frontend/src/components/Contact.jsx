import { useRef, useState, useEffect } from "react"
import { useColorModeValue } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { Divider, Spacer, Text, Heading, Image, Link } from "@chakra-ui/react"
import { Wrap, Stack, HStack, VStack } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Box, Flex, Container, Center } from "@chakra-ui/react"
import { ButtonGroup, Button, IconButton, Icon } from "@chakra-ui/react"

// form related import
import * as yup from "yup"
import { Formik, Form, Field, useFormik } from "formik"
import { FormLabel, FormControl, Input, Textarea, FormErrorMessage } from "@chakra-ui/react"



// some styles for the form
const formDataStyles = {
    p: 2,
    spacing: 0,
    my: 2
}

// social icon button size
const socialBtnStyles = {
    isRound: true,
    _hover: { boxShadow: "1px 1px 4px" }
}

// validation the form input data
const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const formValidationSchema = yup.object({
    name: yup
        .string()
        .max(64, "Name is too long! Max length: 64")
        .required("Please tell me your name."),
    phone: yup
        .string(),
    email: yup
        .string()
        .required("Email is required to send the email!")
        .matches(emailRegEx, "Invalid email! Please check your email."),
    subject: yup
        .string()
        .max(64, "Subject cannot be longer than 64 characters")
        .required("Please enter the subject."),
    message: yup
        .string()
        .required("Please enter your message."),
})

// component
function Contact() {
    // formik with useFormik hook
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
        },

        validationSchema: formValidationSchema
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`errors: ${JSON.stringify(formik.errors)}`)
        console.log(`touched: ${JSON.stringify(formik.touched)}`)
        console.log(`handle submit: ${JSON.stringify(formik.values)}`)
    }

    function createFormField({ label, type, fieldType, required, placeholder }) {
        return (
            <FormControl isRequired={required} isInvalid={formik.touched[label] && formik.errors[label]}>
                <Stack {...formDataStyles}>
                    <FormLabel htmlFor={label}>{label && label[0].toUpperCase() + label.slice(1)}</FormLabel>
                    <Field
                        as={fieldType}
                        id={label}
                        name={label}
                        type={type}
                        value={formik.values[label]}
                        placeholder={placeholder}
                        _placeholder={{ opacity: 1 }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors[label]}</FormErrorMessage>
                </Stack>
            </FormControl >
        )
    }

    function handleEmailClick(e) {
        e.preventDefault()
        window.location = `mailto:bhavik.bhagat.jobs@gmail.com`
    }

    return (
        <Stack p={2} width="100%">
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader>
                    <Heading as={Center}>Contact Me</Heading>
                </CardHeader>

                <Divider mx="auto" width="95%" />

                <CardBody>
                    <Stack
                        direction={{ base: "column", lg: "row" }}
                        p={{ base: 0, lg: 2 }}
                        mx="auto"
                    >
                        <Box
                            w={{ base: "100%", lg: "60%" }}
                            px={{ base: 2, lg: "2em" }}
                            border="1px solid darkgray"
                            borderRadius="1em"
                            as={Center}
                        >
                            <Box h="fit-content" w="100%">

                                <Formik {...formik}>
                                    <Form onSubmit={handleSubmit}>
                                        {/* name */}
                                        {
                                            createFormField({
                                                label: "name",
                                                type: "text",
                                                fieldType: Input,
                                                placeholder: "Jane Doe",
                                                required: true,
                                            })
                                        }

                                        {/* phone */}
                                        {
                                            createFormField({
                                                label: "phone",
                                                type: "text",
                                                fieldType: Input,
                                                placeholder: "(xxx)-xxx-xxxx",
                                                required: false,
                                            })
                                        }

                                        {/* email */}
                                        {
                                            createFormField({
                                                label: "email",
                                                type: "email",
                                                fieldType: Input,
                                                placeholder: "jane.doe@example.com",
                                                required: true,
                                            })
                                        }

                                        {/* subject */}
                                        {
                                            createFormField({
                                                label: "subject",
                                                type: "text",
                                                fieldType: Input,
                                                placeholder: "Review of Portfolio",
                                                required: true,
                                            })
                                        }

                                        {/* message */}
                                        {
                                            createFormField({
                                                label: "message",
                                                type: "text",
                                                fieldType: Textarea,
                                                placeholder: "Comments ...",
                                                required: true,
                                            })
                                        }

                                        {/* submit button */}
                                        <Box {...formDataStyles}>
                                            <Button
                                                w="100%"
                                                type="submit"
                                                variant="outline"
                                                leftIcon={ResponsiveIcons["send"]["icon"]}
                                            >
                                                {ResponsiveIcons["send"]["name"]}
                                            </Button>
                                        </Box>
                                    </Form >
                                </Formik >

                            </Box>
                        </Box>

                        <Box
                            as={Center}
                            w={{ base: "100%", lg: "40%" }}
                            fontSize={{ base: "0.8em", lg: "1em" }}
                            border="1px solid darkgray"
                            borderRadius="1em"
                            p="2em"
                        >
                            <VStack>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    w="100%"
                                    px={2}
                                >
                                    <Text>Bhavik Bhagat</Text>
                                    <Spacer />
                                    <Flex alignItems="center">
                                        <Icon as={ResponsiveIcons["phone"]["icon"]} />&nbsp;
                                        <Text>
                                            (902)-338-0682
                                        </Text>
                                    </Flex>
                                </Stack>

                                <Image src="logos/BhavikQR.png" alt="qr-code" borderRadius="1em" />

                                <Center>
                                    {/* ref: https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea */}
                                    <Link to="#" onClick={handleEmailClick}>
                                        bhavik.bhagat.jobs@gmail.com
                                    </Link>
                                </Center>

                                <ButtonGroup
                                    isAttached
                                    variant="outline"
                                    size={{ base: "md", lg: "lg" }}
                                >
                                    <IconButton
                                        {...socialBtnStyles}
                                        icon={ResponsiveIcons["fb"]["icon"]}
                                        onClick={() => open("https://facebook.com/", "_blank")}
                                    />

                                    <IconButton
                                        {...socialBtnStyles}
                                        icon={ResponsiveIcons["ig"]["icon"]}
                                        onClick={() => open("https://instagram.com/", "_blank")}
                                    />

                                    <IconButton
                                        {...socialBtnStyles}
                                        icon={ResponsiveIcons["tg"]["icon"]}
                                        onClick={() => open("https://telegram.org/", "_blank")}
                                    />

                                    <IconButton
                                        {...socialBtnStyles}
                                        icon={ResponsiveIcons["twtr"]["icon"]}
                                        onClick={() => open("https://twitter.com/", "_blank")}
                                    />
                                </ButtonGroup>
                            </VStack>
                        </Box>
                    </Stack>

                </CardBody>

                <Divider mx="auto" width="95%" />

                <CardFooter>
                    <Text as={Center} mx="auto">
                        Please fill the details to send me an email. Thank you.
                    </Text>
                </CardFooter>
            </Card>
        </Stack >
    )
}


export { Contact }


// reference: formik library for the form: https://formik.org/docs/tutorial
// reference: yup for validation: https://github.com/jquense/yup
// reference: email-service without server: email-js library: https://www.emailjs.com/docs/examples/reactjs/
// reference: send email help video: https://www.youtube.com/watch?v=bMq2riFCF90
