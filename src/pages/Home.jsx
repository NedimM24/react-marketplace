import shopIMage from "../assets/shop.jpeg"
export default function Home(){
    return(
        <>
            <main> {/* container */}
                <section> {/* top section */}
                    <img src={shopIMage} alt="Picture of a retail store" />
                </section>

                <section> {/* bottom section */}
                    <p>About Us</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem blanditiis maiores possimus alias repudiandae tenetur sequi dolore illum! Similique unde ea architecto iure numquam assumenda tempore natus vel ipsum.</p>

                </section>
            </main>
        </>
    )
}