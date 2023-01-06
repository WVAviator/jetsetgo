import { Typography } from '@mui/material';
import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_13_2)">
            <path
              d="M5.55551 10.2222L10.6666 11.6978L16.2844 7.61777L8.22218 7.84888C8.14324 7.85319 8.06673 7.87767 7.99996 7.91999L5.44885 9.38666C5.36949 9.43062 5.30515 9.49739 5.26415 9.57832C5.22315 9.65924 5.20737 9.75061 5.21886 9.8406C5.23035 9.93059 5.26857 10.0151 5.32859 10.0831C5.38861 10.1511 5.46766 10.1996 5.55551 10.2222V10.2222Z"
              fill="white"
            />
            <path
              d="M30.6844 5.65332L25.0844 4.44444C24.6135 4.34219 24.126 4.34246 23.6552 4.44522C23.1843 4.54798 22.7411 4.75082 22.3555 5.03999L5.43997 17.3333L1.37775 17.1555C1.14507 17.1476 0.91578 17.213 0.722263 17.3424C0.528745 17.4719 0.380774 17.6588 0.299243 17.8769C0.217711 18.095 0.20674 18.3332 0.267877 18.5578C0.329014 18.7824 0.459171 18.9822 0.639969 19.1289L4.59552 22.2667C4.66064 22.3192 4.73815 22.3541 4.82064 22.3681C4.90313 22.3821 4.98783 22.3747 5.06664 22.3467C6.19552 21.9111 10.4 19.68 15.3689 16.9511L16.3644 27.1822C16.3729 27.2708 16.4053 27.3554 16.4583 27.4269C16.5114 27.4985 16.5829 27.5541 16.6652 27.588C16.7475 27.6218 16.8375 27.6326 16.9255 27.619C17.0135 27.6055 17.0961 27.5681 17.1644 27.5111L19.3866 25.6622C19.5083 25.5602 19.5901 25.4186 19.6177 25.2622L21.7244 13.4489C25.28 11.4755 28.6755 9.56444 31.0666 8.21332C31.3148 8.0783 31.5154 7.87026 31.6414 7.6174C31.7673 7.36453 31.8125 7.07906 31.7708 6.79966C31.7291 6.52026 31.6025 6.26043 31.4081 6.05538C31.2138 5.85034 30.9612 5.70998 30.6844 5.65332V5.65332Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_13_2">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <Typography variant="h6" noWrap component="div" fontFamily={'Alata'}>
        JetSetGo
      </Typography>
    </div>
  );
};

export default Logo;
