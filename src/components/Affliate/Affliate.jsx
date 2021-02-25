/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";

const Affiliate = (props) => {
  return (
    <>
      <Grid>
        <Grid.Row className="p-5" style={{ background: "#F5F5F5" }}></Grid.Row>
        <Grid.Row className="pt-4">
          <p className="privacy mx-auto" style={{ fontSize: "20px" }}>
            Become an Affiliate?
          </p>
        </Grid.Row>
        <Grid.Row className="pt-4">
          <p className="privacy mx-auto" style={{ fontSize: "15px" }}>
            "M/S E.H.S Posters"
          </p>
        </Grid.Row>
        <Grid.Row>
          <p
            className="privacy mx-auto"
            style={{ fontSize: "15px", color: "#8dc5dc" }}
          >
            (does no have any Affiliates at Present)
          </p>
        </Grid.Row>
        <Grid.Row className="pt-2">
          <p
            className="privacyPoints mx-auto text-center"
            style={{ fontSize: "15px", width: "550px" }}
          >
            We are presently, in the process of establishing the Relationship
            and Contract relating to Affiliates, with Standard and Competent
            Parties.
          </p>
        </Grid.Row>
        <Grid.Row className="pt-4">
          <div
            className="p-3 text-white mx-auto text-center"
            style={{
              background: "#0099c3",
              borderRadius: "5px",
              width: "250px",
            }}
          >
            Become a Affliate Now
          </div>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Affiliate;
