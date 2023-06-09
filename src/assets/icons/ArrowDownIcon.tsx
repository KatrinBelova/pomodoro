import { FC } from 'react';

interface Props {
  color: string;
}

const ArrowDownIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7.5L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 7.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownIcon;
