import { useEffect, useState } from 'react'
import { checkHeading, replaceHeadingStars } from '../helper'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/light';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Answers = ({ ans, totalResult, customKey, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true)
      setAnswer(replaceHeadingStars(ans))
    }
  }, [])

  const renderer = {
    code({node, children, inline, className, ...props}){
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children = {answer}
          language={match[1]}
          style={dark}
          showLineNumbers
          wrapLongLines
          PreTag="div"
        />
      ) : (
        <code {...props} children={children}>
          {children}
        </code>
      )

    }
  }
  return (
    <>
      { customKey==0 && totalResult > 1 ? <span className="text-xl dark:text-white text-zinc-800">{answer}</span> :
      heading ? 
        <span className= "pt-2 block text-lg dark:text-white text-zinc-700">{answer}</span>
       : 
        <span className={type=='q' ? 'pl-1 block': 'pl-4'}>
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown></span>
      }
    </>
  )
}

export default Answers
