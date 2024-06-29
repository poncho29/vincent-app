import type { TDonateItem } from "@/interfaces";

interface Props {
  donateInfo: TDonateItem;
}

export const DonateItem = ({ donateInfo }: Props) => {
  const IconComponent = donateInfo.icon;

  return (
    <div className="flex flex-col gap-3">
      <IconComponent />

      <div>
        <h4
          className="paragraph !text-white font-bold"
        >
          { donateInfo.title }
        </h4>

        {donateInfo.headline && (
          <p>{ donateInfo.headline }</p>
        )}

        {donateInfo.accountNuber && (
          <p>{ donateInfo.accountNuber }</p>
        )}

        {donateInfo.text && (
          <p>{ donateInfo.text }</p>
        )}
      </div>
    </div>
  )
}
