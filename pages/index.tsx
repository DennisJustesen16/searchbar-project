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
  background: white;
  margin-top: 15px;
  border-radius: 10px;

`
const SearchInput = styled.input`
  
  width: 100%;
  height: 50px;
  background: white;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  color: black;
  padding: 0 60px 0 40px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
`
const Img = styled.img`
  height: 32px;
`
const Icon = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  line-height: 55px;
  text-align: center;
`
const SuggestionBox = styled.div`
  overflow-y: auto;
  opacity: 0;
  pointer-events: none;

`
const Li = styled.li`
  list-style: none;
  padding: 8px 12px;
  width: 100%;
  cursor: default;
  border-radius: 10px;
  display: none;
  &:hover {
    background: #efefef;
  }
`
const Home: NextPage = () => {
  return (
    <PageDiv>
      <SearchDiv>
        <SearchInput type="text" placeholder='Search..'/>
          <SuggestionBox>
            <Li>Apple</Li>
            <Li>Banana</Li>
            <Li>Corn</Li>
          </SuggestionBox>
          <Icon>
            
          </Icon>
      </SearchDiv>
    </PageDiv>
  )
}

export default Home
