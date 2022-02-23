import { MenuEntry } from '@calculux-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.calculux.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '#',
  },
  {
    label: 'IDO',
    icon: 'PoolIcon',
    href: '#',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CalculuxSwap',
        href: '#',
      },
      {
        label: 'CoinGecko',
        href: '#',
      },
      {
        label: 'CoinMarketCap',
        href: '#',
      },
      {
        label: 'AstroTools',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Calculux-finance',
      },
      {
        label: 'Docs',
        href: 'https://calcdevs.gitbook.io/calculux-finance-v.01/',
      },
      {
        label: 'Blog',
        href: '#',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IDO',
  //   icon: 'IfoIcon',
  //   href:
  //     'https://google.com',
  // },
  {
    label: 'Audit by Coinscope',
    icon: 'ShieldIcon',
    href: 'https://www.coinscope.co/coin/cax/audit',
  },
  {
    label: 'Audit by CertiK',
    icon: 'ShieldIcon',
    href: '#',
  },
]

export default config
