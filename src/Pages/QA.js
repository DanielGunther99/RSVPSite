import Header from "../components/Header";
import Footer from "../components/Footer";

function QA() {
  const questionStyle = "container mx-auto p-4 justify-center w-full lg:w-1/3";

  return (
    <>
      <Header />
      <div class={questionStyle}>
        <h3 class="mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          What time should I arrive?
        </h3>
        <p
          id="textbox"
          class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 pl-5"
        >
          The ceremony will begin promptly at 4:00pm. We ask that you arrive at
          the venue 30 minutes early to be seated. Cocktail hour will begin at
          4:30pm.
        </p>
      </div>
      <div class={questionStyle}>
        <h3 class="mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Can I bring a date?
        </h3>
        <p
          id="textbox"
          class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 pl-5"
        >
          Unfortunately, we are unable to accomodate plus-ones. The names on
          your invitation will be addressed accordingly.
        </p>
      </div>
      <div class={questionStyle}>
        <h3 class="mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Is parking available?
        </h3>
        <p
          id="textbox"
          class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 pl-5"
        >
          There will be parking available at the venue.
        </p>
      </div>
      <div class={questionStyle}>
        <h3 class="mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          What is the dress code?
        </h3>
        <p
          id="textbox"
          class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 pl-5"
        >
          The dress code will be Cocktail attire. Cocktail wedding attire is a
          slightly more elevated dress code than semi-formal attire but is less
          formal than formal wedding attire (also known as black-tie optional).
          A suit is preferable for men, while women should opt for a cocktail
          dress or formal jumpsuit.
        </p>
      </div>
      <div class={questionStyle}>
        <h3 class="mb-1 text-5xl font-normal leading-none text-[#D3AF5E]">
          Will transportation be provided?
        </h3>
        <p
          id="textbox"
          class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 pl-5"
        >
          Due to the remote location of the venue, it is difficult to find
          transportation that will accomodate all needs. If there is enough
          interest in scheduled transportation in the RSVP responses, we will be
          looking into scheduling transportation to and from an undecided
          location in the Stittsville/Kanata area.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default QA;
