export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
}

export const ALIGN = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

export default function Contents({ content, align }) {
  const { topic, subContent } = content

  return (
    <div>
      {subContent.map(({ title, content, bgColor, theme }) => (
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

function Topic({ title }) {
  return (
    <h1 className="mb-[10px] px-5 tablet:px-[30px] desktop:px-[60px]">{title}</h1>
  )
}