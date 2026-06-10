import shopIMage from "../assets/shop.avif"
import styles from "./Home.module.css"
export default function Home(){
    return(
        <>
            <main className={styles.container}> {/* container */}
                <div className={styles.imageContainer}>
                    <section className={styles.top}> {/* top section */}
                        <img className={styles.topPic} src={shopIMage} alt="Picture of a retail store" /> 
                    </section>
                </div>
                

                <section className={styles.bottom}> {/* bottom section */}
                    <h4 className={styles.title}>Who We Are</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem blanditiis maiores possimus alias repudiandae tenetur sequi dolore illum! Similique unde ea architecto iure numquam assumenda tempore natus vel ipsum.</p>
                    <h4 className={styles.title}>What we offer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias commodi doloribus minus aspernatur consectetur aut recusandae temporibus, consequatur distinctio blanditiis quae, in, praesentium quis itaque officiis eum repellendus! Quisquam.</p>
                    <h4 className={styles.title}>Our commitment</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum iste non aspernatur quibusdam labore dolores, nam porro temporibus enim ipsum sapiente debitis, voluptatum tenetur suscipit hic sed perspiciatis architecto.</p>
                    <h4 className={styles.title}>A Smarter Way to Shop Online</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum iste non aspernatur quibusdam labore dolores, nam porro temporibus enim ipsum sapiente debitis, voluptatum tenetur suscipit hic sed perspiciatis architecto.</p>
                </section>
            </main>
        </>
    )
}