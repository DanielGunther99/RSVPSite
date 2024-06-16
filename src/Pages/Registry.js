import Header from "../components/Header";
import Footer from "../components/Footer";

function Registry() {
  const textStyle =
    "container mx-auto p-4 justify-center w-full lg:w-1/3 my-40";

  return (
    <>
      <Header />
      <div class={textStyle}>
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Coming Soon
        </h3>
      </div>
      <Footer />
    </>
  );
}

export default Registry;
