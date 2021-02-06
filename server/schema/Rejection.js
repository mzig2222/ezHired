import SimpleSchema from 'simpl-schema';

const Rejection = new SimpleSchema({
  reason: String,
  date: {
    type: Date,
    defaultValue: new Date()
  }
});

export default Rejection;
