import React from 'react'

import styles from './style.module.css'
import Logo from '../logo/index.js'
import Navigation from '../navigation/index.js'

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
      <Logo />
      <Navigation activeTab={activeTab} />
  </section>
)

export default NavigationHeader