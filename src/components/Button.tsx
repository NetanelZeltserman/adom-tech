import { Link } from 'react-router-dom';
import ConditionalWrapper from '@/components/ConditionalWrapper';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  to?: string;
}

export default function Button({
  variant,
  children,
  className = '',
  to,
  ...props
}: ButtonProps) {
  const baseStyles = 'hover:cursor-pointer font-semibold py-3 px-12 rounded-full transition duration-300';
  const variantStyles = {
    primary: 'bg-gradient-to-br from-[#E82828FF] via-[#B91C1C] to-[#D42525FF] hover:from-[#EF4444] hover:via-[#DC3838FF] hover:to-[#B32A2AFF] focus:ring-2 focus:ring-[#DC4D4DFF] text-white shadow-lg hover:shadow-xl transition-all duration-300',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-black',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <ConditionalWrapper
      condition={Boolean(to)}
      wrapper={(children) => <Link to={to as string}>{children}</Link>}
    >
      <button
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    </ConditionalWrapper>
  );
}
