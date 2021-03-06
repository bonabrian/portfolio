import { css } from '@emotion/react'
import styled from '@emotion/styled'

const HamburgerWrapper = styled.div({
  boxSizing: 'border-box',
  textAlign: 'center',
  ':first-of-child': {
    marginLeft: 0,
  },
})

const LineWrapper = styled.div({
  ':hover': { cursor: 'pointer' },
})

const Line = styled.div`
  width: 35px;
  height: 2px;
  background-color: var(--text-primary);
  display: block;
  margin: 8px auto;
  transition: all ease-in-out 300ms;
`

const Hamburger = ({ isOpen, setIsOpen }: any) => {
  return (
    <div css={css({ display: 'inline-block', marginLeft: '1rem' })}>
      <HamburgerWrapper>
        <LineWrapper
          onClick={() => setIsOpen(!isOpen)}
          css={
            isOpen
              ? css({
                  transition: 'all 300ms ease-in-out',
                  transitionDelay: '600ms',
                  transform: 'rotate(45deg)',
                })
              : ''
          }
        >
          <Line
            css={
              isOpen
                ? css({
                    transitionDelay: '300ms',
                    transform: 'translateY(10px)',
                  })
                : ''
            }
          />
          <Line css={isOpen ? css({ width: 0 }) : ''} />
          <Line
            css={
              isOpen
                ? css({
                    transitionDelay: '300ms',
                    transform: 'translateY(-10px) rotate(90deg)',
                  })
                : ''
            }
          />
        </LineWrapper>
      </HamburgerWrapper>
    </div>
  )
}

export default Hamburger
