import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import SwordSVG from "../resources/sword.svg";
import "../css/Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeClassLg =
    "lg:inline-block lg:text-[#D3AF5E] lg:rounded-full lg:py-4 lg:px-4 lg:text-4xl lg:font-medium lg:text-center lg:border-transparent lg:border-b-2 lg:active lg:border-[#D3AF5E] ";
  const activeClass =
    "inline-block text-[#D3AF5E] rounded-full py-4 px-4 text-3xl font-medium text-center border-[#D3AF5E] border-2 active border-[#D3AF5E] ";
  const inactiveClassLg =
    "lg:inline-block lg:hover:border-[#D3AF5E] lg:rounded-full lg:py-4 lg:px-4 lg:text-4xl lg:font-medium lg:text-center lg:border-transparent lg:border-2 lg:text-gray-400 lg:hover:text-[#D3AF5E] ";
  const inactiveClass =
    "inline-block hover:border-[#D3AF5E] rounded-full py-4 px-4 text-3xl font-medium text-center border-transparent border-2 text-gray-400 hover:text-gray-300 ";
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
        <div class="">
          <img
            src={SwordSVG}
            className="-rotate-90 w-64 h-64 my-8 lg:w-96 lg:h-96 lg:my-0 mx-auto "
          />
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
            class="flex flex-wrap m-5 justify-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class={
                  location.pathname === ROUTES.HOME
                    ? activeClass + activeClassLg
                    : inactiveClass + inactiveClassLg
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
                    ? activeClass + activeClassLg
                    : inactiveClass + inactiveClassLg
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
                    ? activeClass + activeClassLg
                    : inactiveClass + inactiveClassLg
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
                  location.pathname === ROUTES.QA
                    ? activeClass + activeClassLg
                    : inactiveClass + inactiveClassLg
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
                    ? activeClass + activeClassLg
                    : inactiveClass + inactiveClassLg
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
                    ? activeClass + activeClassLg
                    : inactiveClass + inactiveClassLg
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
                    ? activeClass + activeClassLg
                    : inactiveClass + inactiveClassLg
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
