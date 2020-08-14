import React, { Component } from "react";
import { Form, Col, Row, Card } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "./index.scss";

class Selects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const StoreData = this.props.Data;
    // console.log(this.props.BlockChoices);
    // const filtered = StoreData.filter((i) => {
    //   return i.relationshipCode !== "0";
    // });
    // this.setState([filtered]);
  }

  fieldStyleHandler = (Display) => {
    if (!Display) {
      return "hide";
    }
  };

  selectedStyleHandler = (id) => {
    for (const i of this.props.BlockChoices) {
      if (id === i) {
        return "hide";
      }
    }
  };

  handler = (StateKey, HandleChange, event) => {
    HandleChange(StateKey, event);
    this.setState({ id: event });
  };

  render() {
    const {
      labelCol,
      labelVal,
      TextCol,
      StateKey,
      HandleChange,
      Data,
      Display,
      BlockChoices,
    } = this.props;

    // const LocalStates = this.state[0];

    // if (LocalStates === undefined) {
    //   return (
    //     <Card>
    //       <Card.Header>Loading</Card.Header>
    //       <Card.Body>
    //         <Loader
    //           style={{
    //             width: "100%",
    //             height: "100",
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //           type="ThreeDots"
    //           color="#2BAD60"
    //           height="100"
    //           width="100"
    //         />
    //       </Card.Body>
    //     </Card>
    //   );
    // }

    return (
      <div className={this.fieldStyleHandler(Display)}>
        <Form.Group as={Row}>
          <Form.Label column sm={labelCol}>
            {labelVal}
          </Form.Label>
          <Col sm={TextCol}>
            <Form.Control
              placeholder="Pilih..."
              as="select"
              onChange={(event) =>
                this.handler(StateKey, HandleChange, event.target.value)
              }
            >
              <option value="">Pilih...</option>
              {Data.map((item) => (
                <option
                  key={item.relationshipCode}
                  id={item.relationshipCode}
                  value={item.relationshipCode}
                  className={this.selectedStyleHandler(item.relationshipCode)}
                >
                  {item.relationshipDesc}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
      </div>
    );
  }
}

export default Selects;
