import React from 'react';

class Home extends React.Component {
  render() {
    let { user: { uid } } = this.props;
    return (
      <div>
        {`Welcome ${uid}`}
      </div>
    )
  }
}

export default Home;