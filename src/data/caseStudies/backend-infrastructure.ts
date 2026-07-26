import type { CaseStudy } from '@/types/caseStudy'

export const BACKEND_INFRASTRUCTURE_CASE_STUDY: CaseStudy = {
  slug: 'backend-infrastructure',
  executiveSummary:
    'Backend integration and deployment workflows for gloom-dev.com, a production full-stack e-commerce platform built on the MERN stack, including Razorpay payment gateway integration.',
  problem: [
    'The platform needed a secure, working backend and deployment pipeline built from the ground up within a tight timeframe. It was delivered within the first month of the internship.',
  ],
  implementation: [
    {
      heading: 'What was built',
      paragraphs: [
        'A scalable full-stack e-commerce platform on the MERN stack with secure API and database architecture, plus Razorpay payment gateway integration validated with 50+ test transactions in staging before going live.',
      ],
    },
  ],
  lessonsLearned: [
    'Validating payment integration thoroughly in staging, with a real volume of test transactions, mattered more than moving fast to production. Payment flows are one of the few places where a bug is directly costly.',
  ],
}
