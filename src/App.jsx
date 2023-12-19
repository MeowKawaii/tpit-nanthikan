import Contents, { ALIGN, THEME } from "./components/Contents";

const athletesContent = {
  title: 'ATHLETES',
  subContent: [{
    title: 'CONNECTION',
    content: 'Connect with coaches directly, you can ping coaches to view profile.',
  }, {
    title: 'COLLABORATION',
    content: 'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
    bgColor: 'bg-purple-light',
  }, {
    title: 'GROWTH',
    content: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
    bgColor: 'bg-purple-medium',
    theme: THEME.LIGHT,
  }],
}
const playersContent = {
  title: 'PLAYERS',
  subContent: [{
    title: 'CONNECTION',
    content: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
  }, {
    title: 'COLLABORATION',
    content: 'Work with recruiter to increase your chances of finding talented athlete.',
    bgColor: 'bg-purple-light',
  }, {
    title: 'GROWTH',
    content: 'Save your time, recruit proper athlets for your team.',
    bgColor: 'bg-purple-dark',
    theme: THEME.LIGHT,
    numberClassname: 'text-[#8765DD]'
  }],
}

export default function App() {
  return (
    <div>
      <section className="relative">
        <Topic
          topic={athletesContent.title}
          align={ALIGN.RIGHT} />
        <div className="relative tablet:absolute inset-0 px-[9px] tablet:px-0 -mb-[55px] tablet:mb-0 z-10">
          <div className="w-1/2 hidden desktop:flex justify-end mt-[50px]">
            <img
              src="rugby.svg"
              className="w-4/6 mr-[100px]" />
          </div>
          <img
            src="rugby_with_line.svg"
            className="w-[218px] tablet:w-4/6 tablet:mt-[70px] mx-auto xl:-ml-[10%] tablet:-ml-[20%] tablet:mr-0 desktop:hidden"
            style={{maxWidth: 655}} />
        </div>
        <Contents
          topic={athletesContent.title}
          contents={athletesContent.subContent}
          align={ALIGN.RIGHT} />
      </section>
      <section className="relative">
        <Topic
          topic={playersContent.title}
          align={ALIGN.LEFT} />
        <div className="relative tablet:absolute inset-0 overflow-hidden px-[9px] tablet:px-0 -mb-[55px] tablet:mb-0 z-10">
          <img
            src="basket_ball.svg"
            className="max-w-screen-lg w-[302px] tablet:w-[690px] desktop:w-3/5 h-auto mr-auto tablet:mr-0 ml-auto tablet:ml-[40%] desktop:ml-[40%]" />
        </div>
        <Contents
          topic={playersContent.title}
          contents={playersContent.subContent}
          align={ALIGN.LEFT} />
      </section>
    </div>
  )
}

function Topic({ topic, align }) {
  return (
    <div
      className="max-w-screen-2xl w-full mx-auto">
      <h1 className={`uppercase mb-[10px] w-full tablet:w-3/5 desktop:w-1/2 px-5 tablet:px-[30px] desktop:px-[60px] ${align === ALIGN.RIGHT ? 'ml-auto' : 'mr-auto'}`}>
        {topic}
      </h1>
    </div>
  )
}