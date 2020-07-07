import React, {FC, useState, useEffect, useRef} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { TweenMax } from 'gsap'
import CSSPlugin from 'gsap/CSSPlugin'
const Index: FC = () => {
  const w = 25
  const h = 25
  let followerX = 0
  let followerY = 0
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const cursorRef = useRef(null)
  useEffect(() => {
    window.document.addEventListener('mousemove', (e) => {
      setX(e.pageX)
      setY(e.pageY)
    })
    TweenMax.to({}, .001, {
      repeat: -1,
      onUpdate() {
        followerX += (x - followerX) / 10;
        followerY += (y - followerY) / 10;
        TweenMax.to(cursorRef.current, {
          top: followerX - (w / 2),
          left: followerY - (h / 2)
        })
      }
    })
  }, [])
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
