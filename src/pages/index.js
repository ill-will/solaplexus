import React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <div class="release">
      <div class="cover" id="start">
        <div class="releaseleft hidden">
          <a href="#start">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>circle-left</title>
            <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
            <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
            </svg>
          </a>
        </div>
        <img src="/img/pfcl-cover.png" alt=""/>
        <div class="releaseright">
          <a href="#start">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>circle-right</title>
            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
            <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="info">
        <h2>Purple Frog Curly Legs</h2>
        <p>"This record is the first of many and feels like a reset after a long period of time contemplating who I am and what I want without releasing any relevant music. It's meant for everyone that has love for HipHop, UK Rave Music and the MC culture. It's for my people. My fellow Indians, the MCs, the junglists, the ravers, the DJs, the producers, all vocalists, the nerds, the underdogs, but especially for my family and friends. I tell you: I am one of you and you are not alone. You are part of me like I am part of you.“</p>
        <a class="button" href="https://kelvyncolt.lnk.to/LH914" target="_blank" rel="noopener noreferrer">LISTEN</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
