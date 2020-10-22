import React from "react"

import ContactBar from '../components/contactBar'
import NavigationHeader from '../components/navigationHeader/index.js'

const IndexPage = () => (
  <main>
    <ContactBar />
    <NavigationHeader activeTab = "Home" />
  </main>
)

export default IndexPage