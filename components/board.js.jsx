(function(React) {
  'use strict';

    React.Board = React.createClass({
      render: function () {
        return (
          <div className="board">
            {
              this.props.board.grid.map(function(row, rowIdx) {
                return(
                    <div> {
                      row.map(function(tile, colIdx) {
                        return(
                          <React.Tile tileObj={ tile }
                                      pos={ [rowIdx, colIdx] }
                                      update={ this.props.update }/>
                        );
                      }.bind(this))
                    } </div>
                  );
              }.bind(this))
            }
          </div>
        );
      }
    });

}(window.React));
