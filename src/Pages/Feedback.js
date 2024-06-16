import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import { useCallback, useState } from "react";

function Feedback() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <div class="w-full">
          <div id="textbox" class="flex justify-center py-10">
            <div class="flex justify-center w-1/2 h-10">
              <label class="text-gray-300 px-5 text-xl" htmlFor="fullName">
                RSVP Submitted!
              </label>
            </div>
          </div>
          <div id="textbox" class="flex justify-center py-5">
            <div class="flex justify-center w-1/2 h-10">
              <button
                id="fullName"
                type="button"
                class="w-1/4 h-full rounded-full border border-gray-300 text-gray-300"
                onClick={() => {
                  navigate(ROUTES.RSVP);
                }}
              >
                Submit Another Guest
              </button>
            </div>
          </div>
          <div id="textbox" class="flex justify-center">
            <div class="flex justify-center w-1/2 h-10">
              <button
                id="fullName"
                type="button"
                class="w-1/4 h-full rounded-full border border-gray-300 text-gray-300"
                onClick={() => navigate(ROUTES.HOME)}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
