import Palm from "./assets/dryPalm.jpeg"
import palma from "./assets/palma.webp"
import beach from "./assets/nedladdning.jpg"
import pentHouse from "./assets/laPentHouse.jpg"
import sunset from "./assets/laSunset.jpg"
import street from "./assets/laStreet.webp"
import tokyo from "./assets/tokyo.jpg"
import oldTokyo from "./assets/tokyoOld.jpg"
import tokyoStreet from "./assets/tokyoStreet.jpg"
const StartPage = ()=>{
    return(
        <main className="bg-sky-500/10 h-screen">
            <section className="grid-cols-3">
                <div><img src={Palm} alt="Palm" /></div>
                <div><img src={palma} alt="palma"/></div>
                <div>
                    <img src={beach} alt="beach" />
                </div>
                <div>
                    <img src={pentHouse} alt="pentHouse" />
                </div>
                <div>
                    <img src={sunset} alt="sunset" />
                </div>
                <div>
                    <img src={street} alt="LA street" />
                </div>
                <div>
                    <img src={tokyo} alt="tokyo" />
                </div>
                <div>
                    <img src={oldTokyo} alt="old tokyo" />
                </div>
                <div>
                    <img src={tokyoStreet} alt="tokyo street" />
                </div>
            </section>
        </main>
    )
}
export default StartPage