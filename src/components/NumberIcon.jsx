import { THEME } from "./Contents"

export default function NumberIcon({ number, theme, className }) {
  const formatNumber = number.toString().padStart(2, '0')

  return (
    <div className={`mt-[6px] mr-[10px] ${className}`}>
      <p
        className="text-[14px] tablet:text-[18px] tablet:mb-1"
        style={{ letterSpacing: 1.5 }}>
        {formatNumber}
      </p>
      <div
        className={`w-full rounded-full ${theme === THEME.LIGHT ? 'bg-[#603EBE] tablet:bg-white' : 'bg-[#603EBE]'}`}
        style={{ height: 5 }} />
    </div>
  )
}