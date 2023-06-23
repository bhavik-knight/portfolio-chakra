import { useRef, useState, useEffect } from "react"
import { useToast } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"
import { Divider, Spacer, Text, Heading, Image, Link } from "@chakra-ui/react"
import { Wrap, Stack, HStack, VStack } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Box, Flex, Container, Center } from "@chakra-ui/react"
import { ButtonGroup, Button, IconButton, Icon } from "@chakra-ui/react"

// form related import
import * as yup from "yup"
import { Formik, Form, Field, useFormik, useField } from "formik"
import { FormLabel, FormControl, Input, Textarea, FormErrorMessage } from "@chakra-ui/react"
import emailjs from "@emailjs/browser"


// configure keys needed for email-js stored in env-variable
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// some styles for the form
const formDataStyles = {
    spacing: 0,
    my: 2,
    py: 2,
}

// box styles for form and QR code
const boxStyles = {
    border: "1px solid darkgray",
    borderRadius: "1em",
    fontSize: { base: "0.8em", md: "0.9em", lg: "1em" },
    p: { base: 2, md: "2em", lg: "2em" },
    as: Center
}

// social icon button size
const socialBtnStyles = {
    isRound: true,
    _hover: { boxShadow: "1px 1px 4px" }
}

// initial fields planned for the form
const formInitialValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
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

// react component
function Contact() {
    const emailToast = useToast()

    async function sendEmail(data) {
        // email-js to send the email using .send method passing only required field in the object instead of whole form
        try {
            // let emailResponse = await fetch("https://httpstat.us/404")
            let emailResponse = await emailjs.send(serviceId, templateId, data, publicKey)
            // console.log(`send email response: ${JSON.stringify(emailResponse)}`)
            if (emailResponse.status != 200) {
                throw new Error(emailResponse.status)
            }
            return emailResponse
        } catch (error) {
            throw error
        }
    }

    function handleSubmit(values, { setSubmitting }) {
        // console.log(`handle-form-submit: ${JSON.stringify(values, null, 2)}`);
        // all data is ready at this point; call the method to send the email; since it is async method, it will return a promise
        (async function () {
            try {
                let result = await sendEmail(values)
                emailToast({
                    title: "The email is sent successfully.",
                    description: `Response: ${result.status}`,
                    status: "success",
                    isClosable: true,
                    duration: 10000
                })
            } catch (error) {
                emailToast({
                    title: "Failed to send the email.",
                    description: `${error}`,
                    status: "error",
                    isClosable: true,
                    duration: 10000
                })
            } finally {
                setSubmitting(false)
            }
        }
        )()
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
                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        flexWrap="wrap"
                        p={{ base: 0, lg: 2 }}
                        mx="auto"
                        justifyContent={{ lg: "space-evenly" }}
                        gap={2}
                    >
                        <Box w={{ base: "100%", lg: "55%" }} {...boxStyles}>
                            <Box w="100%">

                                <Formik
                                    initialValues={formInitialValues}
                                    validationSchema={formValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            {/* name */}
                                            <CreateTextField
                                                type="text"
                                                label="Name"
                                                id="name"
                                                name="name"
                                                required={true}
                                                placeholder="Jane Doe"
                                            />

                                            {/* phone number */}
                                            <CreateTextField
                                                type="text"
                                                label="Phone No."
                                                id="phone"
                                                name="phone"
                                                required={false}
                                                placeholder="(xxx)-xxx-xxxx"
                                            />

                                            {/* email */}
                                            <CreateTextField
                                                type="email"
                                                label="Email ID"
                                                id="email"
                                                name="email"
                                                required={true}
                                                placeholder="jane.doe@example.com"
                                            />

                                            {/* subject */}
                                            <CreateTextField
                                                type="text"
                                                label="Subject"
                                                id="subject"
                                                name="subject"
                                                required={true}
                                                placeholder="Review of Portfolio"
                                            />

                                            {/* message */}
                                            <CreateTextareaField
                                                type="text"
                                                label="Message"
                                                id="message"
                                                name="message"
                                                required={true}
                                                placeholder="Comments ..."
                                            />

                                            {/* submit button */}
                                            <Button type="submit" w="100%" isDisabled={isSubmitting}>SEND</Button>
                                        </Form>

                                    )}
                                </Formik>



                            </Box>
                        </Box>

                        <Box w={{ base: "100%", lg: "40%" }} {...boxStyles}>
                            <VStack spacing={2} w="100%">
                                <Flex
                                    wrap="wrap"
                                    justifyContent="space-between"
                                    boxSize={{ base: "100%", lg: "80%" }}
                                    mx="auto"
                                >
                                    <Text>Bhavik Bhagat</Text>
                                    <Flex alignItems="center">
                                        <Icon as={ResponsiveIcons["phone"]["icon"]} />&nbsp;
                                        <Text>
                                            (902)-338-0682
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Box boxSize={{ base: "100%", lg: "80%" }} mx="auto">
                                    <Image src="logos/BhavikQR.png" alt="qr-code" borderRadius="1em" />
                                </Box>

                                <Center >
                                    {/* ref: https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea */}
                                    <Link to="#" onClick={handleEmailClick}>
                                        bhavik.bhagat.jobs@gmail.com
                                    </Link>
                                </Center>

                                <Center >
                                    <ButtonGroup
                                        isAttached
                                        variant="outline"
                                        size={{ base: "sm", md: "md" }}
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
                                </Center>

                            </VStack>
                        </Box>
                    </Flex>
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




// helper components
function CreateTextField({ label, required, ...props }) {
    const [field, meta] = useField(props)
    return (
        <FormControl isRequired={required} isInvalid={meta.touched && meta.error}>
            <Stack {...formDataStyles}>
                <FormLabel
                    htmlFor={props.name}
                    mb={0}
                >
                    {label}
                </FormLabel>
                <Input
                    {...field}
                    {...props}
                    _placeholder={{ opacity: 1 }}
                />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
            </Stack>
        </FormControl>
    )
}

function CreateTextareaField({ label, required, ...props }) {
    const [field, meta] = useField(props)
    return (
        <FormControl isRequired={required} isInvalid={meta.touched && meta.error}>
            <Stack {...formDataStyles}>
                <FormLabel htmlFor={props.name} mb={0}>{label}</FormLabel>
                <Textarea {...field} {...props} _placeholder={{ opacity: 1 }} size={{ base: "md", lg: "lg" }} />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
            </Stack>
        </FormControl>
    )
}
