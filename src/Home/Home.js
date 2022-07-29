import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import QuizCard from './QuizCard/QuizCard';
import Reward from './Reward/Reward';

const Home = () => {
  return (
    <>
      <Header></Header>
      <Reward></Reward>
      <QuizCard></QuizCard>
      <Nav></Nav>

    </>
  );
};

export default Home;
