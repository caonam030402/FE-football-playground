import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isHidden, setIsHidden] = React.useState(true);

    return (
      <div className="relative">
        <input
          type={isHidden ? 'password' : 'text' || type}
          className={cn(
            'flex h-10 w-full rounded-full placeholder:font-normal border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' &&
          (isHidden ? (
            <Eye
              onClick={() => setIsHidden(false)}
              size={17}
              className="absolute bottom-1/2 right-[2%] translate-y-1/2 cursor-pointer opacity-80"
            />
          ) : (
            <EyeOff
              size={17}
              onClick={() => setIsHidden(true)}
              className="absolute bottom-1/2 right-[2%] translate-y-1/2 cursor-pointer opacity-80"
            />
          ))}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
