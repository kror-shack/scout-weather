import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.scss";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="ContactPage">
      <div>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
      <div>
        <p>
          Welcome to our weather app! We are committed to providing you with
          accurate and up-to-date weather information no matter where you are in
          the world. If you have any questions or feedback, please don't
          hesitate to get in touch with us.
        </p>{" "}
        <p>
          {" "}
          You can contact us through our support email at{" "}
          <a href="mailto:.krorshack.helpdesk@gmail.com">
            krorshack.helpdesk@gmail.com
          </a>
          "
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
