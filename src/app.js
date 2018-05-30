import React, { Component } from 'react';
import AppHeader from './components/app-header/app-header';
import AppMenu from './components/app-menu/app-menu';
import WorkoutPlan from './components/workout-plan/workout-plan';
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader title="Daily Workout Plan"/>
        <AppMenu/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <WorkoutPlan/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
