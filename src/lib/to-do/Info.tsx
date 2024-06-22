import { ReactNode } from 'react';
import ReturnButton from '../ReturnButton';

export default function InfoBox({ needReturn, children }: { needReturn: boolean; children: ReactNode }) {
  return (
    <div className="info-box">
      <p>{children}</p>
      {needReturn && <ReturnButton />}
    </div>
  );
}
