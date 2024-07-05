import type { PopoverProps } from '@radix-ui/react-popover';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Calendar } from '@/components/atoms/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/atoms/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/select';
import { cn } from '@/lib/utils';

interface IProps extends PopoverProps {
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  date: Date | undefined;
  isIcon?: boolean;
}

export function DatePickerWithPresets({
  setDate,
  date,
  isIcon = true,
  ...props
}: IProps) {
  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'p-0 justify-start text-left font-normal bg-transparent hover:bg-transparent ',
            !date && 'text-muted-foreground',
          )}
        >
          {isIcon && <CalendarIcon className="mr-2 size-4" />}
          <div className="mt-1 opacity-75">
            {date ? (
              <span className="border-b border-zinc-200 py-1">
                {format(date, 'PPP')}
              </span>
            ) : (
              <span>Pick a date</span>
            )}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value, 10)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
