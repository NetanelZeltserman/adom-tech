import { Formik, Form, type FormikHelpers } from 'formik';
import { object, string } from 'yup';

import Button from '@/components/Button';
import FormField from '@/components/FormField';

const validationSchema = object({
  name: string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: string()
    .email('Invalid email address')
    .required('Email is required'),
  message: string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const handleSubmit = (_values: typeof initialValues, { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>) => {
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-[#1E1E1E] rounded-xl border border-white/5 p-8 md:p-12">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-6">
            <FormField
              id="name"
              name="name"
              label="Name"
              errors={errors}
              touched={touched}
            />

            <FormField
              id="email"
              name="email"
              label="Email"
              type="email"
              errors={errors}
              touched={touched}
            />

            <FormField
              id="message"
              name="message"
              label="Message"
              as="textarea"
              placeholder="Tell us more about your business or project..."
              rows={6}
              errors={errors}
              touched={touched}
            />

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full md:w-auto mx-auto block text-lg font-bold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>

        <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-white/60 text-sm text-center leading-relaxed">
                This site is protected by reCAPTCHA and the Google
                {' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-red-400 transition-colors">
                Privacy Policy
                </a>
                {' '}
                and
                {' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-red-400 transition-colors">
                Terms of Service
                </a>
                {' '}
                apply.
            </p>
        </div>
    </div>
  );
} 