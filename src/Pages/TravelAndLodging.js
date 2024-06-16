import Header from "../components/Header";
import Footer from "../components/Footer";

function TravelAndLodging() {
  const hotelStyle = "container mx-auto p-4 justify-center w-full lg:w-1/3";

  return (
    <>
      <Header />
      <div class={hotelStyle}>
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Fairfield Inn & Suites
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          578 Terry Fox Drive, Kanata
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          613-599-7767
        </h3>
      </div>
      <div class={hotelStyle}>
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          The Grand Hotel
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          7 Bridge St, Carleton Place
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          613-492-1566
        </h3>
      </div>
      <div class={hotelStyle}>
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Best Western Plus
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          82 Peter Street, Perth
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          613-326-0082
        </h3>
      </div>
      <div class={hotelStyle}>
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Comfort Inn & Suites
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          355 McNeely Ave, Carleton Place
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          613-216-0079
        </h3>
      </div>
      <Footer />
    </>
  );
}

export default TravelAndLodging;
