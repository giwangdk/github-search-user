import React from 'react';
import image from '../../logo512.png'

function CardResult({data}) {
    return (
        <div className="bg-white dark:bg-slate-700 dark:text-white rounded-xl sm:p-2 md:p-2 sm:rounded-2xl shadow-lg my-4 flex justify-between">
          <div className="p-3">
            <div className="profile flex items-center ">
              <div className="avatar ">
                <img src={data?.avatar_url} alt="" class="w-20 md:w-28 rounded-full" />
              </div>
              <div className="profile text-left ml-4 flex flex-col just">
                <h3>{data?.name}</h3>
              <a>@{data?.login}</a>
                <h6>Joined 6 Jan 2020</h6>
              </div>
            </div>
            <div className="description flex w-100 ">
              <div className="lg:w-2/3"></div>
              <div className="w-100">
              <div className="bio text-left mb-3 flex ">
              <p>{data?.bio ? data?.bio : "The user has no bio"}</p>
            </div>
            <div className="recap bg-blue-50  flex justify-between py-4 rounded-2xl px-8">
              <div className="repo">
                <h6>Repo</h6>
                  <p className="count">{ data?.public_repos}</p>
              </div>
              <div className="repo">
                <h6>Followers</h6>
                  <p className="count">{data?.followers}</p>
              </div>
              <div className="repo">
                <h6>Following</h6>
                  <p className="count">{data?.following}</p>
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
        );
}

export default CardResult;
