import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'



let names = ["ms.find", "Dense16.find", "bz.find"]

const PageDiv = styled.div`
  display: flex;
  justify-content: center;
`
const SearchDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

`
const SearchInput = styled.input`
  margin-top: 15px;
  width: 100%;
  height: 50px;
  background: white;
  border-radius: 10px;
  border: 1px solid pink;
  font-size: 16px;
  color: black;
`
const Img = styled.img`
  height: 32px;
`
const Icon = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  line-height: 55px;
`
const SuggestionBox = styled.div`
  color: white;
`
const Home: NextPage = () => {
  return (
    <PageDiv>
      <SearchDiv>
        <SearchInput type="text" placeholder='Search..'/>
          <SuggestionBox>
            <li>Apple</li>
            <li>Banana</li>
            <li>Corn</li>
          </SuggestionBox>
          <Icon>
            <Img src="../icons/search.png"/>
          </Icon>
      </SearchDiv>
    </PageDiv>
  )
}

export default Home
