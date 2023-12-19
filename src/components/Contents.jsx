import Slider from "react-slick"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const renderContent = () => contents.map(({ title, content, bgColor, theme }) => (
    <div
      key={`${topic}-${title}`}
      className={`${bgColor} min-h-[230px] tablet:min-h-0`}>
      <div className="max-w-screen-2xl w-full mx-auto">
        <div className={`w-full tablet:w-3/5 desktop:w-1/2 p-5 tablet:p-[30px] desktop:p-[60px] ${align === ALIGN.RIGHT ? 'ml-auto' : 'mr-auto'}`}>
          <h2 className="uppercase mb-[10px] tablet:mb-5">{title}</h2>
          <p
            className={theme === THEME.LIGHT ? 'text-white' : ''}
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
