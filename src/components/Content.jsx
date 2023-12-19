export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
}

export const ALIGN = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

export default function Contents({ topic, contents, align }) {

  return (
    <div>
      {contents.map(({ title, content, bgColor, theme }) => (
        <div
          key={`${topic}-${title}`}
          className={`flex flex-col ${align === ALIGN.RIGHT ? 'items-end' : 'items-start'}`} style={{ backgroundColor: bgColor }}>
          <div className="w-full tablet:w-3/5 desktop:w-1/2 p-5 tablet:p-[30px] desktop:p-[60px]">
            <h2>{title}</h2>
            <p className={theme === THEME.LIGHT ? 'text-white' : ''}>{content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}