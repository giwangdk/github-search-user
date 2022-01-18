/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css'
import image from './logo512.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div class="App">
      <div className="  sm:my-20 w-auto  sm:w-2/3 lg:w-7/12 md:m-auto m-5">
      <header className="">
        <div className="flex justify-between items-center">
          <div className="header_name"><p className=" text-md md:text-xl lg:text-2xl  font-bold tracking-wider">devfinder</p></div>
          <div className="toggle">
            <span className="text-lg sm:text-xl font-semibold text-gray-400">Dark</span>
          </div>
        </div>
      </header>

        <div className="bg-white p-2 rounded-xl  sm:rounded-2xl shadow-lg my-4 flex justify-between items-center">
          <div className="w-50 mx-3">
          <FontAwesomeIcon icon={faSearch} size="xl" />
        </div>
        <input type="text" name="" id="" placeholder="Search Github username" className="p-2 outline-blue-200 mr-2 flex-1" />
        <button className="bg-blue-500 text-white font-semibold py-2 px-3  sm:py-3 sm:px-4 sm:rounded-xl border-0 rounded-lg hover:bg-blue-400 shadow-black">Search</button>
      </div>

      <div className="bg-white  rounded-xl sm:p-2 md:p-2 sm:rounded-2xl shadow-lg my-4 flex justify-between">
          <div className="p-3">
            <div className="profile flex items-center ">
              <div className="avatar ">
                <img src={image} alt="" class="w-20 md:w-28 rounded-full" />
              </div>
              <div className="profile text-left ml-4 flex flex-col just">
                <h3>Giwang Dwi Kintan</h3>
                <a>@giwangdk</a>
                <h6>Joined 6 Jan 2020</h6>
              </div>
            </div>
            <div className="description flex ">
              <div className="lg:w-2/3"></div>
              <div className="">
              <div className="bio text-left mb-3 flex ">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nesciunt porro sit repellat adipisci autem, placeat nemo nisi! Ipsum delectus necessitatibus minima voluptatem neque molestias quo, velit cumque quod nostrum!</p>
            </div>
            <div className="recap bg-blue-50 flex justify-between py-4 rounded-2xl px-8">
              <div className="repo">
                <h6>Repo</h6>
                <p className="count">8</p>
              </div>
              <div className="repo">
                <h6>Followers</h6>
                <p className="count">8</p>
              </div>
              <div className="repo">
                <h6>Following</h6>
                <p className="count">8</p>
              </div>
            </div>
            <div className="text-left">
            <div className="locatio">
              <h4>San Fransisco</h4>
            </div>
            <div className="locatio">
              <h4>San Fransisco</h4>
            </div>
            <div className="locatio">
              <h4>San Fransisco</h4>
            </div>
            <div className="locatio">
              <h4>San Fransisco</h4>
            </div> 
            </div>
              </div>
            </div>
      </div>
    </div>
      </div>
      </div>
  );
}

export default App;
