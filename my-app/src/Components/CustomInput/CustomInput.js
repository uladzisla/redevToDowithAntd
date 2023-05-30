import React, { useState } from "react";
import { Input, Button } from "antd";
import { Col, Row } from "antd";
const CustomInput = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const getInputValue = (e) => {
    setText(e.target.value);
  };
  const sendNewTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, title: text, status: true }]);
    setText("");
  };
  return (
    <>
      <Row>
        <Col offset={6} span={12}>
          <Input
            onChange={getInputValue}
            placeholder="Введите новое задание"
            value={text}
          />
        </Col>
        <Col span={6}>
          <Button type="primary" onClick={sendNewTask}>
            добавить задание
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default CustomInput;
