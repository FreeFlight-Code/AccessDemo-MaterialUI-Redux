import React, { Component } from 'react';
import '../../styles/AddJob.css'

class AddJob extends Component {
    render() {
        return (
            <div id='AddJobContainer'>
                <label for="date">Date</label>
                <input id='date' type="date"/>
                <label for="company_name">Company</label>
                <input id='company_name' type="text"/>
                <label for="estimate_amount">Estimate Amount</label>
                <input id='estimate_amuont' type="text"/>
                <label for="materials">Materials</label>
                <input id='materials' type="text"/>
                <label for="notes">Notes</label>
                <input id='notes' type="text"/>
                <button type="submit">Add Job</button>
                <button>Cancel</button>
            </div>
        );
    }
}

export default AddJob;