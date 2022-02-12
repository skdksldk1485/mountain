import React, { useState, useEffect } from 'react';
import { Title, Container, SubContainer, StyledTable } from './My.style';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyPosts = () => {
  const [allPosts, setAllPosts] = useState(undefined);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    let completed = false;
    const getMountains = async () => {
      const response = await axios.get('me/community');
      if (!completed) {
        setAllPosts(response.data);
        setPostCount(response.data.length);
      }
    };
    getMountains();
    return () => {
      completed = true;
    };
  }, []);

  const columns = [
    { title: 'No', dataIndex: 'id' },
    {
      title: '제목',
      dataIndex: 'title',
      render: (text, record) => (
        <Link to={{ pathname: `/community/${record.id}` }}>{text}</Link>
      ),
    },
    {
      title: '작성일',
      dataIndex: 'createdAt',
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 2,
      },
    },
    {
      title: '조회수',
      dataIndex: 'viewCount',
      sorter: {
        compare: (a, b) => a.views - b.views,
        multiple: 1,
      },
    },
  ];
  return (
    <>
      <Title>내가 작성한 글 {postCount}개</Title>
      <Container>
        <SubContainer>
          <StyledTable
            columns={columns}
            dataSource={allPosts}
            pagination={false}
          ></StyledTable>
        </SubContainer>
      </Container>
    </>
  );
};

export default MyPosts;
