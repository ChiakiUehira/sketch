import React, {FC, useEffect, useState} from 'react'
import EditorJS, { API } from "@editorjs/editorjs"
import Header from '@editorjs/header'
import styled from 'styled-components'

const tools = {
  header: Header,
}

const defaultData = {
  time: 1552744582955,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Editorの実装',
        level: 1
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'このサンプルは<a href="https://editorjs.io/">Editor.js</a>によって実装されています。'
      }
    }
  ],
  version: "2.11.10"
}

const Editor: FC = () => {
  const [editor, setEditor] = useState(null)
  useEffect(() => {
    const editor = new EditorJS({
      tools,
      autofocus: true,
      data: defaultData,
      onChange(api: API) {
        api.saver.save().then(output => {
          console.log(output)
        })
      }
    })
    setEditor(editor)
  }, [])
  return (
    <EditorWrapper>
      <div id="editorjs" />
    </EditorWrapper>
  )
}

const EditorWrapper = styled.div`
  a {
    color: inherit;
    text-decoration: underline;
  }
`

export default Editor