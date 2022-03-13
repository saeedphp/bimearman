import React from 'react';
import {allCities} from "../../../data/cities";

const CitiesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    const cityList = allCities();

    return (
        <div>
            <div>
                <label>Filter by city</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {cityList.map((city) => (
                        <option key={city.id} value={city.city}>
                            {city.city}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CitiesFilter;