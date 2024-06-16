import "../css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import umbrella from "../resources/umbrella.jpg";
import marriage from "../resources/marriage.png";
import car from "../resources/car.png";
import cocktail from "../resources/cocktail.png";
import cake from "../resources/wedding-cake.png";
import buffet from "../resources/buffet.png";
import dance from "../resources/dance.png";
import fireworks from "../resources/fireworks.png";
import gardenphoto from "../resources/gardenphoto.jpg";

function Home() {
  return (
    <>
      <Header />
      <div class="container mx-auto p-4 justify-center w-full lg:w-1/3">
        <img class="rounded-xl" src={gardenphoto} />
        <p id="textbox" class="text-gray-400 text-md">
          @megancameronphotography
        </p>
      </div>
      <div class="container mx-auto p-4 justify-center w-full lg:w-1/3">
        <h3 class="text-center mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Temple's Sugar Bush
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          1700 Ferguson Falls Road, Lanark
        </h3>
        <h3 id="textbox" class="text-center text-xl text-gray-400">
          <a href="https://www.templessugarbush.ca/">
            <button
              id="fullName"
              type="button"
              class="w-1/4 h-full rounded-full border border-gray-300 text-gray-300 m-3"
            >
              More Info
            </button>
          </a>
        </h3>
      </div>
      <div class="flex container mx-auto p-4 pl-3 justify-center w-2/3">
        <div class="grid grid-cols-2 w-full">
          <div class="grid justify-items-end">
            <img class="w-16 justify-center m-4" src={car} alt="" />
          </div>
          <div class="">
            <ol class="relative border-s border-[#D3AF5E] w-1/2">
              <li class="pb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
                <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
                  3:30 pm
                </time>
                <h3 class="flex text-3xl font-semibold text-white pl-5">
                  Guests Arrive
                </h3>
              </li>
            </ol>
          </div>
          <div class="grid justify-items-end">
            <img class="w-16 m-4" src={marriage} alt="" />
          </div>
          <div class="">
            <ol class="relative border-s border-[#D3AF5E] w-1/2">
              <li class="pb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
                <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
                  4:00 pm
                </time>
                <h3 class="text-3xl font-semibold text-white pl-5">
                  Outdoor Ceremony
                </h3>
              </li>
            </ol>
          </div>
          <div class="grid justify-items-end">
            <img class="w-16 justify-center m-4" src={cocktail} alt="" />
          </div>
          <div class="">
            <ol class="relative border-s border-[#D3AF5E] w-1/2">
              <li class="pb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
                <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
                  4:30 pm
                </time>
                <h3 class="text-3xl font-semibold text-white pl-5">
                  Cocktail Hour
                </h3>
              </li>
            </ol>
          </div>
          <div class="grid justify-items-end">
            <img class="w-16 justify-center m-4" src={cake} alt="" />
          </div>
          <div class="">
            <ol class="relative border-s border-[#D3AF5E]">
              <li class="pb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
                <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
                  6:00 pm
                </time>
                <h3 class="text-3xl font-semibold text-white pl-5">
                  Reception
                </h3>
              </li>
            </ol>
          </div>
          <div class="grid justify-items-end">
            <img class="w-16 justify-center m-4" src={dance} alt="" />
          </div>
          <div class="">
            <ol class="relative border-s border-[#D3AF5E] w-1/2">
              <li class="pb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
                <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
                  8:45 pm
                </time>
                <h3 class="text-3xl font-semibold text-white pl-5">
                  First Dance
                </h3>
              </li>
            </ol>
          </div>
          <div class="grid justify-items-end">
            <img class="w-16 justify-center m-4" src={buffet} alt="" />
          </div>
          <div class="">
            <ol class="relative border-s border-[#D3AF5E] w-1/2">
              <li class="pb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
                <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
                  10:00 pm
                </time>
                <h3 class="text-3xl font-semibold text-white pl-5">
                  Late Night Buffet
                </h3>
              </li>
            </ol>
          </div>
          <div class="grid justify-items-end">
            <img class="w-16 justify-center m-4" src={fireworks} alt="" />
          </div>
          <div class="">
            <ol class="relative border-s border-[#D3AF5E] w-1/2">
              <li class="pb-10 ms-4">
                <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
                <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
                  1:00 am
                </time>
                <h3 class="text-3xl font-semibold text-white pl-5">
                  Evenings End
                </h3>
              </li>
            </ol>
          </div>
        </div>
        {/*
        <div class="w-1/4">
          

          

          <img class="w-2/3 justify-center m-4" src={cocktail} alt="" />

          <img class="w-2/3 justify-center m-4" src={cake} alt="" />

          <img class="w-2/3 justify-center m-4" src={dance} alt="" />

          <img class="w-2/3 justify-center m-4" src={buffet} alt="" />

          <img class="w-2/3 justify-center m-4" src={fireworks} alt="" />
        </div>
        <ol class="relative border-s border-[#D3AF5E] w-1/2">
          
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              4:00 pm
            </time>
            <h3 class="text-3xl font-semibold text-white pl-5">
              Outdoor Ceremony
            </h3>
          </li>
          
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-7 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              6:00 pm
            </time>
            <h3 class="text-3xl font-semibold text-white pl-5">Reception</h3>
          </li>

          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              8:45 pm
            </time>
            <h3 class="text-3xl font-semibold text-white pl-5">First Dance</h3>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              10:00 pm
            </time>
            <h3 class="text-3xl font-semibold text-white pl-5">
              Late Night Buffet
            </h3>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              1:00 am
            </time>
            <h3 class="text-3xl font-semibold text-white pl-5">Evenings End</h3>
          </li>
        </ol>
        */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
