import classNames from 'classnames';
import { AiOutlineWarning, AiOutlineCheckCircle } from 'react-icons/ai';

const IconsByType = {
  success: AiOutlineCheckCircle,
  error: AiOutlineWarning,
};

type AlertProps = {
  type: 'success' | 'error';
  message: string;
};

export function Alert({ type, message }: AlertProps) {
  const IconComponent = IconsByType[type];

  return (
    <div
      className={classNames(
        'flex items-center gap-3 rounded-sm p-4 font-semibold',
        type === 'success' && 'bg-success-100 text-success-700',
        type === 'error' && 'bg-error-100 text-error-700',
      )}
    >
      <IconComponent className="h-6 w-6 flex-none" />
      {message}
    </div>
  );
}
