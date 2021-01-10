import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../src/settings/style-util';

const VCardWidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
  border: 1px solid ${palette('border', 2)};
  padding: 50px 30px 40px;

  .isoVCardImage {
    width: 90px;
    height: 90px;
    display: -webkit-inline-flex;
    display: -ms-inline-flex;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 35px;
    ${borderRadius('50%')};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .isoVCardBody {
    align-items: center;
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;

    .isoName {
      font-size: 17px;
      color: ${palette('text', 0)};
      font-weight: 400;
      margin: 0 0 5px;
      line-height: 1.2;
    }

    .isoDesgTitle {
      font-size: 13px;
      color: ${palette('text', 2)};
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }

    .isoDescription {
      font-size: 13px;
      color: ${palette('text', 2)};
      font-weight: 400;
      margin: 20px 0 0 0;
      line-height: 1.5;
    }

    .isoInfo {
        font-size: 13px;
        color: black;
        font-weight: 400;
        margin: 20px 0 0 0;
        line-height: 1.5;
      }

      .isoArrival {
        font-size: 13px;
        color: ${palette('text', 2)};
        font-weight: 400;
        margin: 20px 0 0 0;
        margin-bottom: 15px;
        line-height: 1.5;
      }

  }
`;

export { VCardWidgetWrapper };
