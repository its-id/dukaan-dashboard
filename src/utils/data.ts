import { SidebarElement, UserElement } from './types';
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
  { name: 'Home', href: '#', icon: homeIcon, current: true },
  { name: 'Orders', href: '#', icon: ordersIcon, current: false },
  { name: 'Products', href: '#', icon: productsIcon, current: false },
  { name: 'Delivery', href: '#', icon: deliveryIcon, current: false },
  { name: 'Marketing', href: '#', icon: marketingIcon, current: false },
  { name: 'Analytics', href: '#', icon: analyticsIcon, current: false },
  { name: 'Payments', href: '#', icon: paymentsIcon, current: false },
  { name: 'Tools', href: '#', icon: toolsIcon, current: false },
  { name: 'Discounts', href: '#', icon: discountsIcon, current: false },
  { name: 'Audience', href: '#', icon: audienceIcon, current: false },
  { name: 'Appearance', href: '#', icon: appearanceIcon, current: false },
  { name: 'Plugins', href: '#', icon: pluginsIcon, current: false },
  { name: 'Wallet', href: '#', icon: walletIcon, current: false },
];

const UserNavigation: UserElement[] = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export { SidebarNavigation, UserNavigation };
