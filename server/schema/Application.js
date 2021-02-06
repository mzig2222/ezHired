import SimpleSchema from 'simpl-schema';

Application = new SimpleSchema({
  deadline: {
    type: Date,
  },
  link: String
});

export default Application;
