export type SidebarElement = {
  id: number;
  name: string;
  href: string;
  icon: any;
};

export type UserElement = {
  name: string;
  href: string;
};

export type SidebarProps = {
  SidebarNavigation: SidebarElement[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export type NavbarProps = {
  UserNavigation: UserElement[];
  setSidebarOpen: (open: boolean) => void;
};

export type HeaderCardProps = {
  title: string;
  value: string | number;
};

export type TableElement = {
  id: string | number;
  order_date: string | number;
  order_amount: string | number;
  fees: string | number;
};
