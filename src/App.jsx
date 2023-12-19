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
  }],
}

export default function App() {
  return (
    <div>
      <section className="relative">
        <Topic
          topic={athletesContent.title}
          align={ALIGN.RIGHT} />
        <Contents
          topic={athletesContent.title}
          contents={athletesContent.subContent}
          align={ALIGN.RIGHT} />
      </section>
      <section className="relative">
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
      className="max-w-screen-2xl w-full mx-auto">
      <h1 className={`uppercase mb-[10px] w-full tablet:w-3/5 desktop:w-1/2 px-5 tablet:px-[30px] desktop:px-[60px] ${align === ALIGN.RIGHT ? 'ml-auto' : 'mr-auto'}`}>
        {topic}
      </h1>
    </div>
  )
}