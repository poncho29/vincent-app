import { IMenu, ISubMenu } from "@/interfaces/components";

const subMenuApoyanos: ISubMenu[] = [
  {
    label: 'Adoptar',
    path: '/support/adoptar',
  },
  {
    label: 'Apadrinar',
    path: '/support/apadrinar',
  },
  {
    label: 'Donar',
    path: '/support/donar',
  },
  {
    label: 'Empresas',
    path: '/support/empresas',
  },
  {
    label: 'Voluntarios',
    path: '/support/voluntarios',
  },
  {
    label: 'Hogar de paso',
    path: '/support/hogar-de-paso',
  },
];

export const menuRoutes: IMenu[] = [
  {
    label: 'Inicio',
    path: '/landing',
    children: []
  },
  {
    label: 'Quienes somos',
    path: '/landing/about',
    children: []
  },
  {
    label: 'Familia Vincent',
    path: '/landing/family',
    children: []
  },
  {
    label: 'Apóyanos',
    path: '/landing/support',
    children: subMenuApoyanos
  },
  {
    label: 'Blog',
    path: '/landing/blog',
    children: []
  },
  {
    label: 'Contáctanos',
    path: '/landing/contact',
    children: []
  }
];



