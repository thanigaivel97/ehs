/*jshint esversion: 6 */
import { Grid } from "semantic-ui-react";
import Card from "./Card";

const SevenCol = (props) => {
  return (
    <Grid.Row columns={props.cols} className="mt-4 justify-content-center">
      {props.data.map((v, i) => (
        <Grid.Column key={i} className={i !== 0 ? "ml-4" : null}>
           <Card data={v} /> 
        </Grid.Column>
      ))}
    </Grid.Row>
  );
};

export default SevenCol;
