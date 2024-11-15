import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const DateFilters = ({toggle,isOpen}) => {
    const now = new Date();
    const maxDate = now.toISOString().split('T')[0];
    const maxMonth = `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).slice(-2)}`;
    const maxWeek = now.toISOString().substring(0, now.toISOString().indexOf('T'));
    
    const [selectedDate, setSelectedDate] = useState(maxDate);
    const [selectedMonth, setSelectedMonth] = useState(maxMonth);
    const [selectedWeek, setSelectedWeek] = useState(maxWeek);
    const [selectedYear, setSelectedYear] = useState(now.getFullYear());

    

    const inputStyle = {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%'
    };

    return (
        <div>
            
            <Collapse isOpen={isOpen}>
                <div style={{ padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Date:</label>
                        <input type="date" value={selectedDate} max={maxDate} onChange={e => setSelectedDate(e.target.value)} style={inputStyle} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Month:</label>
                        <input type="month" value={selectedMonth} max={maxMonth} onChange={e => setSelectedMonth(e.target.value)} style={inputStyle} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Week:</label>
                        <input type="week" value={selectedWeek} max={maxWeek} onChange={e => setSelectedWeek(e.target.value)} style={inputStyle} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Year:</label>
                        <input type="number" value={selectedYear} max={now.getFullYear()} onChange={e => setSelectedYear(e.target.value)} style={{...inputStyle, maxWidth: '100px'}} />
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default DateFilters;
