import React from 'react'
import assets from '../../../../assets'

import { Button } from '../../../../components/Button'

import '../../../../styles/about-sidebar.css'

export const AboutSidebar = ({ selected }: { selected: string }) => (
  <aside className={'about-sidebar'}>
    <ul>
      <li>
        <h5>ABOUT US</h5>
      </li>
      <li>
        <Button
          href="/about"
          type={selected === 'home' ? 'secondary' : 'text'}
          iconLeft={assets.home}
          style={{
            color: selected === 'home' ? 'var(--nav-hover)' : 'inherit',
          }}
        >
          Home
        </Button>
      </li>
      <li>
        <h5>PRIVACY</h5>
      </li>
      <li>
        <Button
          href="/about/privacy"
          type={selected === 'privacy-db' ? 'secondary' : 'text'}
          iconLeft={assets.browserWordmark}
          style={{
            color: 'inherit',
          }}
        >
          Dot Browser
        </Button>
      </li>
      <li>
        <Button
          href="/about/privacy/website"
          type={selected === 'privacy-site' ? 'secondary' : 'text'}
          iconLeft={assets.globe}
          style={{
            color: 'inherit',
          }}
        >
          Website
        </Button>
      </li>
      <li>
        <Button
          href="/about/privacy/id"
          type={selected === 'privacy-id' ? 'secondary' : 'text'}
          iconLeft={' '}
          style={{
            color: 'inherit',
          }}
        >
          Dot ID
        </Button>
      </li>
    </ul>
  </aside>
)
