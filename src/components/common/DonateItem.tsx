import type { TDonateItem } from "@/interfaces";

interface Props {
  donateInfo: TDonateItem;
}

export const DonateItem = ({ donateInfo }: Props) => {
  const IconComponent = donateInfo.icon;

  return (
    <div
      className=" flex flex-col gap-3"
    >
      <div className="h-[75px] flex items-center mx-auto">
        <IconComponent />
      </div>

      <div
        className="flex flex-col items-center text-center"
      >
        <h4
          className="paragraph !text-white font-bold"
        >
          { donateInfo.title }
        </h4>

        {donateInfo.subtitle && (
          <h4
            className="paragraph !text-white font-bold"
          >
            { donateInfo.subtitle }
          </h4>
        )}

        {donateInfo.headline && (
          <p>{ donateInfo.headline }</p>
        )}

        {donateInfo.accountNumber && (
          <p>{ donateInfo.accountNumber }</p>
        )}

        {donateInfo.text && (
          <p className="max-w-[340px]">{ donateInfo.text }</p>
        )}
      </div>
    </div>
  )
}
