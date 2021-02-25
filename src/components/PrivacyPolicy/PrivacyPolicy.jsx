/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";

const PrivacyPolicy = (props) => {
  return (
    <>
      <Grid>
        <Grid.Row className="p-5" style={{ background: "#F5F5F5" }}>
          <h4>PRIVACY POLICY</h4>
        </Grid.Row>
        <Grid.Row className="pt-4 pb-4 pl-5">
          <p className="privacy">Privacy Policy</p>
        </Grid.Row>
        <Grid.Row className="pb-2 pl-5 pr-4">
          <p className="privacyPoints" style={{ width: "100%" }}>
            Privacy :
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            Your Privacy is secured with us. We won’t share your personal
            information with anyone. We take extreme care with your details.
          </p>
        </Grid.Row>
        <Grid.Row className="pb-2 pl-5 pr-4">
          <p className="privacyPoints" style={{ width: "100%" }}>
            Payment :
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            We’ve partnered with India’s leading Payment Gateways –
            <span className="privacyPoints">
              Instamojo, PayUMoney and CCAvenue
            </span>{" "}
            for our online payments through{" "}
            <span className="privacyPoints">
              {" "}
              Credit Card, Debit Card and Net Banking.
            </span>
          </p>
        </Grid.Row>
        <Grid.Row className="pb-2 pl-5 pr-5">
          <p className="privacyPoints" style={{ width: "100%" }}>
            Delivery :
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            Our goods are delivered by leading logistics companies. However, it
            is extremely difficult for us to accept responsibility for their
            service. If your goods are not received within our specified
            delivery dates then you must notify us{" "}
            <span className="privacyPoints">within 10 days.</span>
          </p>
        </Grid.Row>
        <Grid.Row className="pb-5 pl-5 pr-5">
          <p className="privacyPoints" style={{ width: "100%" }}>
            Packaging :
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            We do Standard packaging to deliver your product in excellent
            condition, and hire the services of{" "}
            <span className="privacyPoints">
              Registered Logistic Service Provider
            </span>
            , however,<span className="privacyPoints"> M/S E.H.S Posters</span>{" "}
            does not take any responsibility{" "}
            <span className="privacyPoints"> [ and / or ]</span> for any
            infringement of services and product on part of{" "}
            <span className="privacyPoints">
              Logistic Service Provider. M/S E.H.S Posters
            </span>{" "}
            does not indemnify any
            <span className="privacyPoints"> Logistic Service Provider.</span>
          </p>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default PrivacyPolicy;
