import React from "react";

class Header extends React.Component {
  render(){  
    return <h1>{  /*text goes here*/
      this.props.text
       //"🙌🏾Hello World🙌🏾"
    }</h1>;
  }
}
export default Header;
