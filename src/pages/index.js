import React from "react"

import ContactBar from '../components/contactBar'
import NavigationHeader from '../components/navigationHeader/index.js'
import Footer from '../components/footer/index.js'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Home" />
    <Footer />
  </main>
)

export default IndexPage