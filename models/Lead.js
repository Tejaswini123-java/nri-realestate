import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    countryCode: { type: String, trim: true, default: '' },
    country: { type: String, trim: true, default: '' },
    message: { type: String, trim: true, default: '' },
    source: {
      type: String,
      enum: ['popup', 'contact'],
      required: true,
    },
    // Which project / locality this enquiry relates to (blank = general enquiry)
    project: { type: String, trim: true, default: '' },
    enquiredFor: { type: String, trim: true, default: '' },
    // Basic metadata, useful for follow-up / lead scoring
    page: { type: String, default: '' },
    userAgent: { type: String, default: '' },
    // Delivery status, useful for debugging CRM / email issues from the DB
    crmSynced: { type: Boolean, default: false },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
)

// Prevent model overwrite errors in Next.js dev hot-reload
export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema)
