import React from "react";
import ReactDOM from "react-dom";

// import Layout from "./components/Layout";

function Cat(props) {
	return <h1>Hello Kitty {props.name}!</h1>;
}
ReactDOM.render(
	<Cat name="Smith"/>,
	document.getElementById('app')
);

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	render() {
		return (
			<div>
				<h1>Oh! Mr.Component!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
	tick() {
	    this.setState({
			date: new Date()
	    });
	}
}
ReactDOM.render(
	<div>
		<Clock/>
		<Clock/>
	</div>,
	document.getElementById('clock')
);

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button class="btn" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle/>,
  document.getElementById('toggle')
);

const userInfo = {
	logined: true,
	name: 'Jerry'
};
class UserInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logined : props.userInfo.logined,
			name : props.userInfo.name
		};
	}
	render() {
		let say = null;
		if (this.state.logined == true) {
			say = (
				<div>
					<h3>You have logined in!</h3>
					<p>HoHo!</p>
				</div>
			);
		}else{
			say = (
				<div>
					<h3>You have not login in!</h3>
					<p>MEME!</p>
				</div>
			);
		}
		return (
			<div>
				<h2>你好！{this.state.name}</h2>
				{say}
				<div class="btn btn-success" onClick={this.clickHandeller}>click me me me!</div>
			</div>
		)
	}
	clickHandeller = () => {
		this.setState(
			(prevState, props) => ({
				logined : !prevState.logined
			})
		)
	}
}
ReactDOM.render(
	<UserInfo userInfo={userInfo}/>,
	document.getElementById('userInfo')
);

const numbers = [1, 2, 3, 4, 5];
class NumberList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers : props.numbers
		}
	}
	render() {
		// const listItems = this.state.numbers.map((number, index) =>
		// 	<li key={index}>{number}</li>
		// );
		return (
			<ul>
				{/* {listItems} */}
				{this.state.numbers.map((number, index) =>
					<li key={index}>{number}</li>
				)}
			</ul>
		)
	}
}
ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('numberList'));

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please input the value of every items'
		}
	}
	render() {
		return (
			<form action="/">
				<h3>Hi! I am a form!</h3>
				<p><input type="text" name="name" placeholder="Please input something!"/></p>
				<p><input type="text" name="age" placeholder="Please input your age!"/></p>
				<p><textarea name="desc" placeholder="Please describe yourself!"></textarea></p>
			</form>
		)
	}
}
ReactDOM.render(<Form/>, document.getElementById('form'));

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
  	event.preventDefault();
  	alert('Your favorite flavor is: '
  		+ this.state.isGoing
  		+ ' '
  		+ this.state.numberOfGuests
  		+ ' '
  		+ this.name.value
  		);
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <label>
	        Name:
	        <input
	          defaultValue="Bob"
	          type="text"
	          ref={(input) => this.name = input} />
	     </label>
        <input class="btn btn-primary" type="submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}
ReactDOM.render(<Reservation/>, document.getElementById('multiForm'));
// ReactDOM.render(<Layout/>, app);