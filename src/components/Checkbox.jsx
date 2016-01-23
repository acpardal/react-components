import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { checked: this.props.initialCheckbox };
  }
  handleClick() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <input type="checkbox" title={this.props.name} onChange={this.handleClick}/>
        Checkbox checked: {this.state.checked.toString()}
      </div>
    );
  }
}
Checkbox.propTypes = {
  name: React.PropTypes.string,
  initialCheckbox: React.PropTypes.bool,
};
Checkbox.defaultProps = { initialCheckbox: false };
module.exports = Checkbox;
