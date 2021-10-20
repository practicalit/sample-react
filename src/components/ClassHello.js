import React from 'react';
class ClassHello extends React.Component{

    constructor(props) {
        super(props);
        this.label = "this is the greatest label ever";
        this.state = {
            name: "jenny",
            email: "initial@thepracticalit.com"
        };

        this.data = "the goodie data";

        //this.textHandler = this.textHandler.bind(this);
        console.log("Wait, hold your horses.")
    } 

    componentDidMount() {
        console.log("I am ready and happy to be used :)")
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

    //if you are using this kind of function declaration don't forget to bind
    //this into the method, see in the constructor for the fix
    // textHandler(event) {
    //     console.log(event.target.value);
    //     let state = this.state;
    //     state.name = event.target.value;
    //     this.setState(state);
    // }

    textHandler = (event) => {
        console.log(event.target.value);
        let state = this.state;
        state.name = event.target.value;
        this.setState(state);
    }

    render() {
        return (
            <>
                <div>Property used in class: {this.props.commonData.name} 
                {this.state.email}
        <div>and simple data is {this.data}</div>
                </div>
                <div>Name is: {this.state.name}</div>
                <div><input onKeyUp={this.textHandler} type="text" /></div> 
                <div>I am class component and label is {this.label}</div>
                <p style={this.getStyle().sampleStyle}> and more paragraph in class</p>

                <div onClick={this.clickHandler}>Click for miracle</div>
            </>
        )
    }
}

export default ClassHello