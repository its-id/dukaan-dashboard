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
