import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import ThemeToggle from '@/common/components/ThemeToggle'
import { mobileNavItems } from '@/common/config'
import { breakpoints } from '@/common/utils'

import Hamburger from './Hamburger'

const Brand = styled.a({
  fontSize: '1.25rem',
  cursor: 'pointer',
  fontWeight: 600,
})

const FlexBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const HeaderWrapper = styled.div({
  position: 'fixed',
  top: 0,
  zIndex: 5,
  backgroundColor: 'var(--header-bg)',
  backdropFilter: 'blur(6px)',
  width: '100%',
})

const HeaderInner = styled.header`
  @media (min-width: ${breakpoints.sm}) {
    padding-inline: 22px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  padding-inline: 22px;
  margin-inline: auto;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 800px;
`

const NavItemsWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  left: '100%',
  width: '100%',
  zIndex: 1000,
  top: '84px',
  backgroundColor: 'var(--bg-primary)',
  color: 'var(--text-primary)',
  height: 'calc(100% - 84px)',
})

const ItemLink = styled.a({
  fontSize: '1.5rem',
  fontWeight: 600,
  margin: '1.25rem auto',
  position: 'relative',
  ':hover': { color: 'var(--color-primary)' },
})

const NavItems = ({ isOpen, setIsOpen }: any) => {
  const router = useRouter()

  return (
    <NavItemsWrapper css={isOpen ? css({ left: 0 }) : ''}>
      {mobileNavItems.map((item) => {
        return (
          <Link key={item.label} href={item.href} passHref>
            <ItemLink
              css={
                router.pathname === item.href
                  ? css({
                      color: 'var(--color-primary)',
                      ':before': {
                        zIndex: 5,
                        content: '""',
                        width: '100%',
                        height: '3px',
                        position: 'absolute',
                        background: 'var(--color-primary)',
                        bottom: 0,
                      },
                    })
                  : {}
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              {item.label}
            </ItemLink>
          </Link>
        )
      })}
    </NavItemsWrapper>
  )
}

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <Link href='/' passHref>
            <Brand>b.</Brand>
          </Link>
          <FlexBox>
            <ThemeToggle />
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </FlexBox>
        </HeaderInner>
      </HeaderWrapper>

      {isOpen && <NavItems isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  )
}

export default MobileNavigation
