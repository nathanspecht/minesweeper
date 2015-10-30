(function(React) {
  'use strict';

  React.Modal = React.createClass({
    render: function() {
      var className = this.props.active ? "modal is-active" : "modal";
      var endText = this.props.won ? "You win" : "You lose";

      return(
        <div className={ className }>
          <h1>{ endText }</h1>
          <span className="replay" onClick={ this.props.newGame }>
            Play again.
          </span>
        </div>
      );
    }
  });

}(window.React));
