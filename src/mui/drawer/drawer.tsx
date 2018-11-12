import * as React from 'react'

import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core'
import MuiDrawer from '@material-ui/core/Drawer'

import classnames from 'classnames'
import styled from 'styled-components'

const DrawerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`
const DrawerInner = styled.div`
  display: flex;
  flex-direction: ${(props: any) => !!props.open ? 'column' : 'row'};
`

const styles = (theme: Theme, ) => createStyles({
  root: {},
  drawerPaper: {
    position: 'unset',
  },
  drawerContent: {
    display: 'inline-block',
  },
  drawerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  drawerContainerOpen: {
    flexDirection: 'column',
  },
})

interface Props extends WithStyles<typeof styles> {
  drawer: React.ReactNode
}

interface State {
  isOpen: boolean
}
export const Drawer = withStyles(styles)(
  class extends React.Component<Props, State> {

    constructor(props: Props) {
      super(props)
      this.state = {
        isOpen: true,
      }
    }

    handleClick = () => {

      const isOpen = this.state.isOpen
      console.log(`drawer isOpen: ${!isOpen}`)
      this.setState({isOpen: !isOpen})
    }

    render() {
      const {
        children,
        classes,
        drawer,
      } = this.props

      const paperProps = {
        classes: {
          root: classes.drawerPaper,
        },
      }

      const {
        isOpen,
      } = this.state

      const containerClassName = classnames({
        [classes.drawerContainer]: true,
        [classes.drawerContainerOpen]: isOpen,
      })
      return (
        <DrawerWrapper>
          <div className={containerClassName} onClick={this.handleClick}>
            <div style={{backgroundColor: 'lightgray'}}>..</div>
            <MuiDrawer
              variant='persistent'
              open={true}
              PaperProps={paperProps}
            >
              {drawer}
            </MuiDrawer>
          </div>
          <div className={classes.drawerContent} >
            {children}
          </div>
        </DrawerWrapper>
      )
    }
  },
)
