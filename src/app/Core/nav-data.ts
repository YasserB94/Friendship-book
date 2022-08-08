export interface NavLink {
  name: string;
  buttonName: string;
  description: string;
  path: string;
}
export const NAV_LINK_DATA = [
  {
    name: 'home',
    buttonName: 'homepage',
    description: 'Go to homepage',
    path: 'home',
  },
  {
    name: 'friends',
    buttonName: 'See all friends',
    description: 'Go to an overview of added friends',
    path: 'friends',
  },
  {
    name: 'newfriend',
    buttonName: 'Become a Friend!',
    description: 'Add yourself to the list of friends',
    path: 'newfriend',
  },
];
