/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";

const Quotation = (props) => {
  return (
    <>
      <Grid>
        <Grid.Row className="p-5" style={{ background: "#F5F5F5" }}>
          <h4>FAQ</h4>
        </Grid.Row>
        <Grid.Row className="pb-2 pt-5 pl-5 pr-4">
          <p className="privacyPoints" style={{ width: "100%" }}>
            Why Join Us?
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            Want to sell your artwork? Join Us
          </p>
        </Grid.Row>
        <Grid.Row className="pb-2 pl-5 pr-4">
          <p className="privacyPoints" style={{ width: "100%" }}>
            Do you charge designers for selling their artwork?
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            No. Just sign up by filling details&start uploading artwork.
            Consumers buy your designed posters& you get royalty for each sell.
          </p>
        </Grid.Row>
        <Grid.Row className="pb-2 pl-5 pr-5">
          <p className="privacyPoints" style={{ width: "100%" }}>
            So what does the team behind EHS Posters do?
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            We coordinate everything from manufacturing, technology, quality
            control, and shipping through to ongoing customer service.
          </p>
        </Grid.Row>
        <Grid.Row className="pb-2 pl-5 pr-5">
          <p className="privacyPoints" style={{ width: "100%" }}>
            Why was my invitation to join your platform declined?
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            Each portfolio/artwork goes through a rigorous reviewing process to
            make sure the designs are original, creative & within the confines
            of artistic expression. We may ask you to revise. Our submission
            guideline URL at https://ohsposters.com is very helpful for avoiding
            rejection/revision. We wouldn't accept copied, pornographic or
            insensitive content. Our team consisting of experienced
            professionals reserves the right to have the last word on which
            artwork will be made live.
          </p>
        </Grid.Row>
        <Grid.Row className="pb-5 pl-5 pr-5">
          <p className="privacyPoints" style={{ width: "100%" }}>
            How do I create my artist profile?
          </p>
          <p className="ml-3" style={{ fontSize: "15px" }}>
            You have to register/sign up as artist in our website. Your login
            dashboard will be created & from there you can upload your designs &
            check all data like unapproved pending & live work along with their
            statistics. Approval image is always low resolution. You will also
            get mail for declining or making live your artwork.
          </p>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Quotation;
