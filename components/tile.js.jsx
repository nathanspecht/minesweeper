(function(React) {
  'use strict';

  React.Tile = React.createClass({
    getInitialState: function () {
      return (
        { position: this.props.pos }
      );
    },

    handleClick: function (e) {
      var clicked = e.currentTarget;
      this.props.update(this.state.position, !e.altKey);
    },

    render: function () {
      var klass;
      var displayText;

      if (this.props.tileObj.flagged) {
        klass = "flagged";
        displayText = "⚑";
      } else if (this.props.tileObj.bombed && this.props.tileObj.explored) {
        klass = "bombed";
        displayText = "☀";
      } else if (this.props.tileObj.explored) {
        var bombCount = this.props.tileObj.adjacentBombCount();
        klass = bombCount > 0 ? "number" : "empty";
        displayText = bombCount > 0 ? bombCount : "";
      } else {
        klass = "unexplored";
        displayText = "";
      }

      var classString = "tile " + klass;

      return(
        <div className={ classString } onClick={ this.handleClick }>
          { displayText }
        </div>
      );
    }
  });

}(window.React));
