interface Props {
  name: string;
}

export const PetNameCard = ({ name }: Props) => {
  return (
    <div
      className='absolute top-[140px] w-auto h-[41px] min-w-[81px] py-1 pr-1 border-y border-r
      border-dashed border-white rounded-se-[15px] rounded-ee-[15px]'
    >
      <div
        className="w-full h-full flex items-center px-2 rounded-se-[15px] rounded-ee-[15px] bg-green"
      >
        <span className='text-sm text-white font-mochiypopone uppercase'>
          { name }
        </span>
      </div>
    </div>
  )
}
