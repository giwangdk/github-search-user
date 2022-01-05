

function App() {
  return (
    <div class="bg-blue-50">
      <div className="App sm:m-auto sm:my-20 sm:w-1/2 m-5 ">
      <header className="App-header">
        <div className="flex justify-between items-center">
          <div className="header_name"><p className=" text-2xl sm:text-4xl  font-bold tracking-wider">devfinder</p></div>
          <div className="toggle">
            <span className="text-lg sm:text-3xl font-semibold text-gray-400">Dark</span>
          </div>
        </div>
      </header>

      <div className="input-search bg-white p-2 rounded-xl sm:p-3 sm:rounded-2xl shadow-black-500/50 my-4 flex justify-between">
        <input type="text" name="" id="" placeholder="Search Github username" className="p-2 outline-blue-300" />
        <button className="bg-blue-500 text-white font-semibold py-2 px-3  sm:py-3 sm:px-4 sm:rounded-xl border-0 rounded-lg">Search</button>
      </div>
    </div>
    </div>
  );
}

export default App;
