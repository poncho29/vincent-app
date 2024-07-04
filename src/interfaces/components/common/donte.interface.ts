
export type TDonateItem = {
  icon: React.FC;
  title: string;
  subtitle?: string;
  headline?: string;
  accountNumber?: string;
  text?: string;
}

export interface IDonateForm {
  titleWay: string;
  descriptionWay: string;
  options: TDonateItem[];
}