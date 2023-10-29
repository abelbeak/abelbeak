import { BellAlertIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div>
      <BellAlertIcon className="h-6 w-6" />
    </div>
  );
}
