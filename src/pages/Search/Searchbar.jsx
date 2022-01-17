import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Slider, Row, Form, Select, Button } from 'antd';
import { sido, sigungu } from './AddressData';

const Searchbar = () => {
  const [height, setHeight] = useState(10);

  const { Option } = Select;

  const onChange = v => {
    setHeight(v);
  };

  const marks = {
    100: '100m',
    500: '500m',
    1000: '1000m',
    1500: '1500m',
    2000: 'ALL',
  };

  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);

  const changeAddress1 = value => {
    setAddress1(value);
    setAddress2(null);
  };

  const changeAddress2 = value => {
    setAddress2(value);
  };

  return (
    <Form
      style={{
        border: '1px solid var(--color-dark-green)',
        padding: '30px 10px 10px 10px',
        marginBottom: '20px',
      }}
    >
      <Row justify="center">
        <Form.Item>
          <Select
            placeholder="시/도"
            onChange={changeAddress1}
            value={address1}
            style={{ width: '130px' }}
          >
            {sido.map(s => (
              <Option key={s} value={s}>
                {s}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="시/군/구"
            onChange={changeAddress2}
            value={address2}
          >
            {address1 ? (
              sigungu[address1].sort().map(s => (
                <Option key={s} value={s}>
                  {s}
                </Option>
              ))
            ) : (
              <></>
            )}
          </Select>
        </Form.Item>

        <Form.Item>
          <Row>
            산 높이
            <Slider
              min={100}
              max={2000}
              onChange={onChange}
              value={typeof height === 'number' ? height : 0}
              step={50}
              marks={marks}
              style={{ width: '300px' }}
            />
          </Row>
        </Form.Item>

        <Form.Item>
          <Button>검색</Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default Searchbar;
