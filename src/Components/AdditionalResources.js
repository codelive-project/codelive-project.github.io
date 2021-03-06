import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { H2Style, CardBodyStyle1, SectionStyle1 } from "../Helpers/styles";

export default class AdditionalResources extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={SectionStyle1}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            <h2 style={H2Style}> Additional Resources </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body style={CardBodyStyle1}>
            <ul>
              <li>
                <a href="https://vimeo.com/543976965">Final Presentation</a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/14D_fQykQDDAdLssdBUcqKjvjvzsJZkPkFV2JopsqmbM/edit?usp=sharing">Final Report (Magpi Submission)</a>
              </li>
              <li>
                <a href="https://github.com/codelive-project">
                  Link to Github Repo
                </a>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
