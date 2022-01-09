import './App.css'
import image from './logo512.png'

function App() {
  return (
    <div class="App">
      <div className="  sm:my-20 w-auto  sm:w-2/3 lg:w-1/2 m-5 sm:m-auto">
      <header className="">
        <div className="flex justify-between items-center">
          <div className="header_name"><p className=" text-2xl md:text-3xl lg:text-4xl  font-bold tracking-wider">devfinder</p></div>
          <div className="toggle">
            <span className="text-lg sm:text-3xl font-semibold text-gray-400">Dark</span>
          </div>
        </div>
      </header>

      <div className="bg-white p-3 rounded-xl sm:p-3 md:p-4 sm:rounded-2xl shadow-lg my-4 flex justify-between">
        <input type="text" name="" id="" placeholder="Search Github username" className="p-2 outline-blue-200 mr-2 flex-1" />
        <button className="bg-blue-500 text-white font-semibold py-2 px-3  sm:py-3 sm:px-4 sm:rounded-xl border-0 rounded-lg hover:bg-blue-400 shadow-black">Search</button>
      </div>

      <div className="bg-white p-3 rounded-xl sm:p-3 md:p-4 sm:rounded-2xl shadow-lg my-4 flex justify-between">
          <div className="p-3">
            <div className="profile flex ">
              <div className="avatar">
                <img src={image} alt="" class="w-20 rounded-full" />
              </div>
              <div className="profile text-left ml-4 flex flex-col leading-7">
                <h5>Giwang Dwi Kintan</h5>
                <a>@giwangdk</a>
                <h6>Joined 6 Jan 2020</h6>
              </div>
            </div>
       </div>
      </div>
    </div>
    </div>
  );
}

export default App;
