import React from "react";

export type TDonateItem = {
  icon: React.FC;
  title: string;
  headline?: string;
  accountNuber?: string;
  text?: string;
}

export interface IDonateForm {
  titleWay: string;
  descriptionWay: string;
  options: TDonateItem[];
}