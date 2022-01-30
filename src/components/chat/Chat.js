import React from 'react';
import ChatItem from './ChatItem';
import './chat.css'
import mayoqImg from './../../images/mayoq.jpeg'
import reactImg from './../../images/reactjs.jpeg'
import dostImg from './../../images/dostlar.jpeg'
import lpImg from './../../images/lp-academy.jpeg'
import itJobsImg from './../../images/itJobs.jpeg'



const active = true;

const Chat = () => {


  return (
    <div className='chat'>
      <ChatItem
        active={active}
        title="Mayoq Hub"
        user="Hojiakbar"
        message="Oshga eriman :)"
        img={mayoqImg}
        time='20:12'
        badge='4'
      />
      <ChatItem
        title="Reactjs & ReactNative."
        user="Bunyod"
        message="Switch ishlamayapti"
        img={reactImg}
        time='19:12'
        badge='12'
      />
      <ChatItem
        title="Lp | Academy"
        user="Ulug'bek"
        message="Yangi kurslar boshlanmoqda"
        img={lpImg}
        time='20:12'
        badge='14'
      />
      <ChatItem
        title="Do'stlar"
        user="Zafar"
        message="Osh yimizmi endi"
        img={dostImg}
        time='22:12'
        badge='2'
      />
      <ChatItem
        title="It Jobs Group"
        user="Nodirbek"
        message="Maosh nechpul"
        img={itJobsImg}
        time='22:12'
        badge='2'
      />
    </div>
  );
};

export default Chat;