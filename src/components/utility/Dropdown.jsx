import React from 'react';

const FilterDropdown = ({ filterType, selectedDate, handleDateChange }) => {
    return (
        <div style={styles.dropdownContainer}>
            <label style={styles.label}>{filterType}</label>
            <select
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                style={styles.select}
            >
                <option value="">All Dates</option>
                <option value="today">Today</option>
                <option value="lastWeek">Last Week</option>
                <option value="lastMonth">Last Month</option>
                <option value="older">Older</option>
            </select>
        </div>
    );
};

const styles = {
    dropdownContainer: {
        marginBottom: '10px',
    },
    label: {
        padding: '10px',
        marginRight: '8px',
        fontSize: '14px',
    },
    select: {
        padding: '8px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
};

export default FilterDropdown;
