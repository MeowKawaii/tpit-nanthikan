import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import NumberIcon from "./NumberIcon"

export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
}

export const ALIGN = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

const settings = {
  appendDots: dots => (
    <div>
      <ul style={{ marginTop: -77 }}> {dots} </ul>
    </div>
  ),
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default function Contents({ topic, contents, align }) {
  const renderContent = () => contents.map(({ title, content, bgColor, theme, numberClassname }, i) => (
    <div
      key={`${topic}-${title}`}
      className={`${bgColor ? `${bgColor}` : ''} min-h-[295px] tablet:min-h-0`}>
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className={`w-full tablet:w-3/5 desktop:w-1/2 p-5 tablet:p-[30px] desktop:p-[60px] ${align === ALIGN.RIGHT ? 'ml-auto' : 'mr-auto'}`}>
          <div className="flex mt-[60px] tablet:mt-0">
            <NumberIcon number={i + 1} theme={theme} className={numberClassname} />
            <h2 className="uppercase mb-[10px] tablet:mb-5">{title}</h2>
          </div>
          <p
            className={theme === THEME.LIGHT ? 'tablet:text-white' : ''}
            style={{ maxWidth: 717 }}>
            {content}
          </p>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <div className="hidden tablet:block">
        {renderContent()}
      </div>
      <div className="tablet:hidden" >
        <Slider {...settings}>
          {renderContent()}
        </Slider>
      </div>
    </div>
  )
}
