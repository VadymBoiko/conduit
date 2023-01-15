import React, {FC} from 'react'
import PropTypes from 'prop-types'
import { Container } from './Container'

interface BannerProps{

}

export const Banner:FC<BannerProps> =() => {
  return (
    <main>
        <div className='banner'>
            <Container>
                <h1 className='banner__title'>conduit</h1>
                <p className='banner__subtitle'>A place to share your knowledge</p>
            </Container>
        </div>
    </main>
  )
}

