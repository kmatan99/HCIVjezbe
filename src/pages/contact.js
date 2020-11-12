import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import SeparatorBar from '../modules/contactSeparator'
import ContactForm from '../modules/contactForm'

const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <SeparatorBar />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage