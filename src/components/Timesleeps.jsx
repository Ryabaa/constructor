import React, { useState, useEffect, useCallback } from "react";

import cross from "../img/cross.png";

function Timesleeps({ index, timesleep, deleteTimesleep, editTimesleep }) {
    const initialValue = timesleep.value;
    const initialInput = timesleep.input;
    const [timesleepValue, setTimesleepValue] = useState(initialValue);
    const [timesleepInput, setTimesleepInput] = useState(initialInput);

    const handleInputChange = (event) => {
        setTimesleepInput(event.target.value)
    };
    const handleValueChange = (event) => {
        setTimesleepValue(event.target.value)
    };

    const handleEdit = useCallback(
        () => {
            editTimesleep({ name: timesleep.name, input: timesleepInput, value: Number(timesleepValue) }, index)
            setTimesleepInput(timesleepInput || initialInput)
            setTimesleepValue(timesleepValue || initialValue)
        },
        [timesleepInput, timesleepValue],
    )

    const handleDelete = () => {
        deleteTimesleep(index);
    };

    useEffect(() => {
        setTimesleepInput(initialInput)
    }, [initialInput])

    return (
        <div className="options-timesleeps__block-wrapper">
            <div className="options-timesleeps__block">
                <div className="options-timesleeps__block-name">{timesleep.name}</div>
                <input
                    onChange={handleInputChange}
                    onBlur={handleEdit}
                    value={timesleepInput}
                    placeholder="Enter text..."
                    type="text"
                />
                <div className="options-timesleeps__block-time">
                    <input
                        onChange={handleValueChange}
                        onBlur={handleEdit}
                        value={timesleepValue}
                        type="number"
                    />
                </div>
            </div>
            <div className="options-buttons__block-line"></div>
            <button onClick={handleDelete} type="submit" className="options-timesleeps__block-delete">
                <img src={cross} alt="" />
            </button>
        </div>
    )
}

export default Timesleeps
