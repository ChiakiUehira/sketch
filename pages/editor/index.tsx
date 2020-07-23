import React, { FC } from 'react'
import dynamic from "next/dynamic"
import styled from 'styled-components'

const Editor = dynamic(
  () => import('../../components/Editor'),
  { ssr: false }
)

const Index: FC = () => {
  return (
    <PageContent>
      <Editor />
    </PageContent>
  )
}

const PageContent = styled.div`
  padding: 80px 0;
`

export default Index