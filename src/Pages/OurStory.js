import Header from "../components/Header";
import Footer from "../components/Footer";
import Engage from "../resources/Engage.jpg";
import House from "../resources/House.jpg";
import LakePlacid from "../resources/LakePlacid.jpg";
import MathClass from "../resources/MathClass.jpg";
import Prom from "../resources/prom.jpg";
import Quebec from "../resources/Quebec.jpg";
import BandTrip from "../resources/BandTrip.jpg";
import TenYear from "../resources/TenYear.jpg";
import Lenny from "../resources/Lenny.jpg";

function OurStory() {
  return (
    <>
      <Header />
      <div class="container mx-auto p-4 justify-center w-full lg:w-1/3 ">
        <ol class="relative border-s border-gray-200 dark:border-[#D3AF5E] pr-4">
          {/* September 2013 - Clara and Dan Meet */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              September 2013
            </time>
            <img
              class="h-auto max-w-full rounded-xl m-4"
              src={MathClass}
              alt=""
            />
            <h3 class="text-3xl font-semibold text-white pl-5">
              Clara and Dan Meet
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              Clara and Daniel met on the first day of high school in math
              class. However, it wasn't all sunshine and rainbows from the
              beginning. Daniel enjoyed teasing Clara; it was a true enemies to
              lovers romance.
            </p>
          </li>

          {/* May 2014 - Started Dating */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              May 2014
            </time>
            <img
              class="h-auto max-w-full rounded-xl m-4"
              src={BandTrip}
              alt=""
            />
            <h3 class="text-3xl font-semibold text-white pl-5">
              Started Dating
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              Our first date was at the South Carleton High School dance. After
              Daniel broke the ice with the Cha-Cha Slide, they danced the night
              away together. Shortly after, they left on their first band trip
              to New York City. The girl hanging off Daniel's arm was a true
              surprise to Chaperone and Father, Brian.
            </p>
          </li>

          {/* August 2014 - First Family Trip Together */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-4 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              August 2014
            </time>
            <img
              class="h-auto max-w-full rounded-xl m-4"
              src={LakePlacid}
              alt=""
            />
            <h3 class="text-3xl font-semibold text-white pl-5">
              First Family Trip Together
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              As avid mountain hikers, Daniel and Brian jumped at the
              opportunity to join Clara's family on their Lake Placid Trip.
            </p>
          </li>

          {/* June 2017 - Attending Prom */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-5 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              June 2017
            </time>
            <img class="h-auto max-w-full rounded-xl m-4" src={Prom} alt="" />
            <h3 class="text-3xl font-semibold text-white pl-5">
              Attending Prom
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              On their final band trip, while in Niagara Falls, Clara Prom-posed
              to Daniel with a sign reading "Will you Fall-ow me to Prom?". Of
              course Daniel agreed and was very excited at the opportunity to
              wear an electric blue suit.
            </p>
          </li>

          {/* February 2018 - First Trip As A Couple */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              February 2018
            </time>
            <img class="h-auto max-w-full rounded-xl m-4" src={Quebec} alt="" />
            <h3 class="text-3xl font-semibold text-white pl-5">
              First Trip As A Couple
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              After stumbling upon a Nintendo Switch Arms tournament in the
              middle of Clara's University campus, Daniel was victorious and won
              2 train tickets to Quebec City. With these tickets Daniel and
              Clara were able to go on their first trip alone for Valentine's
              Day.
            </p>
          </li>

          {/* October 2021 - A New Addition to the Family */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-5 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              October 2021
            </time>
            <img class="h-auto max-w-full rounded-xl m-4" src={Lenny} alt="" />
            <h3 class="text-3xl font-semibold text-white pl-5">
              A New Addition to the Family
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              On October 11th, after a spur of the moment decision, Daniel and
              Clara met their future son, Lenny, and couldn't resist his charm.
            </p>
          </li>

          {/* May 2022 - Bought Our First Home */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-5 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              May 2022
            </time>
            <img class="h-auto max-w-full rounded-xl m-4" src={House} alt="" />
            <h3 class="text-3xl font-semibold text-white pl-5">
              Bought Our First Home
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              Clara and Daniel spent the first few months of 2022 looking for a
              home and eventually found a fixer upper with a beautiful location
              and good windows for Lenny to look out of.
            </p>
          </li>

          {/* September 2023 - We Are Engaged! */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              September 2023
            </time>
            <img class="h-auto max-w-full rounded-xl m-4" src={Engage} alt="" />
            <h3 class="text-3xl font-semibold text-white pl-5">
              We Are Engaged!
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              After a romantic dinner at Cabotto's, the local Italian
              restaurant, Daniel asked Clara to marry him. She said yes!
            </p>
          </li>

          {/* May 2024 - Celebrating 10 Years! */}
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-[#D3AF5E] rounded-full mt-6 -start-1.5 border border-[#D3AF5E]"></div>
            <time class="mb-1 text-6xl font-normal leading-none text-[#D3AF5E]">
              May 2024
            </time>
            <img
              class="h-auto max-w-full rounded-xl m-4"
              src={TenYear}
              alt=""
            />
            <h3 class="text-3xl font-semibold text-white pl-5">
              Celebrating 10 Years!
            </h3>
            <p id="textbox" class="mb-4 text-xl font-normal text-gray-400 pl-5">
              After 10 years of creating amazing memories together, Clara and
              Daniel have picked a date for their wedding. See you all there!
            </p>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default OurStory;
