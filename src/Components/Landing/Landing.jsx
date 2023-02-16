import React from 'react'

// Images
import Landingimg from '../../Images/LandingNoBack.png'

// Styles
import styles from './Landing.module.css'

const Landing = () => {
    return ( 
        <div className={styles.Landing_Container}>
            <img src={Landingimg} alt="landing image" />
            <section className={styles.landing_text_sec}>
                <h1>فعلا چیزی برای نمایش وجود نداره اما به زودی یه چیز خفن اینجا قرار میگیره!</h1>
                <h3>می خوای یه کم در مورد اکما بهت بگم؟ اکما یه تیم نوپا اما قدرتمنده! ما تو اکما همه جور آدمی با همه جور ویژگی ای داریم اما چیزی که هممون رو کنار هم نگه داشته یه هدفه. یه هدف که هممون بهش دل بستیم. ما پشت هم موندیم تا به هدفمون برسیم. حالا حالا ها هم قرار نیست پا پس بکشیم. تو شبکه های اجتماعی ما بیشتر راجبمون بخون!</h3>
            </section>
        </div>
     );
}
 
export default Landing;