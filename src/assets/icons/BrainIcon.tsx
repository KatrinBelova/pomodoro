import { FC } from 'react';

interface Props {
  color: string;
}

const BrainIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 13.5C30.0001 12.1753 29.6242 10.8777 28.9162 9.75811C28.2081 8.63849 27.1969 7.74277 26 7.17503V6.00003C25.9991 4.71145 25.5834 3.45738 24.8144 2.42342C24.0454 1.38946 22.9639 0.630551 21.73 0.258993C20.4962 -0.112565 19.1755 -0.0770251 17.9634 0.360353C16.7513 0.797731 15.7123 1.61371 15 2.68753C14.2877 1.61371 13.2486 0.797731 12.0365 0.360353C10.8244 -0.0770251 9.50374 -0.112565 8.26989 0.258993C7.03603 0.630551 5.95458 1.38946 5.18557 2.42342C4.41656 3.45738 4.00085 4.71145 3.99996 6.00003V7.17503C2.80288 7.74264 1.79146 8.6383 1.08322 9.75793C0.374986 10.8776 -0.000976562 12.1752 -0.000976562 13.5C-0.000976562 14.8249 0.374986 16.1225 1.08322 17.2421C1.79146 18.3618 2.80288 19.2574 3.99996 19.825V20C4.00085 21.2886 4.41656 22.5427 5.18557 23.5766C5.95458 24.6106 7.03603 25.3695 8.26989 25.7411C9.50374 26.1126 10.8244 26.0771 12.0365 25.6397C13.2486 25.2023 14.2877 24.3864 15 23.3125C15.7123 24.3864 16.7513 25.2023 17.9634 25.6397C19.1755 26.0771 20.4962 26.1126 21.73 25.7411C22.9639 25.3695 24.0454 24.6106 24.8144 23.5766C25.5834 22.5427 25.9991 21.2886 26 20V19.825C27.1959 19.2561 28.2063 18.3601 28.9142 17.2407C29.6221 16.1214 29.9986 14.8244 30 13.5ZM9.99996 24C9.01309 23.9995 8.06126 23.6341 7.3275 22.9741C6.59373 22.3142 6.12982 21.4063 6.02496 20.425C6.34746 20.4758 6.67349 20.5009 6.99996 20.5H7.99996C8.26518 20.5 8.51953 20.3947 8.70707 20.2071C8.89461 20.0196 8.99996 19.7652 8.99996 19.5C8.99996 19.2348 8.89461 18.9805 8.70707 18.7929C8.51953 18.6054 8.26518 18.5 7.99996 18.5H6.99996C5.82161 18.498 4.68183 18.0799 3.78171 17.3195C2.88158 16.559 2.27896 15.5051 2.08015 14.3436C1.88134 13.1822 2.09913 11.9878 2.69508 10.9713C3.29104 9.95473 4.22686 9.18134 5.33746 8.78753C5.53179 8.71594 5.6995 8.58648 5.81796 8.41661C5.93642 8.24674 5.99995 8.04463 5.99996 7.83753V6.00003C5.99996 4.93916 6.42139 3.92175 7.17154 3.1716C7.92168 2.42146 8.9391 2.00003 9.99996 2.00003C11.0608 2.00003 12.0782 2.42146 12.8284 3.1716C13.5785 3.92175 14 4.93916 14 6.00003V15.5375C12.9052 14.5439 11.4784 13.9955 9.99996 14C9.73475 14 9.48039 14.1054 9.29286 14.2929C9.10532 14.4805 8.99996 14.7348 8.99996 15C8.99996 15.2652 9.10532 15.5196 9.29286 15.7071C9.48039 15.8947 9.73475 16 9.99996 16C11.0608 16 12.0782 16.4215 12.8284 17.1716C13.5785 17.9217 14 18.9392 14 20C14 21.0609 13.5785 22.0783 12.8284 22.8285C12.0782 23.5786 11.0608 24 9.99996 24ZM23 18.5H22C21.7348 18.5 21.4804 18.6054 21.2929 18.7929C21.1053 18.9805 21 19.2348 21 19.5C21 19.7652 21.1053 20.0196 21.2929 20.2071C21.4804 20.3947 21.7348 20.5 22 20.5H23C23.3264 20.5009 23.6525 20.4758 23.975 20.425C23.8928 21.1938 23.5897 21.9222 23.1022 22.5222C22.6147 23.1223 21.9638 23.5682 21.2282 23.806C20.4926 24.0439 19.7038 24.0634 18.9573 23.8624C18.2108 23.6613 17.5386 23.2482 17.0219 22.6731C16.5053 22.098 16.1664 21.3855 16.0462 20.6217C15.9261 19.858 16.0298 19.0759 16.3449 18.3699C16.6599 17.6639 17.1728 17.0643 17.8215 16.6438C18.4702 16.2232 19.2269 15.9996 20 16C20.2652 16 20.5195 15.8947 20.7071 15.7071C20.8946 15.5196 21 15.2652 21 15C21 14.7348 20.8946 14.4805 20.7071 14.2929C20.5195 14.1054 20.2652 14 20 14C18.5215 13.9955 17.0948 14.5439 16 15.5375V6.00003C16 4.93916 16.4214 3.92175 17.1715 3.1716C17.9217 2.42146 18.9391 2.00003 20 2.00003C21.0608 2.00003 22.0782 2.42146 22.8284 3.1716C23.5785 3.92175 24 4.93916 24 6.00003V7.83753C24 8.04463 24.0635 8.24674 24.182 8.41661C24.3004 8.58648 24.4681 8.71594 24.6625 8.78753C25.7731 9.18134 26.7089 9.95473 27.3048 10.9713C27.9008 11.9878 28.1186 13.1822 27.9198 14.3436C27.721 15.5051 27.1183 16.559 26.2182 17.3195C25.3181 18.0799 24.1783 18.498 23 18.5ZM6.49996 13C6.23475 13 5.98039 12.8947 5.79286 12.7071C5.60532 12.5196 5.49996 12.2652 5.49996 12C5.49996 11.7348 5.60532 11.4805 5.79286 11.2929C5.98039 11.1054 6.23475 11 6.49996 11C7.16199 10.9967 7.79597 10.7323 8.2641 10.2642C8.73223 9.79603 8.99668 9.16206 8.99996 8.50003V7.50003C8.99996 7.23481 9.10532 6.98046 9.29286 6.79292C9.48039 6.60539 9.73475 6.50003 9.99996 6.50003C10.2652 6.50003 10.5195 6.60539 10.7071 6.79292C10.8946 6.98046 11 7.23481 11 7.50003V8.50003C11 9.6935 10.5259 10.8381 9.68194 11.682C8.83803 12.5259 7.69344 13 6.49996 13ZM24.5 12C24.5 12.2652 24.3946 12.5196 24.2071 12.7071C24.0195 12.8947 23.7652 13 23.5 13C22.3065 13 21.1619 12.5259 20.318 11.682C19.4741 10.8381 19 9.6935 19 8.50003V7.50003C19 7.23481 19.1053 6.98046 19.2929 6.79292C19.4804 6.60539 19.7348 6.50003 20 6.50003C20.2652 6.50003 20.5195 6.60539 20.7071 6.79292C20.8946 6.98046 21 7.23481 21 7.50003V8.50003C21.0033 9.16206 21.2677 9.79603 21.7358 10.2642C22.204 10.7323 22.8379 10.9967 23.5 11C23.7652 11 24.0195 11.1054 24.2071 11.2929C24.3946 11.4805 24.5 11.7348 24.5 12Z"
        fill={color}
      />
    </svg>
  );
};

export default BrainIcon;
