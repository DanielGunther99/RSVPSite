import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import SwordSVG from "../resources/sword.svg";
import "../css/Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeClass =
    "inline-block text-[#D3AF5E] rounded-t-lg py-4 px-4 text-4xl font-medium text-center border-transparent border-b-2 active border-[#D3AF5E]";
  const inactiveClass =
    "inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-4xl font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300";
  const daysUntil = getDaysUntil("2024-10-05"); // Format: YYYY-MM-DD

  function getDaysUntil(dateString) {
    const today = new Date();
    const endDate = new Date(dateString);
    const timeDiff = endDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  }

  return (
    <>
      <div className="w-max pt-32 mx-auto pb-12 text-[#D3AF5E]">
        <div id="names" className="text-6xl text-center -mb-32 lg:text-9xl">
          Clara & Daniel
        </div>
        <div class="w-64 h-64 my-8 lg:w-96 lg:h-96 lg:my-0 mx-auto ">
          <img src={SwordSVG} className="-rotate-90 w-fit h-fit" />
        </div>
        <div className="text-4xl text-center -mt-28">Temples Sugar Bush</div>
        <div className="text-4xl text-center">October 5th, 2024</div>
        <div className="text-4xl text-center">
          {daysUntil} Days Until Our Wedding
        </div>
      </div>
      <div class="sm:w-full lg:w-max mx-auto">
        <div class="border-gray-200 dark:border-gray-700 mb-4">
          <ul
            class="flex flex-wrap -mb-px"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class={
                  location.pathname === ROUTES.HOME
                    ? activeClass
                    : inactiveClass
                }
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => navigate(ROUTES.HOME)}
              >
                Home
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class={
                  location.pathname === ROUTES.OURSTORY
                    ? activeClass
                    : inactiveClass
                }
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="true"
                onClick={() => navigate(ROUTES.OURSTORY)}
              >
                Our Story
              </button>
            </li>
            {/* <li class="mr-2" role="presentation">
              <button
                class={
                  location.pathname === ROUTES.PHOTOS
                    ? activeClass
                    : inactiveClass
                }
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
                onClick={() => navigate(ROUTES.PHOTOS)}
              >
                Photos
              </button>
            </li> */}
            <li role="presentation">
              <button
                class={
                  location.pathname === ROUTES.WEDDINGPARTY
                    ? activeClass
                    : inactiveClass
                }
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => navigate(ROUTES.WEDDINGPARTY)}
              >
                Wedding Party
              </button>
            </li>
            <li role="presentation">
              <button
                class={
                  location.pathname === ROUTES.QA ? activeClass : inactiveClass
                }
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => navigate(ROUTES.QA)}
              >
                Q & A
              </button>
            </li>
            <li role="presentation">
              <button
                class={
                  location.pathname === ROUTES.TRAVELANDLODGING
                    ? activeClass
                    : inactiveClass
                }
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => navigate(ROUTES.TRAVELANDLODGING)}
              >
                Travel & Lodging
              </button>
            </li>
            <li role="presentation">
              <button
                class={
                  location.pathname === ROUTES.REGISTRY
                    ? activeClass
                    : inactiveClass
                }
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => navigate(ROUTES.REGISTRY)}
              >
                Registry
              </button>
            </li>
            <li role="presentation">
              <button
                class={
                  location.pathname === ROUTES.RSVP
                    ? activeClass
                    : inactiveClass
                }
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
                onClick={() => navigate(ROUTES.RSVP)}
              >
                RSVP
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
