export interface IMenu {
  label: string;
  path: string;
  children?: ISubMenu[];
}

export interface ISubMenu extends Omit<IMenu, 'children'> {}