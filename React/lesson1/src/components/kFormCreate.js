import React, { Component } from 'react';

const kFormCreate = (Cmp) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { errors: {} };
      this.options = {};
    }

    handleChange = (e) => {
      console.log(e);

      let { name, value } = e.target;
      this.setState({ [name]: value });
    };

    getFieldDecorator = (field, option) => {
      this.options[field] = option;

      return (InputCmp) => {
        return (
          <div>
            {React.cloneElement(InputCmp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.handleChange,
            })}
            {/* <p className="red">this.state.errors[field]</p> */}
            <p className="red">{this.state.errors[field]}</p>
          </div>
        );
      };
    };

    // 获取所有的值
    getFieldsValue = () => {
      return { ...this.state };
    };

    // 取得指定的值
    getFieldValue = (field) => {
      return this.state[field];
    };

    validate = (state) => {
      const errors = {};

      for (let name in this.options) {
        if (state[name] === undefined) {
          errors[name] = this.options[name].rules[0].message;
        }
      }
      this.setState({ ...state, errors });
    };

    // 验证
    validateFields = (callback) => {
      const errors = {};
      const state = { ...this.state };

      // console.log('this.state', this.state, this.options);
      for (let name in this.options) {
        if (state[name] === undefined) {
          errors[name] = 'error';
        }
      }

      // 出提示
      this.validate(state);

      if (JSON.stringify(errors) === {}) {
        // 合法
        callback(undefined, state);
      } else {
        callback(errors, state);
      }
    };

    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
};

export default kFormCreate;
