import React from 'react';

class DateMirror extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render() {
        return (
            <div className='Date col-sm'>
                <h1>{this.state.date.toLocaleDateString("fr-FR")}</h1>
            </div>
        );
    }
}

export default DateMirror;