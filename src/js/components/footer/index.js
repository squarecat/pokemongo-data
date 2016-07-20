import React from 'react';

export default () => (
  <div className="footer">
    <div className="credit">
      Credit to <a href="https://www.reddit.com/user/__isitin__">/u/__isitin__</a> and the <a href="https://www.reddit.com/r/pokemongodev/">/r/pokemongodev</a> community
    </div>
    <div className="bugs">
      <a href="https://github.com/squarecat/pokemongo-data/issues">Report issues </a> or <a href="https://github.com/squarecat/pokemongo-data">contribute!</a>
    </div>
    <div className="company">
      <span>
        Made with
        <span className="fa-stack">
          <i className="footer__heart fa fa-heart fa-stack-1x"></i>
          <i className="footer__heart footer__heart--red fa fa-heart fa-stack-1x"></i>
        </span>
        by
        <a href="http://squarecat.io">
          <span className="footer__cat icon icon-whole-cat"></span>
        </a>
      </span>
    </div>
    <div className="referral">
      <a href="https://mixpanel.com/f/partner" rel="nofollow"><img src="//cdn.mxpnl.com/site_media/images/partner/badge_blue.png" alt="Mobile Analytics" /></a>
    </div>
  </div>
);
