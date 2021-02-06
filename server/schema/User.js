import SimpleSchema from 'simpl-schema';

const User = new SimpleSchema({
  name: {
    type: String
  },
  joinDate:  {
    type: Date,
    defaultValue: new Date()
  }
})
