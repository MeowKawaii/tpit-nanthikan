import Contents, { ALIGN, THEME } from "./components/Content";

const athletesContent = {
  title: 'ATHLETES',
  subContent: [{
    title: 'CONNECTION',
    content: 'Connect with coaches directly, you can ping coaches to view profile.',
  }, {
    title: 'COLLABORATION',
    content: 'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
    bgColor: '#F5F4F9',
  }, {
    title: 'GROWTH',
    content: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
    bgColor: '#5E3DB3',
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
    bgColor: '#F5F4F9',
  }, {
    title: 'GROWTH',
    content: 'Save your time, recruit proper athlets for your team.',
    bgColor: '#090C35',
    theme: THEME.LIGHT,
  }],
}

export default function App() {
  return (
    <div>
      <section>
        <Topic
          topic={athletesContent.title}
          align={ALIGN.RIGHT} />
        <Contents
          topic={athletesContent.title}
          contents={athletesContent.subContent}
          align={ALIGN.RIGHT} />
      </section>
      <section>
        <Topic
          topic={playersContent.title}
          align={ALIGN.LEFT} />
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
      className={`flex flex-col ${align === ALIGN.RIGHT ? 'items-end' : 'items-start'}`}>
      <h1 className="mb-[10px] w-full tablet:w-3/5 desktop:w-1/2 px-5 tablet:px-[30px] desktop:px-[60px]">
        {topic}
      </h1>
    </div>
  )
}