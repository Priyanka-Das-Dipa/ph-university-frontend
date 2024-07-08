import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TUSerPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUSerPath[];
};
