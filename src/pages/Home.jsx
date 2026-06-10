import shopIMage from "../assets/shop.avif"
import styles from "./Home.module.css"
export default function Home(){
    return(
        <>
            <main className={styles.container}> {/* container */}
                <section className={styles.top}> {/* top section */}
                    <img className={styles.topPic} src={shopIMage} alt="Picture of a retail store" />
                </section>

                <section className={styles.bottom}> {/* bottom section */}
                    <h4 className={styles.title}>Who We Are</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem blanditiis maiores possimus alias repudiandae tenetur sequi dolore illum! Similique unde ea architecto iure numquam assumenda tempore natus vel ipsum.</p>
                </section>
            </main>
        </>
    )
}