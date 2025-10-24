const RecentSearchHistory = ({
  recentHistory,
  setRecentHistory,
  setSelectedHistory,
}) => {
  const clearHistory = () => {
    localStorage.clear()
    setRecentHistory([])
  }

  const clearSelectedHistory = (selectedItem) => {
    let history = JSON.parse(localStorage.getItem('history'))
    history = history.filter((item) => {
      if (item != selectedItem) {
        return item
      }
    })
    setRecentHistory(history)
    localStorage.setItem('history', JSON.stringify(history))

  }
  
  return (
    <>
      <div className="col-span-1 dark:bg-zinc-800 bg-red-100 pt-3">
        <h1 className="text-xl dark:text-white text-zinc-700 flex text-center justify-center">
          <span>Recent Search</span>{' '}
          <button onClick={clearHistory} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              className="fill-zinc-700 dark:fill-white transition-colors duration-200"
            >
              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
          </button>
        </h1>
        <ul className="text-left overflow-auto text-base mt-2">
          {recentHistory &&
            recentHistory.map((item, id) => (
              <div key={id} className="group flex items-center justify-between pr-2 py-0.5 cursor-pointer hover:bg-red-200 dark:hover:bg-zinc-700 transition-colors">
                <li
                  onClick={() => setSelectedHistory(item)}
                  key={id}
                  className="w-full p-1 pl-4 truncate text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
                >
                  {item}
                </li>
                <button
                  onClick={() => clearSelectedHistory(item)}
                  className="hidden group-hover:flex items-center justify-center p-1 rounded hover:bg-red-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    className="fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-300 dark:group-hover:fill-zinc-400 transition-colors duration-200"
                  >
                    <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                  </svg>
                </button>
              </div>
            ))}
        </ul>
      </div>
    </>
  )
}

export default RecentSearchHistory
