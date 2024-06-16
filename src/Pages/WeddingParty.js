import "../css/WeddingParty.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClaraDaniel from "../resources/Together.png";
import Alex from "../resources/Alex.png";
import Natasha from "../resources/Natasha.png";
import Patrick from "../resources/Patrick.png";
import Celeste from "../resources/Celeste.png";
import Kenneth from "../resources/Kenneth.png";
import Kaitlyn from "../resources/Kaitlyn.png";
import Nicolas from "../resources/Nic.png";
import Shea from "../resources/Shea.png";
import Cam from "../resources/Cam.png";
import Emily from "../resources/Emily.png";

const rowStyle = "flex py-8 justify-center text-3xl";
const nameStyle = "w-full lg:w-1/5 text-center font-bold";
const titleStyle = "text-2xl";

function WeddingParty() {
  return (
    <>
      <Header />

      <div id="WeddingParty" class="text-gray-300">
        <div class={rowStyle}>
          <div class="w-full px-10 lg:w-1/5 text-center font-bold">
            <div class="flex justify-center items-center">
              <img src={ClaraDaniel} class="w-full"></img>
            </div>
          </div>
        </div>

        {/* First Row */}
        <div class={rowStyle}>
          <div class={nameStyle}>
            <div>Daniel Gunther</div>
            <div class={titleStyle}>Groom</div>
          </div>
          <div class={nameStyle}>
            <div>Clara Faltas</div>
            <div class={titleStyle}>Bride</div>
          </div>
        </div>

        {/* Second Row */}
        <div class={rowStyle}>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Alex} class="mb-5 w-1/2"></img>
            </div>
            <div>Alex Gunther</div>
            <div class={titleStyle}>Best Man</div>
          </div>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Natasha} class="mb-5 w-1/2"></img>
            </div>
            <div>Natasha</div>
            <div class={titleStyle}>Maid of Honour</div>
          </div>
        </div>

        {/* Third Row */}
        <div class={rowStyle}>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Patrick} class="mb-5 w-1/2"></img>
            </div>
            <div>Patrick Adderley</div>
            <div class={titleStyle}>Groomsman</div>
          </div>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Celeste} class="mb-5 w-1/2"></img>
            </div>
            <div>Celeste Faltas</div>
            <div class={titleStyle}>Maid of Honour</div>
          </div>
        </div>

        {/* Fourth Row */}
        <div class={rowStyle}>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Kenneth} class="mb-5 w-1/2"></img>
            </div>
            <div>Kenneth Leblanc</div>
            <div class={titleStyle}>Groomsman</div>
          </div>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Kaitlyn} class="mb-5 w-1/2"></img>
            </div>
            <div>Kaitlyn Chubb</div>
            <div class={titleStyle}>Bridesmaid</div>
          </div>
        </div>

        {/* Fifth Row */}
        <div class={rowStyle}>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Cam} class="mb-5 w-1/2"></img>
            </div>
            <div>Cameron McFadden</div>
            <div class={titleStyle}>Groomsman</div>
          </div>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Emily} class="mb-5 w-1/2"></img>
            </div>
            <div>Emily Gagnier</div>
            <div class={titleStyle}>Bridesmaid</div>
          </div>
        </div>

        {/* Sixth Row */}
        <div class={rowStyle}>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Nicolas} class="mb-5 w-1/2"></img>
            </div>
            <div>Nicolas Woodcock</div>
            <div class={titleStyle}>Groomsman</div>
          </div>
          <div class={nameStyle}>
            <div class="flex justify-center items-center">
              <img src={Shea} class="mb-5 w-1/2"></img>
            </div>
            <div>Shea Emmerson</div>
            <div class={titleStyle}>Bridesmaid</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WeddingParty;
