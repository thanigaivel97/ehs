/*jshint esversion: 6 */
import React from "react";
import { Grid } from "semantic-ui-react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Support = (props) => {
  return (
    <>
      <Grid>
        <Grid.Row className="p-5" style={{ background: "#F5F5F5" }}>
          <h4>Support</h4>
        </Grid.Row>
        <Grid.Row className="pt-4">
          <p className="privacy mx-auto">Have a Question?</p>
        </Grid.Row>
        <Grid.Row className="pb-4">
          <p className="privacyPoints mx-auto">
            If you have any quetsion you can ask below or enter what you are
            looking for!
          </p>
        </Grid.Row>
        <Grid.Row className="mx-auto pt-5 pb-5 mb-5" columns="3">
          <Grid.Column
            className="text-center pr-3 pl-3"
            style={{ width: "33%" }}
          >
            <Card variant="outlined" className="p-4">
              <CardContent>
                <Typography
                  className="privacyPoints pb-4"
                  color="textSecondary"
                  gutterBottom
                  style={{ fontSize: "20px" }}
                >
                  24 Hours Technical Support
                </Typography>
                <img
                  className="pb-4"
                  src="https://ehsprints.com/wp-content/uploads/2018/10/support.png"
                  alt=""
                />
                <Typography
                  variant="h6"
                  component="h2"
                  className="privacy"
                  style={{ fontSize: "20px" }}
                >
                  Support@Ohsposters.Com
                </Typography>
              </CardContent>
            </Card>
          </Grid.Column>
          <Grid.Column className="text-center pr-3" style={{ width: "33%" }}>
            <Card variant="outlined" className="p-4">
              <CardContent>
                <Typography
                  className="privacyPoints mx-auto pb-4"
                  color="textSecondary"
                  gutterBottom
                  style={{ fontSize: "20px" }}
                >
                  New Business Enqueries
                </Typography>
                <img
                  className="pb-4"
                  src="https://ehsprints.com/wp-content/uploads/2018/10/sales.png"
                  alt=""
                />
                <Typography
                  variant="h6"
                  component="h2"
                  className="privacy mx-auto"
                  style={{ fontSize: "20px" }}
                >
                  Sales@Ohsposters.Com
                </Typography>
              </CardContent>
            </Card>
          </Grid.Column>
          <Grid.Column className="text-center p" style={{ width: "33%" }}>
            <Card variant="outlined" className="p-4">
              <CardContent>
                <Typography
                  className="privacyPoints mx-auto pb-4"
                  color="textSecondary"
                  gutterBottom
                  style={{ fontSize: "20px" }}
                >
                  General Help
                </Typography>
                <img
                  className="pb-4"
                  src="https://ehsprints.com/wp-content/uploads/2018/10/queries.png"
                  alt=""
                />
                <Typography
                  variant="h6"
                  component="h2"
                  className="privacy mx-auto"
                  style={{ fontSize: "20px" }}
                >
                  Help@Ohsposters.Com
                </Typography>
              </CardContent>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Support;
