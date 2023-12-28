import { UserInfo, Section } from 'components'
import Profile from './../layouts/profile'
import data from 'data/data.json'

export default function Home() {
  const { contacts, socials } = data
  return (
    <Profile>
      <UserInfo />
      {contacts.display && <Section name="ارتباط با ما" items={contacts.items} />}
      {socials.display && <Section name="شبکه های اجتماعی" items={socials.items} />}
    </Profile>
  )
}
