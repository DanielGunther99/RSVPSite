import Header from "../components/Header";
import Footer from "../components/Footer";
import House from "../resources/House.jpg";
import vacation from "../resources/vacation.jpg";

function Registry() {
  const textStyle =
    "container mx-auto p-4 justify-center w-full lg:w-1/3 lg:my-20";

  return (
    <>
      <Header />
      <div class={textStyle}>
        <img class="h-auto max-w-full my-4 rounded-xl" src={vacation} alt="" />
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Honeymoon Fund
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          Help us pay for our honeymoon!
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          If you wish to leave a cash gift for this fund, there are two options:
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          1. You may leave it on the day of the wedding.
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          2. Send an e-transfer to: daniel.gunther@gmail.com, with a message
          including "Honeymoon Fund".
        </h3>
      </div>
      <div class={textStyle}>
        <img class="h-auto max-w-full rounded-xl my-4" src={House} alt="" />
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Renovation Fund
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          Help us pay for our home renovations!
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          If you wish to leave a cash gift for this fund, there are two options:
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          1. You may leave it on the day of the wedding.
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          2. Send an e-transfer to: daniel.gunther@gmail.com, with a message
          including "Renovation Fund".
        </h3>
      </div>
      <Footer />
    </>
  );
}

export default Registry;
