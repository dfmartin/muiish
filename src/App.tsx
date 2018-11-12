import * as React from 'react'

import styled from 'styled-components'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {Drawer} from '@mui/drawer'
import './App.css'

import logo from './logo.svg'

const SplitHolder = styled.div`
  display: flex;
  flex-direction: row;
`
class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <SplitHolder>
          <Drawer
            drawer={(
              <List>
                <ListItem>
                  <ListItemText>Item 1-1</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Item 1-1</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Item 1-1</ListItemText>
                </ListItem>
              </List>
            )}
          >
            this is content number one.  This content is a bit long and we are hoping that it will wrap.  I may have to put in a couple of paragraphs as well.
            <p>Some more content that may cause the drawer content to wrap.  Or at least I hope so.  It has alluded me in the past.  Hopefully I can finally and truly figure it out.</p>
            <p> This content will help test scrolling.  The hard part.</p>
            <p> This content will help test scrolling.  The hard part.</p>
            <p> This content will help test scrolling.  The hard part.</p>
            <p> This content will help test scrolling.  The hard part.</p>
            <p> If you're seeing this we got it to scroll to the bottom.  Yay!</p>
          </Drawer>
          <Drawer
            drawer={(
              <List>
                <ListItem>Item 2-2</ListItem>
                <ListItem>Item 2-2</ListItem>
                <ListItem>Item 2-3</ListItem>
              </List>
            )}
          >
            this is content number two
          </Drawer>
        </SplitHolder>
        <div style={{backgroundColor: 'red'}}>
          bottom stuff
        </div>
      </div>
    )
  }
}

export default App
