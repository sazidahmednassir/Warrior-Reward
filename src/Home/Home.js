import React from 'react';
import Header from './Header/Header';
import QuizCard from './QuizCard/QuizCard';
import Reward from './Reward/Reward';

const Home = () => {
  return (
    <>
      <Header></Header>
      <Reward></Reward>
      <QuizCard></QuizCard>
    </>
  );
};

export default Home;
