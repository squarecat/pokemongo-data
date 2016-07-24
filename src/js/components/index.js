import React from 'react';
import Header from './header';
import Footer from './footer';

export default React.createClass({

  render() {
    document.getElementById('body').style.overflow = this.props.params.id ? 'hidden' : 'auto';
    return (
      <div className="app" data-has-child-overlay={ !!this.props.params.id }>
        <Header />
          { this.props.children }
        <Footer />
      </div>
    );
  }

});
