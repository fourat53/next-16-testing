"use client";

import {
  Select as RootSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";

interface SelectProps {
  value?: string;
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({
  placeholder,
  label,
  options,
  onChange,
  value,
}: SelectProps) {
  return (
    <div className="space-y-1.5">
      <p className="pl-1 font-semibold text-sm">{label}</p>
      <RootSelect value={value}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton />
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            <SelectSeparator />
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                onClick={() => onChange?.(option.value)}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectScrollDownButton />
        </SelectContent>
      </RootSelect>
    </div>
  );
}
