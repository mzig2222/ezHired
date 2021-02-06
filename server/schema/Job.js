import SimpleSchema from 'simpl-schema';
import CompanySchema from './Company';
import ApplicationSchema from './Application';
import AppliedSchema from './Applied';
import OfferSchema from './Offer';
import RejectionSchema from './Rejection';

const Job = new SimpleSchema({
  user: {
    type: String,
    required: true
  },
  description: String,
  company: {
    type: CompanySchema,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  application: ApplicationSchema,
  applied: AppliedSchema,
  offer: OfferSchema,
  rejection: RejectionSchema,
  favorited: {
    type: Boolean,
    defaultValue: false
  },
  status: {
    type: String,
    allowedValues: ['application', 'applied', 'finalized']
  }
}, { requiredByDefault: false });

export default Job;
