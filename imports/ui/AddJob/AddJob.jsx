import React, { Component } from 'react';
import "./AddJob.css";
import { withTracker } from 'meteor/react-meteor-data';

import { Jobs } from '../../api/jobs.js';

class AddJob extends Component {
  state = {
    company: "",
    position: "",
    status: "application"
  }

  handleSubmit = () => {
    const job = {
      user: 'feces',
      company: {
        name: this.state.company
      },
      position: this.state.position,
      status: this.state.status,
      application: null,
      applied: null,
      offer: null,
      rejection: null,
    };
    Jobs.insert(job);
  }

  test = () => {
    console.log("FUCKING WORK YOU PIECE OF SHIT");
  }

  render() {
    if (this.props.loading) {
      return(<div>loading</div>);
    }
    return(
      <div className="addJob">
      <h2 className="pageHeader">ADD JOB</h2>
      <form>
        <p className = "label">Company</p>
        <input className = "addForm"
          type='text'
          name='company'
          placeHolder='Company'
          required
          onChange={(e) => this.setState({company: e.target.value})}
        />
        <p className = "label">Position</p>
        <input className = "addForm"
          type='text'
          name='position'
          placeHolder = 'Position'
          required
          onChange={(e) => this.setState({position: e.target.value})}
        />
        <br/>
        <p className = "label">Status</p>
        <select className = "addForm" value={this.state.status} onChange={(e) => this.setState({status: e.target.value})}>
              <option value="application">Not Applied</option>
              <option value="applied">Applied</option>
              <option value="finalized">Finalized</option>
        </select>
        <br/>
        <button type="button" id="completed-task" className="addSubmit" onClick = {() => this.handleSubmit()}>
            Next
        </button>
      </form>
      </div>

    );
  }
}

export default withTracker(() => {
  return {
    jobs: Jobs.find({}).fetch(),
  };
})(AddJob);
