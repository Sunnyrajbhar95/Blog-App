import { useDispatch, useSelector } from 'react-redux';
import { filterdata } from '../utilities/FilterSlice';
import { useState } from 'react';

function Filterpage() {
  const res = useSelector((state) => state.blog.data);
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilter = (filter) => {
    if (filter === 'All') {
      dispatch(filterdata(res));
    } else {
      const data = res.filter((item) => item.category === filter);
      dispatch(filterdata(data));
    }
    setActiveFilter(filter);
  };

  const buttonClass = (filter) =>
    `bg-gray-300 py-1 px-4 rounded-md focus:outline-none ${
      activeFilter === filter ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'
    }`;

  return (
    <div className='m-4 w-[98%] flex justify-between py-4 border-b-4 border-indigo-500'>
      <button
        className={buttonClass('All')}
        onClick={() => handleFilter('All')}
      >
        All
      </button>
      <button
        className={buttonClass('Startups')}
        onClick={() => handleFilter('Startups')}
      >
        Startups
      </button>
      <button
        className={buttonClass('Growth')}
        onClick={() => handleFilter('Growth')}
      >
        Growth
      </button>
      <button
        className={buttonClass('Security')}
        onClick={() => handleFilter('Security')}
      >
        Security
      </button>
      <button
        className={buttonClass('Tech')}
        onClick={() => handleFilter('Tech')}
      >
        Tech
      </button>
      <button
        className={buttonClass('Apps')}
        onClick={() => handleFilter('Apps')}
      >
        Apps
      </button>
    </div>
  );
}

export default Filterpage;
