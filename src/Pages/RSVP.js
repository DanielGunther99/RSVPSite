import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import { useCallback, useState, useEffect } from "react";
import app from "../axiosConfig";
import { uniqueCodes } from "../uniqueCodes";
import Footer from "../components/Footer";

function RSVP() {
  const navigate = useNavigate();
  const location = useLocation();
  const [fullNameInput, setFullNameInput] = useState("");
  const [isUserInvited, setIsUserInvited] = useState("");
  const [listOfUsedCodes, setListOfUsedCodes] = useState();

  //Form Elements
  const [uniqueCode, setUniqueCode] = useState(0);
  const [isAttending, setIsAttending] = useState(0);
  const [mealChoice, setMealChoice] = useState(0);
  const [isAllergic, setIsAllergic] = useState(0);
  const [restriction, setRestriction] = useState(0);
  const [isInterestedShuttle, setIsInterestedShuttle] = useState(0);

  useEffect(() => {
    (async () => {
      const url = "rsvps";
      const response = await app.get(url);
      setListOfUsedCodes(response.data.usedCodes);
    })();
  }, []);

  function validateCode() {
    //Check if code is valid
    if (!uniqueCodes.find((value) => value == uniqueCode)) {
      alert("Code not valid.");
      return;
    }
    //Check if code is used
    if (listOfUsedCodes.find((value) => value == uniqueCode)) {
      alert("You have already submit an RSVP.");
      return;
    }
    setIsUserInvited(true);
  }

  function validateAndSubmit(direction) {
    var error = false;
    if (isAttending == 0) {
      error = true;
      alert("Please confirm attendance.");
    }
    if (mealChoice == 0 && isAttending == "yes") {
      error = true;
      alert("Please choose a meal.");
    }
    if (isAllergic == 0 && isAttending == "yes") {
      error = true;
      alert("Please confirm if you have dietary restrictions.");
    }
    if (isInterestedShuttle == 0 && isAttending == "yes") {
      error = true;
      alert("Please confirm if you are interested in a shuttle.");
    }
    if (restriction == 0 && isAllergic == "yes" && isAttending == "yes") {
      error = true;
      alert("Please share your dietary restrictions.");
    }
    if (error == false) {
      submit();
      if (direction == "repeat") {
        navigate(ROUTES.RSVP);
      } else {
        //Add
        navigate(ROUTES.FEEDBACK);
      }
    }
  }

  function submit() {
    const url = "addRSVP";
    const body = {
      name: fullNameInput,
      uniqueCode,
      isAttending: isAttending == "yes",
      mealChoice,
      isInterestedShuttle: isInterestedShuttle == "yes",
      isAllergic: isAllergic == "yes",
      restriction,
    };
    app.post(url, body);
  }

  const handleFullNameChange = useCallback((event) => {
    setFullNameInput(event.target.value);
  });

  const handleCodeInput = useCallback((event) => {
    setUniqueCode(event.target.value);
  });

  const handleIsAttendingChange = useCallback((event) => {
    setIsAttending(event.target.value);
  });

  const handleMealChoiceChange = useCallback((event) => {
    setMealChoice(event.target.value);
  });

  const handleIsInterestedShuttleChange = useCallback((event) => {
    setIsInterestedShuttle(event.target.value);
  });

  const handleIsAllergicChange = useCallback((event) => {
    setIsAllergic(event.target.value);
  });

  const handleRestrictionChange = useCallback((event) => {
    setRestriction(event.target.value);
  });

  return (
    <>
      {!isUserInvited && (
        <div class="flex items-center justify-center h-screen">
          <div class="w-full">
            <div id="textbox" class="flex justify-center py-10">
              <div class="flex justify-center w-full lg:w-1/2 h-10">
                <label
                  class="text-gray-300 px-5 text-xl leading-8"
                  htmlFor="uniqueCode"
                >
                  Unique Code
                </label>
                <input
                  id="uniqueCode"
                  type="text"
                  class="w-1/2 h-full px-6 rounded-full border border-gray-300 text-gray-300 bg-[#0a1f19]"
                  onChange={handleCodeInput}
                ></input>
              </div>
            </div>
            <div id="textbox" class="flex justify-center py-5">
              <div class="flex justify-center w-1/2 h-10">
                <button
                  id="fullName"
                  type="button"
                  class="w-full lg:w-1/4 h-full rounded-full border border-gray-300 text-gray-300"
                  onClick={validateCode}
                >
                  Find Your Invitation
                </button>
              </div>
            </div>
            <div id="textbox" class="flex justify-center">
              <div class="flex justify-center w-1/2 h-10">
                <button
                  id="fullName"
                  type="button"
                  class="w-full lg:w-1/4 h-full rounded-full border border-gray-300 text-gray-300"
                  onClick={() => navigate(ROUTES.HOME)}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isUserInvited && (
        <div class="flex items-center justify-center h-screen">
          <div class="w-full">
            <div id="textbox" class="flex justify-center py-10">
              <div class="flex justify-center w-1/2 h-10">
                <label class="text-gray-300 px-5 text-xl" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  class="w-full lg:w-1/2 h-full px-6 rounded-full border border-gray-300 text-gray-300 bg-[#0a1f19]"
                  onChange={handleFullNameChange}
                ></input>
              </div>
            </div>
            <div id="textbox" class="flex justify-center py-10">
              <div class="flex justify-center w-1/2 h-10">
                <label
                  class="text-gray-300 px-5 text-xl"
                  htmlFor="isAttendingDropdown"
                >
                  Will you be attending our wedding?
                </label>
                <select
                  id="isAttendingDropdown"
                  value={isAttending}
                  onChange={handleIsAttendingChange}
                  class="w-full lg:w-1/2 h-full px-6 rounded-full border border-gray-300 text-gray-300 bg-[#0a1f19]"
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            {isAttending == "yes" && (
              <>
                <div id="textbox" class="flex justify-center py-10">
                  <div class="flex justify-center w-1/2 h-10">
                    <label
                      class="text-gray-300 px-5 text-xl"
                      htmlFor="mealChoiceDropdown"
                    >
                      What's your meal choice?
                    </label>
                    <select
                      id="mealChoiceDropdown"
                      value={mealChoice}
                      onChange={handleMealChoiceChange}
                      class="w-full lg:w-1/2 h-full px-6 rounded-full border border-gray-300 text-gray-300 bg-[#0a1f19]"
                    >
                      <option value="">Select...</option>
                      <option value="steak">
                        Grilled Striploin Steak - topped with fresh chimichurri
                        sauce or herbed
                      </option>
                      <option value="vegetarian">
                        Grilled Vegetable Tower - Marinated, grilled portobello
                        mushroom, zucchini, red onion ad roasted red pepper
                        topped with basil pesto and goat cheese, drizzled with
                        balsamic glaze
                      </option>
                      <option value="kidsmeal">
                        (12 or under only) Chicken Fingers - Made in house,
                        served with kettle chips, fresh veggies & dip
                      </option>
                    </select>
                  </div>
                </div>
                <div id="textbox" class="flex justify-center py-10">
                  <div class="flex justify-center w-1/2 h-10">
                    <label
                      class="text-gray-300 px-5 text-xl"
                      htmlFor="isIntrestedShuttleDropdown"
                    >
                      Would you be interested in a shuttle to/from the venue?
                    </label>
                    <select
                      id="isIntrestedShuttleDropdown"
                      value={isInterestedShuttle}
                      onChange={handleIsInterestedShuttleChange}
                      class="w-full lg:w-1/2 h-full px-6 rounded-full border border-gray-300 text-gray-300 bg-[#0a1f19]"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div id="textbox" class="flex justify-center py-10">
                  <div class="flex justify-center w-1/2 h-10">
                    <label
                      class="text-gray-300 px-5 text-xl"
                      htmlFor="fullName"
                    >
                      Do you have any dietary restrictions or allergies?
                    </label>
                    <select
                      id="dropdownInput"
                      value={isAllergic}
                      onChange={handleIsAllergicChange}
                      class="w-full lg:w-1/2 h-full px-6 rounded-full border border-gray-300 text-gray-300 bg-[#0a1f19]"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                {isAllergic == "yes" && (
                  <div id="textbox" class="flex justify-center py-10">
                    <div class="flex justify-center w-1/2 h-10">
                      <label
                        class="text-gray-300 px-5 text-xl"
                        htmlFor="fullName"
                      >
                        What are your restrictions?
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        class="w-full lg:w-1/2 h-full px-6 rounded-full border border-gray-300 text-gray-300 bg-[#0a1f19]"
                        onChange={handleRestrictionChange}
                      ></input>
                    </div>
                  </div>
                )}
              </>
            )}
            <div id="textbox" class="flex justify-center py-5">
              <div class="flex justify-center w-1/2 h-10">
                <button
                  id="fullName"
                  type="button"
                  class="w-full lg:w-1/4 h-full rounded-full border border-gray-300 text-gray-300"
                  onClick={() => {
                    validateAndSubmit();
                  }}
                >
                  Submit RSVP
                </button>
              </div>
            </div>
            <div id="textbox" class="flex justify-center">
              <div class="flex justify-center w-1/2 h-10">
                <button
                  id="fullName"
                  type="button"
                  class="w-full lg:w-1/4 h-full rounded-full border border-gray-300 text-gray-300"
                  onClick={() => navigate(ROUTES.HOME)}
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default RSVP;
