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
const SearchInput = styled.input`
  margin-top: 15px;
  width: 500px;
  height: 50px;
  background: white;
  border-radius: 10px;
  border: 1px solid pink;
  font-size: 16px;
  color: black;
`
const SuggestionBox = styled.div`
  
`
const Home: NextPage = () => {
  return (
    <PageDiv>
      <SearchInput type="text" placeholder='Search..'/>
      <SuggestionBox>

      </SuggestionBox>
    </PageDiv>
  )
}

export default Home
