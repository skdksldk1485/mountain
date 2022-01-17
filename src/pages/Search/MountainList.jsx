import React, { useState, useEffect } from 'react';
import { List, Space } from 'antd';
import { HeartTwoTone, MessageOutlined } from '@ant-design/icons';
import axios from 'axios';

const MountainList = () => {
  // 추후 좋아요 & 댓글 수 반영하기
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const [mountains, setMountains] = useState(undefined);

  // 임시 데이터
  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('http://localhost:4000/mountains');
      if (!completed) {
        setMountains(response.data);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 3 }}
        dataSource={mountains}
        renderItem={item => (
          <List.Item
            key={item.mountainNo}
            actions={[
              <IconText
                icon={HeartTwoTone}
                text="156"
                key="list-vertical-star-o"
              />,

              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={272} alt="mountain" src={item.imgUrl[0]} />}
          >
            <List.Item.Meta
              title={<a href="temp">{item.mountainName}</a>}
              description={item.addressDetail}
            />
            {item.mountainInfo}
          </List.Item>
        )}
      />
    </>
  );
};

export default MountainList;
