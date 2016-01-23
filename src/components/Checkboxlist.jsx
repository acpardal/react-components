import React from 'react';
import Checkbox from './Checkbox.jsx';

class Checkboxlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const checkboxs = this.props.list.map((item) => {
      return <Checkbox key={item} name={item}/>;
    });
    return (
      <div>
        {checkboxs}
      </div>
    );
  }
}
Checkboxlist.propTypes = {
  list: React.PropTypes.array,
};
Checkboxlist.defaultProps = { list: [] };
module.exports = Checkboxlist;
