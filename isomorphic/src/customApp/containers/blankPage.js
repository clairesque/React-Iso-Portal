import React, { Component } from "react";
import Box from '../../../src/components/utility/box';
import IntlMessages from '../../../src/components/utility/intlMessages';
import FormValidation from './FormValidation';
import { VCardWidgetWrapper } from './style';
import TimePicker from "../containers/TimePicker";
import moment from "moment";

export default class extends Component {

  state = {
    value: moment().hour(0).minute(0)
  };

  text = <span className="isoInfo"> --:-- (<IntlMessages id="booking.timeMessage" />)</span>

  handleChange = value => {
    this.setState({ value });
    this.text = <span className="isoInfo"> {value.format('HH:mm')} (<IntlMessages id="booking.timeSuccess" />)</span>
  }

  render() {
    const { style } = this.props;
    return (
      <Box>
        <FormValidation />
        <VCardWidgetWrapper className="isoVCardWidgetWrapper" style={style}>

          <div className="isoVCardImage">
            <img src="https://img.favpng.com/14/23/22/computer-icons-share-icon-landscape-png-favpng-U96r3erAyp2ZyUerjJJWk6QAG.jpg" alt="placeholder" />
          </div>

          <div className="isoVCardBody">
            <h3 className="isoName"> {<IntlMessages id="booking.greeting" />} </h3>
            <span className="isoDesgTitle"> {<IntlMessages id="booking.message" />}</span>
            <p className="isoDescription">{<IntlMessages id="booking.property" />}<span className="isoInfo">{<IntlMessages id="booking.propertyName" />}</span></p>
            <p className="isoDescription">{<IntlMessages id="booking.checkIn" />}<span className="isoInfo">{<IntlMessages id="booking.checkInDate" />}</span> </p>
            <p className="isoDescription">{<IntlMessages id="booking.checkOut" />}<span className="isoInfo">{<IntlMessages id="booking.checkOutDate" />}</span> </p>
            <p className="isoArrival">{<IntlMessages id="booking.arrival" />}
              {this.text}
            </p>
          </div>

          <div className="Time">
            <form>
              <TimePicker value={this.state.value} onChange={this.handleChange} />
              <br />
            </form>
          </div>

        </VCardWidgetWrapper>
      </Box>



    );
  }
}
