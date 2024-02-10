import React, { useState } from 'react'

const SelectYear = ({selectSeason}) => {

    const [selectedYear, setSelectedYear] = useState('2023');

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedYear(selectedValue);
      selectSeason(selectedValue);
    };

  return (
    <div style={{display: 'flex', gap:'.5rem', padding: '1rem',
    background: '#121212'}}>
        <legend>Temporada</legend>
        <select style={{
          borderRadius: '3px',
          background: 'rgba(24, 24, 24, 0.8)',
          color: 'white'
        }} 
          id="year" onChange={handleChange} value={selectedYear}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* <option value="2024">2024</option> */}
        </select>
    </div>
  )
}

export default SelectYear