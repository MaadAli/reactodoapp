class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleEditOption = this.handleEditOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleAddOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  handleEditOption(id) {
    let text;
    this.state.options.forEach((element) => {
      if(element.id === id) {
        text = element.text
      }
    });
    const newtext = prompt("Edit your name please", text);
    const newOptions = this.state.options.map((option) => {
      if(option.id === id ) {
        option['text'] = newtext;
        return option;
      }
      else {
        return option;
      }
    })
    this.setState((prevState) => {
      return {
        options: newOptions
      };
    });
  }


  render() {
    return (
      <div>
        <div>Todo App</div>
        <Options
          options={this.state.options}
          handleEditOption={this.handleEditOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option, index) => <Option key={index} option={option} id={index} handleEditOption={this.props.handleEditOption}
           />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.editOpts = this.editOpts.bind(this);
    this.state = {
      error: undefined
    };
  }
  editOpts() {
    this.props.handleEditOption(this.props.id);

  }
  render() {
    return (
      <div>
        <input type="checkbox"></input>
        {this.props.option}
        { <button 
        // onClick={this.editOpts()}
        >Edit</button> }
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));
