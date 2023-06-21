import { FormLabel, FormControl, Input, Textarea } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Box, Flex, Container, Center } from "@chakra-ui/react"
import { Divider, Text, Button, Heading, Image } from "@chakra-ui/react"
import { useRef, useState, useEffect } from "react"
import { Formik, Field, useFormik } from "formik"


// some styles for the form
const formDataStyles = {
    p: 2,
    my: { base: 4, lg: 8 },
    spacing: 0,
}

// component
function Contact() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },

        onSubmit: (values) => {
            console.log(`submit: ${JSON.stringify(values)}`)
        }
    })

    function createFormField({ label, type, fieldType, placeholder }) {
        return (
            <FormControl>
                <Stack {...formDataStyles}>
                    <FormLabel
                        htmlFor={label}
                    >
                        {label[0]?.toUpperCase() + label?.slice(1)}
                    </FormLabel>
                    <Field
                        as={fieldType}
                        id={label}
                        name={label}
                        type={type}
                        onChange={formik.handleChange}
                        value={formik.values.label}
                        placeholder={placeholder}
                        _placeholder={{ opacity: 1 }}
                    />
                </Stack>
            </FormControl>
        )
    }

    return (
        <Stack p={2} gap={2} width="100%">
            <Card as="section" _hover={{ boxShadow: "4px 4px 16px" }}>
                <CardHeader>
                    Contact Me
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
                            // my={{ base: 0, lg: 4 }}
                            border="1px solid gray"
                            borderRadius="1em"
                        >
                            <Formik>
                                <form onSubmit={formik.handleSubmit}>
                                    {/* name */}
                                    {
                                        createFormField({
                                            label: "name",
                                            type: "text",
                                            fieldType: Input,
                                            placeholder: "Jane Doe"
                                        }
                                        )
                                    }

                                    {/* email */}
                                    {
                                        createFormField({
                                            label: "email",
                                            type: "email",
                                            fieldType: Input,
                                            placeholder: "jane.doe@example.com"
                                        }
                                        )
                                    }


                                    {/* subject */}
                                    {
                                        createFormField({
                                            label: "subject",
                                            type: "text",
                                            fieldType: Input,
                                            placeholder: "Review of Portfolio"
                                        }
                                        )
                                    }



                                    {/* message */}
                                    {
                                        createFormField({
                                            label: "message",
                                            fieldType: Textarea,
                                            placeholder: "Comments..."
                                        }
                                        )
                                    }

                                    <Center {...formDataStyles}>
                                        <Button type="submit">SEND</Button>
                                    </Center>

                                </form>
                            </Formik>
                        </Box>
                        <Box
                            as={Center}
                            w={{ base: "100%", lg: "40%" }}
                            // border="1px solid gray"
                            borderRadius="1em"
                            p="2em"
                        >
                            <Image src="logos/BhavikQR.png" alt="qr-code" borderRadius="1em" />
                        </Box>
                    </Stack>

                </CardBody>

                <Divider mx="auto" width="95%" />

                <CardFooter>
                    Please fill the details to send me an email. Thank you.
                </CardFooter>
            </Card>
        </Stack >
    )
}

export { Contact }


// reference: formik library for the form: https://formik.org/docs/tutorial
// reference: Yup for validation: https://github.com/jquense/yup
// reference: email-service without server: email-js library: https://www.emailjs.com/docs/examples/reactjs/
