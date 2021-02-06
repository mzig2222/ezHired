import SimpleSchema from 'simpl-schema';
import AssignmentSchema from './Assignment';
import InterviewSchema from './Interview';

const Applied = new SimpleSchema({
  interviews: [InterviewSchema],
  assignments: [AssignmentSchema]
});

export default Applied;
