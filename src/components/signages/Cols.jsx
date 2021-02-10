/*jshint esversion: 6 */
import { Grid } from "semantic-ui-react";
import Card from "./Card";

const SevenCol = (props) => {
  return (
    <Grid.Row columns={props.cols} className="mt-4 ml-5 justify-content-start">
      {props.data.map((v, i) => (
        <Grid.Column key={i} className={i !== 0 ? "ml-5 pl-2" : null}>
          <Card data={v} />
        </Grid.Column>
      ))}
    </Grid.Row>
  );
};

export default SevenCol;
