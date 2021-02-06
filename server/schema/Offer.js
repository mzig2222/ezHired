import SimpleSchema from 'simpl-schema';
import CompensationSchema from './Compensation';

const Offer = new SimpleSchema({
  compensation: CompensationSchema,
  benefits: String,
  deadline: Date
}, { requiredByDefault: false });

export default Offer;
