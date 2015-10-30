(function(React) {
  'use strict';
  React.MinesweeperGame = React.createClass ({
    getInitialState: function () {
      return {
        board: new window.Minesweeper.Board(20, 50),
        over: false,
        won: false
      };
    },

    newGame: function () {
      this.setState({ board: new window.Minesweeper.Board(20, 20),
                      over: false,
                      won: false });
    },

    updateGame: function(pos, revealed) {
      var board = this.state.board;
      var tile = board.grid[pos[0]][pos[1]];

      if (revealed) {
        tile.explore();
        board.grid[pos[0]][pos[1]] = tile;
        this.setState({ board: board, won: false, over: false });
      } else {
        tile.toggleFlag();
        board.grid[pos[0]][pos[1]] = tile;
        this.setState({ board: board, won: false, over: false });
      }

      if (this.state.board.won()) {
        this.setState({ won: true, over: true });
      } else if (this.state.board.lost()) {
        this.setState({ won: false, over: true });
      }

    },

    render: function () {
      var active;
      var won;

      if (this.state.over) {
        active = "active";

        if (this.state.won) {
          won = "won";
        }
      }

      return (
        <div>
          <React.Board board={ this.state.board } update={ this.updateGame }/>
          <React.Modal active={ active } won={ won } newGame={ this.newGame }/>
        </div>
      );
    }
  });

}(window.React));
