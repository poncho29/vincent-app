import { IDonateForm } from "@/interfaces";

import {
  BancolombiaIcon,
  BonusIcon,
  CartIcon,
  CashIcon,
  ComuldesaIcon,
  NequiIcon,
  SuppliesIcon
} from "@/components/icons";

export const WaysToDonateData: IDonateForm[] = [
  {
    titleWay: 'Donaciones económicas',
    descriptionWay: 'Para realizar donaciones económicas puedes hacerlo por los siguentes medios:',
    options: [
      {
        icon: BancolombiaIcon,
        title: 'Bancolombia Ahorros',
        headline: 'Fundación Vincent rescate animal',
        accountNumber: '29000000933'
      },
      {
        icon: ComuldesaIcon,
        title: 'Coomuldesa Ahorros',
        headline: 'Fundación Vincent rescate animal',
        accountNumber: '12.00211494.36'
      },
      {
        icon: NequiIcon,
        title: 'Nequi',
        headline: 'Fundación Vincent rescate animal',
        accountNumber: '316 414 8818'
      },
      {
        icon: CashIcon,
        title: 'Efectivo',
        text: 'Directamente en la fundación o en la Calle 11 # 15-19 Socorro Santander'
      },
      {
        icon: BonusIcon,
        title: 'Bonos',
        subtitle: '(consultas medicas, baños etc.)',
      }
    ]
  },
  {
    titleWay: 'Donaciones de insumos',
    descriptionWay: 'Si quieres realizar donaciones de insumos, puedes realizarlos directamente en la fundación o en la Calle 11 # 15-19 Socorro Santander.',
    options: [
      {
        icon: CartIcon,
        title: 'Comprar insumos',
        subtitle: '(purina, camas, medicamentos, etc.)',
        text: 'Podrás enviarlos a la fundación o en la Calle 11 # 15-19 Socorro Santander'
      },
      {
        icon: SuppliesIcon,
        title: 'Insumos reutilizados',
        subtitle: '(cobijas, camas, toallas, etc.)',
        text: 'Podrás enviarlos a la fundación o en la Calle 11 # 15-19 Socorro Santander'
      },
    ]
  }
]