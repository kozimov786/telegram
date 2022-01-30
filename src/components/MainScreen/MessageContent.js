
import { faFile, faImage, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faMicrophone, faPaperclip, faPaperPlane, faPoll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import styled from 'styled-components';

import UserImg from '../../images/user.jpeg'



const MessageContent = () => {
  const { auth, db } = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [active, setActive] = useState(false);
  const [file, setFile] = useState(false)
  const [messages, setMessages] = useState([])


  const getCol = collection(db, 'user')
  const sendMessage = async () => {
    try {
      const docRef = await addDoc(getCol, {
        displayName: user.displayName,
        uid: user.uid,
        text: value,
        photoURL: user.photoURL,
        createdAt: Timestamp.fromDate(new Date("December 17, 2021")),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setValue('')
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(getCol)
      const dataList = data.docs.map((doc) => {
        let data = doc.data()
        return data
      })
      setMessages(dataList)
      return dataList
    }
    getData()
  }, [getCol])

  const stickerHandler = (e) => {
    const stik = e.target;
    setValue((prev) => prev + stik.textContent)
  }

  return (
    <div className="message">
      <div className="message__container">

        {messages.map((message, index) => (

          <Wrapper key={index} style={user.uid === message.uid ? { marginLeft: "400px", flexDirection: "row-reverse", } : { marginLeft: "0", flexDirection: 'row', }}>


            <img className='box__img' src={message.photoURL ? message.photoURL : UserImg} alt="images" />

            <Box style={user.uid === message.uid ? { backgroundColor: '#8774e1' } : { backgroundColor: '#2b2b2b' }}>
              <div>
                <h2 className='box__title'
                  style={user.uid === message.uid ? { color: "#27c095" } : { color: '#8774e1' }}>{message.displayName}
                </h2>
                <p className='box__text'>{message.text}</p>
              </div>

              <p className="box__time">12:00</p>
            </Box>
          </Wrapper>
        ))}
      </div>
      <div className='sending'>
        <div className="sending__wrapper">
          <div className="sending__container">
            <div className="sending__stickers">
              <div className="sticker"
                onClick={() => {
                  setActive(prev => !prev)
                }}
              >
                <FontAwesomeIcon icon={faSmile} color='white' size='lg' />
              </div>
              <Stickers active={active} onClick={stickerHandler}>
                <span>😀</span>
                <span>😃</span>
                <span>😄</span>
                <span>😁</span>
                <span>😆</span>
                <span>😅</span>
                <span>😂</span>
                <span>🤣</span>
                <span>🥲</span>
                <span>😊</span>
                <span>😇</span>
                <span>🙃</span>
                <span>😍</span>
                <span>🥰</span>
                <span>😘</span>
                <span>😗</span>
                <span>😋</span>
                <span>🤨</span>
                <span>🧐</span>
                <span>🤓</span>
                <span>😎</span>
                <span>🥸</span>
                <span>🤩</span>
                <span>🥳</span>
                <span>😏</span>
                <span>😒</span>
                <span>😞</span>
                <span>😔</span>
                <span>😟</span>
                <span>😕</span>
                <span>😫</span>
                <span>🥺</span>
                <span>😢</span>
                <span>😭</span>
                <span>😤</span>
                <span>😠</span>
                <span>😡</span>
                <span>🤬</span>
                <span>🤯</span>
                <span>😳</span>
                <span>🥵</span>
                <span>🥶</span>
                <span>😶‍🌫️</span>
                <span>😱</span>
                <span>😨</span>
                <span>😰</span>
                <span>😥</span>
                <span>😓</span>
                <span>🤗</span>
                <span>🤔</span>
                <span>🤭</span>
                <span>🤫</span>
                <span>🤥</span>
                <span>😶</span>
                <span>😐</span>
                <span>😑</span>
              </Stickers>
            </div>
            <form className='sending__form' action="" onSubmit={(e) => { e.preventDefault() }}>
              <input type="text"
                placeholder='Message'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
            <div className="sending__media">
              <FontAwesomeIcon className='paperclip' icon={faPaperclip} color='white' size='lg' onClick={() => {
                setFile(prev => !prev)
              }} />
              <MediaWrapper file={file}>
                <label htmlFor="photo-label"><FontAwesomeIcon className='media-icons' icon={faImage} size='lg' />  Photo or Video
                  <input type="file" id='photo-label' />
                </label>
                <label htmlFor="file-label"><FontAwesomeIcon className='media-icons' icon={faFile} size='lg' />  File
                  <input type="file" id='file-label' />
                </label>
                <button className='poll-btn'> <FontAwesomeIcon className='media-icons' icon={faPoll} size='lg' />  Poll</button>
              </MediaWrapper>
            </div>
          </div>
          <div className="sending_btn">
            {value
              ?
              <button className='sending__button' onClick={sendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} size='lg' color='white' />
              </button>
              :
              <FontAwesomeIcon icon={faMicrophone} color='white' size='lg' />}
          </div>
        </div>
      </div>
    </div >
  )
};


const Wrapper = styled.div`
   width:300px;
   max-width: 600px;
   display: flex;
   align-items: flex-end;
   margin-bottom: 10px;
   margin-top: 10px;
`
const Box = styled.div`
  padding: 10px;
  width: 100%;
  padding-bottom: 25px;
  border-radius: 10px;
  position: relative;
  background-color: #212121;
  color: #fff;
  `

const Stickers = styled.div`
  position: absolute;
  top: -410px;
  left: 0;
  width: 400px;
  height: 400px;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 60px;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  clip-path: ${props => props.active ? 'circle(1000px at 0% 90%)' : 'circle(0% at 0% 90%)'};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: scroll;
  flex-wrap: wrap;
  background-color: #2b2b2b;
  span{
    font-size: 28px;
    margin: 10px;
    cursor: pointer;
  }
`
const MediaWrapper = styled.div`
  position: absolute;
  right: 0;
  padding: 5px 0;
  border-radius: 10px;
  background-color: #2b2b2b;
  transition: all 0.3s ease;
  width: 200px;
  top: -210px;
  display: flex;
  flex-direction: column;
  clip-path: ${props => props.file ? 'circle(1000px at 90% 90%)' : 'circle(0% at 90% 90%)'};
  .media-icons{
    margin-right: 20px;
  }
  input::-webkit-file-upload-button{
    visibility: hidden;
  }
  input{
    display:none;
    opacity: 0;
  }
  label{
    width: 100%;
    padding: 20px;
    cursor: pointer;
    &:hover{
      background-color: #212121;
    }
  }
  button{
    border: none;
    background-color: transparent;
    padding:20px;
    color: #fff;
    text-align: left;
    cursor: pointer;
    font-size: 16px;
    &:hover{
      background-color: #212121;
    }
  }
`
export default MessageContent;
