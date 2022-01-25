import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar >
          <Typography 
          variant="h6" >
          <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 2">
            <path id="Vector" d="M61.1758 18.6667C61.1758 20.5333 60.497 22.0444 59.2243 23.1111C57.8667 24.2667 56.2546 24.8 54.2182 24.8C52.8606 24.8 51.4182 24.5333 49.9758 24.0889C48.5334 23.5555 47.1758 22.8444 45.9879 21.8667L48.194 18.5778C50.0606 20.0889 52.097 20.8889 54.3031 20.8889C54.9819 20.8889 55.4909 20.7111 55.8303 20.4444C56.2546 20.1778 56.4243 19.8222 56.4243 19.3778C56.4243 18.9333 56.1697 18.4889 55.6606 18.1333C55.1515 17.7778 54.3879 17.4222 53.3697 17.0667C52.3516 16.7111 51.5879 16.4444 51.0788 16.2667C50.5697 16 49.9758 15.7333 49.297 15.2889C47.9394 14.4 47.2606 13.0667 47.2606 11.3778C47.2606 9.68887 47.9394 8.17776 49.297 7.11109C50.4849 5.86665 52.2667 5.33331 54.3879 5.33331C56.5091 5.33331 58.7152 6.04442 60.8364 7.55554L58.9697 11.1111C57.3576 9.95554 55.8303 9.4222 54.2182 9.4222C52.6061 9.4222 51.8425 9.86665 51.8425 10.7555C51.8425 11.2889 52.097 11.6444 52.6061 11.9111C53.1152 12.1778 53.9637 12.5333 55.0667 12.8889C56.2546 13.2444 57.0182 13.5111 57.5273 13.7778C58.0364 13.9555 58.6303 14.3111 59.3091 14.6667C60.5819 15.4667 61.1758 16.8 61.1758 18.6667Z" fill="#4F4F4F"/>
            <path id="Vector_2" d="M28.1697 14.0444V24.6222H23.0788V5.68887H28.1697V7.8222C29.697 6.13331 31.3939 5.33331 33.3455 5.33331C35.297 5.33331 36.9091 6.04442 38.1818 7.46665C39.4545 8.88887 40.1333 10.7555 40.1333 13.0667V24.5333H35.0424V13.8667C35.0424 10.9333 34.0243 9.51109 31.9879 9.51109C30.9697 9.51109 30.1212 9.86665 29.3576 10.6666C28.5091 11.3778 28.1697 12.5333 28.1697 14.0444Z" fill="#61DC79"/>
            <path id="Vector_3" d="M71.0181 9.42223V17.8667C71.0181 18.5778 71.1878 19.2 71.5272 19.5556C71.8666 20 72.2908 20.1778 72.7999 20.1778C73.7333 20.1778 74.5817 19.7333 75.1757 18.8445L77.0423 22.4889C75.4302 24 73.8181 24.7111 72.0363 24.7111C70.2545 24.7111 68.812 24.0889 67.6242 22.9333C66.4363 21.7778 65.8423 20.0889 65.8423 18.0445V9.33334H63.7211V5.68889H65.8423V0H70.9332V5.68889H75.3454V9.51112H71.0181V9.42223Z" fill="#4F4F4F"/>
            <path id="Vector_4" d="M95.3758 24.2H90.6242V21.8889C89.3515 23.5778 87.6545 24.4667 85.7879 24.4667C83.8364 24.4667 82.2242 23.8445 80.9515 22.6889C79.6788 21.5333 79 20.0222 79 18.0667C79 16.1111 79.6788 14.6889 81.0364 13.7111C82.3939 12.7333 84.2606 12.2889 86.6364 12.2889H90.4545V12.2C90.4545 10.1556 89.4364 9.17778 87.4 9.17778C86.5515 9.17778 85.6182 9.35556 84.6 9.71111C83.5818 10.0667 82.8182 10.5111 82.1394 11.0444L79.6788 7.66667C82.0545 5.88889 84.8545 5 87.9091 5C90.1151 5 91.897 5.53333 93.3394 6.68889C94.7818 7.84445 95.4606 9.62223 95.4606 12.1111V24.2H95.3758ZM90.2848 17V16.1111H87.0606C85.0242 16.1111 84.0061 16.7333 84.0061 18.0667C84.0061 18.7778 84.2606 19.3111 84.7697 19.6667C85.2788 20.0222 85.9576 20.2 86.8909 20.2C87.8242 20.2 88.5879 19.9333 89.2667 19.3111C89.9454 18.7778 90.2848 17.9778 90.2848 17Z" fill="#4F4F4F"/>
            <path id="Vector_5" d="M113.527 21.3333C111.915 23.2 109.964 24.0889 107.503 24.0889C105.127 24.0889 103.091 23.2889 101.479 21.6C99.8667 19.9111 99.0182 17.6889 99.0182 14.9333C99.0182 12.1777 99.8667 9.86663 101.564 8.08885C103.261 6.31107 105.212 5.42218 107.333 5.42218C109.539 5.42218 111.321 6.31107 112.764 8.17774V5.59996H117.855V22.0444C117.855 23.7333 117.6 25.2444 117.006 26.5777C116.412 27.9111 115.648 28.8889 114.715 29.6889C112.848 31.2 110.642 32 108.097 32C106.739 32 105.382 31.7333 103.939 31.2889C102.497 30.8444 101.309 30.2222 100.206 29.3333L102.158 25.3333C103.855 26.6666 105.636 27.2889 107.503 27.2889C109.37 27.2889 110.812 26.8444 111.915 25.8666C113.018 24.9777 113.527 23.4666 113.527 21.3333ZM112.848 14.6666C112.848 13.1555 112.424 12 111.661 11.1111C110.812 10.2222 109.879 9.77774 108.606 9.77774C107.418 9.77774 106.4 10.2222 105.467 11.1111C104.618 12 104.194 13.1555 104.194 14.6666C104.194 16.1777 104.618 17.3333 105.467 18.3111C106.315 19.2889 107.333 19.7333 108.606 19.7333C109.794 19.7333 110.812 19.2889 111.661 18.4C112.424 17.4222 112.848 16.1777 112.848 14.6666Z" fill="#4F4F4F"/>
            <path id="Vector_6" d="M138.473 21.7778C136.436 23.8222 133.976 24.8 131.261 24.8C128.461 24.8 126.17 23.9111 124.388 22.1333C122.606 20.3556 121.673 17.9556 121.673 15.0222C121.673 12.0889 122.606 9.68889 124.473 7.91111C126.339 6.13333 128.461 5.24445 131.006 5.24445C133.552 5.24445 135.673 6.04445 137.37 7.55556C139.152 9.15556 140 11.2889 140 14.0445V16.8889H126.679C126.848 17.9556 127.358 18.7556 128.206 19.3778C129.055 20 130.073 20.3556 131.176 20.3556C132.958 20.3556 134.4 19.7333 135.588 18.4889L138.473 21.7778ZM133.636 10.5778C132.958 9.95556 132.109 9.68889 131.091 9.68889C130.073 9.68889 129.139 10.0444 128.291 10.6667C127.442 11.2889 126.933 12.1778 126.848 13.2445H134.824C134.739 12.0889 134.315 11.2 133.636 10.5778Z" fill="#4F4F4F"/>
            <path id="Vector_7" d="M16.5455 8.17779C15.697 7.37779 14.8485 6.66667 13.8303 6.22223V12.9778C14.0848 13.6 14.1697 14.3111 14.1697 15.1111C14.1697 16.6222 13.7455 17.9556 12.897 18.8445C12.0485 19.7333 10.9455 20.2667 9.67273 20.2667C8.4 20.2667 7.29697 19.8222 6.44848 18.8445C5.6 17.8667 5.09091 16.6222 5.09091 15.1111C5.09091 14.3111 5.17576 13.6 5.4303 12.9778V6.22223C4.49697 6.66667 3.56364 7.37779 2.71515 8.17779C0.933333 10.0445 0 12.3556 0 15.1111C0 17.8667 0.933333 20.1778 2.71515 22.0445C4.58182 23.9111 6.87273 24.8889 9.58788 24.8889C12.3879 24.8889 14.6788 23.9111 16.4606 22.0445C18.3273 20.1778 19.1758 17.8667 19.1758 15.1111C19.1758 12.3556 18.4121 10.0445 16.5455 8.17779Z" fill="#61DC79"/>
            <path id="Vector_8" d="M11.3697 3.46667H7.89087V12H11.3697V3.46667Z" fill="#61DC79"/>
            </g>
          </svg>
          </Typography>
          <Button 
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      </Box>
  );
}
export default Header;