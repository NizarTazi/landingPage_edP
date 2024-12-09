import clsx from 'clsx';
import { GiftIcon } from 'lucide-react';

/**
 * A component meant to be used in the landing page.
 *
 * Use this to show a discount or offer to encourage users to take action, typically used under call to action buttons.
 */
export const LandingDiscount = ({
  className,
  discountValueText = '$200 off',
  discountDescriptionText = '',
  animated = true,
}: {
  className?: string;
  discountValueText: string;
  discountDescriptionText?: string;
  animated?: boolean;
}) => {
  return (
    <p className={clsx('flex flex-wrap gap-1 items-center text-xs pl-10', className)}>
      <span className="text-green-500 flex gap-1 items-center flex-shrink-0">
        <GiftIcon
          className={clsx(
            'w-5 h-10 relative -top-0.5 items-center ',
            animated ? 'animate-pulse' : '',
          )}
        />{' '}
        <span className="font-bold">{discountValueText}</span>
      </span>{' '}
      {discountDescriptionText}
    </p>
  );
};
