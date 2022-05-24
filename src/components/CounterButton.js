import React, {Component} from 'react';

class CounterButton extends Component {
   constructor() {
      super();
      this.state = {
         count: 0
      }
   }

   shouldComponentUpdate(nextProps, nextState) {
      if(this.state.count !== nextState.count){
         return true
      }
      return false
   }

   updateCount =() => {
      this.setState( state => {
         return {count: this.state.count +1}
      })
   }

   render() {
      console.log('CounterButton');
      return (
         <button color={this.props.color} onClick={this.updateCount}>
            count: {this.state.count}
         </button>
      )
   }
}


export default CounterButton;