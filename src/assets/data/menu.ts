import { IMenu, ISubMenu } from "@/interfaces/components";

const PATH_SUPORT = '/apoyanos';

export const subMenuApoyanos: ISubMenu[] = [
  {
    label: 'Empresas',
    path: `${PATH_SUPORT}/empresas`,
  },
  {
    label: 'Voluntarios',
    path: `${PATH_SUPORT}/voluntarios`,
  },
  {
    label: 'Hogar de paso',
    path: `${PATH_SUPORT}/hogar-de-paso`,
  },
];

export const menuRoutes: IMenu[] = [
  {
    label: 'Inicio',
    path: '/',
  },
  {
    label: 'Adoptar',
    path: `/adoptar`,	
  },
  {
    label: 'Apadrinar',
    path: `/apadrinar`,	
  },
  {
    label: 'Donar',
    path: '/donar',
  },

  {
    label: 'Apóyanos',
    path: '/apoyanos',
    children: subMenuApoyanos
  },
  {
    label: 'Quienes somos',
    path: '/quienes-somos',
  },
  {
    label: 'Contáctanos',
    path: '/contactanos',
  }
];



