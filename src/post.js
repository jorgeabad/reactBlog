
import { useLocation } from 'react-router-dom'
import React from 'react'
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Container } from "react-bootstrap";

const transformImageUri = input =>
  /^https?:/.test(input)
    ? input
    : (decodeURIComponent(`https://jorge-abad.es${input}`))

const PostContenido = function() {

    const location = useLocation()
    const post  = location.state

    return ( 
      <Container>

      
        <div>
        <article >
            <h2>{post.titulo}</h2>
            <p>Escrito por {post.autor}</p>
            
        </article>
    </div>,
        <ReactMarkdown children={post.contenido} 
        transformImageUri={transformImageUri}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}/>

</Container>
     );
}


export default PostContenido;