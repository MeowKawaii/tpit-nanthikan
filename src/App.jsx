import Content, { ALIGN, THEME } from "./components/Content";
import Layout from "./components/Layout";

const athletesContent = {
  topic: 'ATHLETES',
  supContent: [{
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
  topic: 'PLAYERS',
  supContent: [{
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
        <Content
          content={athletesContent}
          align={ALIGN.RIGHT} />
      </section>
      <section>
        <Content
          content={playersContent}
          align={ALIGN.LEFT} />
      </section>
    </div>
  )
}