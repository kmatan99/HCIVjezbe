import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactSeparator from '../modules/contactSeparator'
import ContactForm from '../modules/contactForm'

const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <ContactSeparator />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage