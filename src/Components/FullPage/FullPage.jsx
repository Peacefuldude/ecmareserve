import React from 'react'

// Stylse
import styles from './FullPage.module.css'
import ecma from '../../Images/ecma.png'

// Components
import Landing from '../Landing/Landing';
import Social from '../Social/Social';

const FullPage = () => {

    return ( 
        <div className={styles.fullpage_container}>
            <main>
                <section className={styles.logo_section}>
                    <img src={ecma} alt="logo" />
                    <h1>ecma</h1>
                </section>
                <section className={styles.Landing_section}>
                    <  Landing  />
                </section>
                <section className={styles.Social_sections}>
                    <  Social  />
                </section>
                </main>
        </div>
     );
}
 
export default FullPage;