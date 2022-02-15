import React from "react";
import Board from "./Board";
import BtnAction from "./BtnAction";
import calculateWinner from "../../utils/utils";

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0, 
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  handleClickResetBoard(){
    this.setState(
      {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
      }
    ); 
  }
/*
  handleClickBackStep(){

  }
*/
  renderBtnActionReset(){
    return(
      <BtnAction
        class="btn btn-warning btn-sm"
        value={'Reset play'}
        onClick={()=>this.handleClickResetBoard()}
      />
    );
  }

  renderBtnActionBack(current){
    let classBtn = "btn btn-secondary btn-sm disabled";
    if(current > 0){
      classBtn = "btn btn-success btn-sm";   
    }
    return(
      <BtnAction
        class={classBtn}
        value={'<-'}
        onClick={()=>this.jumpTo(current-1)}
      />
    );
  }

  renderBtnActionNext(current,total){
    let classBtn = "btn btn-secondary btn-sm disabled";
    if(current+1 < total){
      classBtn = "btn btn-success btn-sm";   
    }
    return(
      <BtnAction
        class={classBtn}
        value={'->'}
        onClick={()=>this.jumpTo(current+1)}
      />
    );
  }
  

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="row">
        <div className="col-8">
          <div className="game">
            <div className="game-board">
              <Board
                squares={current.squares}
                onClick={i => this.handleClick(i)}
              />
            </div>
            <div className="game-info">
              <h3 className="status">{status} </h3>             
                <p>
                  <div className="btn-group" role="group">
                    {this.renderBtnActionBack(this.state.stepNumber)}
                    {this.renderBtnActionNext(this.state.stepNumber, this.state.history.length)}
                  </div>
                </p>       
                <p>
                  {this.renderBtnActionReset()}
                </p>                                    
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      
    );
  }
}

export default Game;