import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

/*
  App切入点：CLSP测试入口，使用Antd库
*/
class __componentName__ extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    showSettings: PropTypes.bool,
    stripes: PropTypes.shape({
      connect: PropTypes.func
    })
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      showSettings,
      match: {
        path
      }
    } = this.props;

   
    return (
      <div style={{width: "720px", margin: "20px auto"}}>
        <Form
          {...layout}
          name="basic"
        >
          <Form.Item
            label="token"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input value={"test value"}  />
          </Form.Item>
          <Button type="primary">测试Button</Button>          
        </Form>
      </div>
    );
  }
}

export default __componentName__;
