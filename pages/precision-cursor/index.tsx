import React, {FC, useState, useEffect, useRef} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import useInterval from 'use-interval'
import { TweenMax } from 'gsap'
const Index: FC = () => {
  const w = 25
  const h = 25
  const delay = 2
  const [followerX, setFollowerX] = useState(0)
  const [followerY, setFollowerY] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const cursorRef = useRef(null)
  useEffect(() => {
    window.document.addEventListener('mousemove', (e) => {
      setX(e.pageX)
      setY(e.pageY)
    })
  }, [])
  useInterval(() => {
    setFollowerX(followerX + (x - followerX) / delay)
    setFollowerY(followerY + (y - followerY) / delay)
    TweenMax.to(cursorRef.current, {
      x: followerX - (w / 2),
      y: followerY - (h / 2)
    })
  }, 10)
  return (
    <>
      <Head>
        <title>Precision Cursor | Sketch - Chiaki Uehira</title>
      </Head>
      <FullScreen>
        <Cursor ref={cursorRef} w={w} h={h} />
        
      </FullScreen>
    </>
  )
}

const FullScreen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  cursor: none;
`

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: #b3b3b3;
  border-radius: 100%;
`

export default Index
