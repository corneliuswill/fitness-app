import React, { Component } from 'react';
import _ from 'lodash';
import './workout-plan.css'

export default class WorkoutPlan extends Component {
    state = {
        addFormVisible: false,
        addFormValue: "",
        workout: '',
        workouts: ["Bench Press", "Squats", "Curls", "Push Ups", "Sit Ups"]
    }

    renderWorkouts() {
        return _.map(this.state.workouts, (workout, index) => <li key={index}><a href="#" className="workout-item">{workout}</a></li>);
    }

    renderAddForm = () => {
        const { addFormVisible, addFormValue } = this.state;
        if (addFormVisible) {
        return (
        <div id="todo-add-form" className="col s10 offset-s1">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
               <input
                value={addFormValue}
                onChange={this.handleInputChange}
                id="toDoNext"
                type="text"
              />
              <label htmlFor="toDoNext">What To Do Next</label>
            </div>
          </form>
        </div>
        )     
        }   
    }
    render() {

        return (
            <div className="workout-plan">
                {this.renderAddForm()}
                {/*<div><h2>Workout Plan</h2></div>*/}
                <div className="date"><h3>{new Date().toDateString()}</h3></div>
                {/*<div>
                    <input type="text"/>
                    <button className="" onclick="e => this.handleAddWorkout()">Add Workout</button>
                </div>*/}
                <ul className="workout-list">
                {this.renderWorkouts()}
                </ul>
            </div>
        );
    }
}