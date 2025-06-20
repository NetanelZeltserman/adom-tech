import { Field, ErrorMessage } from 'formik';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  as?: string;
  placeholder?: string;
  rows?: number;
  errors: any;
  touched: any;
}

export default function FormField({
  id,
  name,
  label,
  type = 'text',
  as,
  placeholder,
  rows,
  errors,
  touched
}: FormFieldProps) {
  const hasError = errors[name] && touched[name];
  
  const fieldClasses = `w-full px-6 py-4 bg-[#2A2A2A] border rounded-lg text-white placeholder-white/40 focus:outline-none ${as === 'textarea' ? 'resize-vertical' : ''} ${
    hasError ? 'border-red-500' : 'border-white/10'
  }`;

  return (
    <div>
      <label htmlFor={id} className="block text-white font-semibold mb-3">
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type={type}
        as={as}
        placeholder={placeholder}
        rows={rows}
        className={fieldClasses}
      />
      <ErrorMessage name={name} component="div" className="text-red-400 text-sm mt-2" />
    </div>
  );
}
