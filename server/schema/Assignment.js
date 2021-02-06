import SimpleSchema from 'simpl-schema';

const Assignment = new SimpleSchema({
  deadline: Date,
  description: {
    type: String,
    optional: true
  },
  completed: {
    type: Boolean,
    defaultValue: false
  }
});

export default Assignment;
