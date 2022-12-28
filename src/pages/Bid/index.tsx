export function Bid() {
  return (
    <>
      <nav>
        <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="yes"
              name="answer"
              id="answer_yes"
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_yes"
            >
              Yes
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👍
            </div>
          </li>
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="no"
              name="answer"
              id="answer_no"
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_no"
            >
              No
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              👎
            </div>
          </li>

          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="maybe"
              name="answer"
              id="answer_maybe"
            />
            <label
              className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_maybe"
            >
              Maybe
            </label>

            <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
              🤔
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}
