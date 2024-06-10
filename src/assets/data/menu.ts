import { IMenu, ISubMenu } from "@/interfaces/components";

const BASE_PATH = '/landing';
const PATH_SUPORT = `${BASE_PATH}/apoyanos`;

const subMenuApoyanos: ISubMenu[] = [
  {
    label: 'Adoptar',
    path: `${PATH_SUPORT}/adoptar`,	
  },
  {
    label: 'Apadrinar',
    path: `${PATH_SUPORT}/apadrinar`,
  },
  {
    label: 'Donar',
    path: `${PATH_SUPORT}/donar`,
  },
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
    path: `${BASE_PATH}`,
  },
  {
    label: 'Quienes somos',
    path: `${BASE_PATH}/quienes-somos`,
  },
  {
    label: 'Familia Vincent',
    path: `${BASE_PATH}/familia-vincent`,
  },
  {
    label: 'Apóyanos',
    path: `${BASE_PATH}/apoyanos`,
    children: subMenuApoyanos
  },
  {
    label: 'Blog',
    path: `${BASE_PATH}/blog`,
  },
  {
    label: 'Contáctanos',
    path: `${BASE_PATH}/contactanos`,
  }
];



