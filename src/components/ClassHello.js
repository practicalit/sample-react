import React from 'react';
class ClassHello extends React.Component{

    constructor(props) {
        super(props);
        this.label = "this is the greatest label ever";
    } 

    getStyle() {
        return {
            sampleStyle: {
                color: "brown",
                border: "1px solid red"
            }
        }
    }

    clickHandler(event) {
        console.log("You have clicked the div, how dare you.")
    }

    render() {
        return (
            <>
                <div>I am class component and label is {this.label}</div>
                <p style={this.getStyle().sampleStyle}> and more paragraph in class</p>

                <div onClick={this.clickHandler}>Click for miracle</div>
            </>
        )
    }
}

export default ClassHello