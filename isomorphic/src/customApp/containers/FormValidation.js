import React, { Component } from 'react';
import { Input } from 'antd';
import Form from '../../../src/components/uielements/form';
const FormItem = Form.Item;

class FormWithSubmissionButton extends Component {
  state = {
    confirmDirty: false,
  };

  onChangeAlphaNumericInput = (rule, value, callback) => {
    const form = this.props.form;
    const regex = /^[0-9A-Z]+$/; 
    if (value.match(regex) || value === "") {
      this.setState({ inputValue: value });
    }
    else {
        callback('Should be combination of capital numbers and letters.');
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Your booking code" hasFeedback>
          {getFieldDecorator('code', {
            rules: [
              {
                validator: this.onChangeAlphaNumericInput,
              }
            ],
          })(<Input name="code" id="code" />)}
        </FormItem>
      </Form>
    );
  }
}

const WrappedFormWithSubmissionButton = Form.create()(FormWithSubmissionButton);
export default WrappedFormWithSubmissionButton;
