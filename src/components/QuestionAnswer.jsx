import Answers from './Answers'
const QuestionAnswer = ({item, id}) => {
  return (
    <>
      <div key={id} className={item.type == 'q' ? 'flex justify-end pr-2' : ''}>
        {item.type == 'q' ? (
          <li
            key={id}
            className="w-fit text-right p-1 border-7 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl  dark:bg-zinc-700  dark:border-zinc-700 bg-red-100 border-red-100"
          >
            <Answers
              customKey={id}
              ans={item.text}
              totalResult={1}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansId) => (
            <li key={ansId} className="text-left p-1">
              <Answers
                customKey={ansId}
                ans={ansItem}
                totalResult={item.length}
                type={item.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  )
}

export default QuestionAnswer
