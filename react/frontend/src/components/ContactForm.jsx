import { useToast } from "@chakra-ui/react"
import { Stack, HStack, VStack, Box } from "@chakra-ui/react"
import { Button, Text } from "@chakra-ui/react"
import { ResponsiveIcons } from "./ResponsiveIcons"

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



function ContactForm() {

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

    return (
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
                        <Button
                            w="100%"
                            type="submit"
                            isDisabled={isSubmitting}
                            size={["sm", "md"]}
                            leftIcon={ResponsiveIcons["send"]["icon"]}
                        >
                            <Text fontSize={["0.9em", "0.95em", "1em"]}>
                                {ResponsiveIcons["send"]["name"]}
                            </Text>
                        </Button>
                    </Form>

                )}
            </Formik>

        </Box>

    )
}


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
                <FormLabel htmlFor={props.name} mb={0} fontSize={["0.9em", "0.95em", "1em"]}>{label}</FormLabel>
                <Textarea {...field} {...props} _placeholder={{ opacity: 1 }} size={{ base: "md", lg: "lg" }} />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
            </Stack>
        </FormControl>
    )
}


export { ContactForm }


// reference: formik library for the form: https://formik.org/docs/tutorial
// reference: yup for validation: https://github.com/jquense/yup
// reference: email-service without server: email-js library: https://www.emailjs.com/docs/examples/reactjs/
// reference: send email help video: https://www.youtube.com/watch?v=bMq2riFCF90
