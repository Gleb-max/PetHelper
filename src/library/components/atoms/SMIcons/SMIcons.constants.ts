/* eslint-disable prettier/prettier */
//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Icons} from 'library/types';

type IconsDataMapItem = {
  d: string;
  evenOdd?: boolean;
};

type CommonIconsDataMap = Record<Icons.CommonIconName, IconsDataMapItem[]>;
type TabBarIconsDataMap = Record<Icons.TabBarIconName, IconsDataMapItem[]>;
type IconsDataMap = Record<Icons.SMIconsName, IconsDataMapItem[]>;

const commonIcons: CommonIconsDataMap = {
  ic_wrong_icon: [
    {
      d: 'M3 3h26v26H3V3z',
    },
  ],
  ic_arrow_right: [
    {
      d: 'M14.586 12L7.293 4.707l1.414-1.414L17.414 12l-8.707 8.707-1.414-1.414L14.586 12z',
      evenOdd: true,
    },
  ],
  ic_next: [
    {
      d: 'M20.7045 14.3793H0.586179V11.6207H20.7045L12.0247 2.94084L13.9753 0.990196L25.9851 13L13.9753 25.0098L12.0247 23.0592L20.7045 14.3793Z',
      evenOdd: true,
    },
  ],
};

const tabBarIcons: TabBarIconsDataMap = {
  ic_tabbar_home: [
    {
      d: 'M5.88867 10L11.89 3.99867L17.8913 10H17.89V20H5.89001V10H5.88867ZM3.89001 11.9987L2.4132 13.4755L1 12.0623L10.477 2.58529C11.2574 1.8049 12.5226 1.8049 13.303 2.58529L22.78 12.0623L21.3668 13.4755L19.89 11.9987V20C19.89 21.1046 18.9946 22 17.89 22H5.89001C4.78545 22 3.89001 21.1046 3.89001 20V11.9987Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_home_active: [
    {
      d: 'M5.88867 10L11.89 3.99867L17.8913 10H17.89V20H5.89001V10H5.88867ZM3.89001 11.9987L2.4132 13.4755L1 12.0623L10.477 2.58529C11.2574 1.8049 12.5226 1.8049 13.303 2.58529L22.78 12.0623L21.3668 13.4755L19.89 11.9987V20C19.89 21.1046 18.9946 22 17.89 22H5.89001C4.78545 22 3.89001 21.1046 3.89001 20V11.9987Z',
      evenOdd: true,
    },
  ],
  ic_tabbar_cursor: [
    {
      d: 'M14.472 10.023H.4c3.753-3.06 9.85-9.4 14.072-9.4v9.4zM14.472 10.023h14.073c-3.753-3.06-9.85-9.4-14.073-9.4v9.4z',
    },
  ],
};

export const icons: IconsDataMap = {
  ...commonIcons,
  ...tabBarIcons,
};
