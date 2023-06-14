import { FC } from 'react';

interface Props {
  color: string;
}

const PauseIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 2V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H15.5C14.9696 24 14.4609 23.7893 14.0858 23.4142C13.7107 23.0391 13.5 22.5304 13.5 22V2C13.5 1.46957 13.7107 0.960859 14.0858 0.585786C14.4609 0.210714 14.9696 0 15.5 0H20C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2ZM6.5 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H6.5C7.03043 24 7.53914 23.7893 7.91421 23.4142C8.28929 23.0391 8.5 22.5304 8.5 22V2C8.5 1.46957 8.28929 0.960859 7.91421 0.585786C7.53914 0.210714 7.03043 0 6.5 0Z"
        fill={color}
      />
    </svg>
  );
};

export default PauseIcon;
