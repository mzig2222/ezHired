import SimpleSchema from 'simpl-schema';

const Compensation = new SimpleSchema({
  interval: {
    type: String,
    allowedValues: ['hourly', 'salary'],
  },
  amount: Number
});

export default Compensation;
