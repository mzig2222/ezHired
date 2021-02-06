import SimpleSchema from 'simpl-schema'

Interview = new SimpleSchema({
  date:	Date,
  location: {
    type: String,
    optional: true
  },
  notes: {
    type: String,
    optional: true
  },
  contact: {
    type: String,
    optional: true
  }
  
});


export default Interview;
