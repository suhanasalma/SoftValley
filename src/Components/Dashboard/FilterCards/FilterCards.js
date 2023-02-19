import React from "react";
import FilterCard from "./FilterCard";

const FilterCards = ({ api, name }) => {
  const { data, isLoading, isSuccess } = api;
//   console.log(data);

  return (
    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden ">
        <summary className="flex items-center justify-between pb-1 text-gray-900 transition border-2 w-60 p-2 border-gray-400 cursor-pointer hover:border-gray-600 rounded-md">
          <span className="text-sm font-medium"> {name} </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2">
          <div className="bg-white border border-gray-200 rounded w-40 h-40 overflow-scroll">
            <ul className="p-4 space-y-1 border-t border-gray-200">
              {data?.data?.map((user, i) => (
                <FilterCard user={user} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </details>
    </div>
  );
};

export default FilterCards;
