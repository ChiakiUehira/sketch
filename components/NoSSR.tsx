import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const NoSSR: FC<Props> = ({ children }) => {
  if (typeof window !== 'undefined') {
    return <>{ children }</>
  } else {
    return <></>
  }
}

export default NoSSR