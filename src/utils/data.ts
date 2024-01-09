import { HeaderCardProps, SidebarElement, UserElement } from './types';
import homeIcon from '../assets/icons/home.svg';
import ordersIcon from '../assets/icons/orders.svg';
import productsIcon from '../assets/icons/products.svg';
import deliveryIcon from '../assets/icons/delivery.svg';
import marketingIcon from '../assets/icons/marketing.svg';
import analyticsIcon from '../assets/icons/analytics.svg';
import paymentsIcon from '../assets/icons/payments.svg';
import toolsIcon from '../assets/icons/tools.svg';
import discountsIcon from '../assets/icons/discounts.svg';
import audienceIcon from '../assets/icons/audience.svg';
import appearanceIcon from '../assets/icons/appearance.svg';
import pluginsIcon from '../assets/icons/plugin.svg';
import walletIcon from '../assets/icons/wallet.svg';

const SidebarNavigation: SidebarElement[] = [
  { id: 1, name: 'Home', href: '#', icon: homeIcon },
  { id: 2, name: 'Orders', href: '#', icon: ordersIcon },
  { id: 3, name: 'Products', href: '#', icon: productsIcon },
  { id: 4, name: 'Delivery', href: '#', icon: deliveryIcon },
  { id: 5, name: 'Marketing', href: '#', icon: marketingIcon },
  { id: 6, name: 'Analytics', href: '#', icon: analyticsIcon },
  { id: 7, name: 'Payments', href: '#', icon: paymentsIcon },
  { id: 8, name: 'Tools', href: '#', icon: toolsIcon },
  { id: 9, name: 'Discounts', href: '#', icon: discountsIcon },
  { id: 10, name: 'Audience', href: '#', icon: audienceIcon },
  { id: 11, name: 'Appearance', href: '#', icon: appearanceIcon },
  { id: 12, name: 'Plugins', href: '#', icon: pluginsIcon },
  { id: 13, name: 'Wallet', href: '#', icon: walletIcon },
];

const UserNavigation: UserElement[] = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const HeaderCardsData: HeaderCardProps[] = [
  {
    title: 'Online orders',
    value: 231,
  },
  {
    title: 'Amount received',
    value: '₹23,92,312.19',
  },
];

export { SidebarNavigation, UserNavigation, HeaderCardsData };
