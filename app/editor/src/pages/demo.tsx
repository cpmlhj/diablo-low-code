import React, { useEffect, useState } from 'react'
import {useNode, Editor, Canvas, Frame, Element, useEditor} from '@craftjs/core'
import ContentEditable from 'react-contenteditable'
import {Button as MaterialButton, Paper, Box, Typography,Grid, FormControl,FormLabel,Slider,Chip, FormControlLabel, Switch} from '@material-ui/core'

const Text = ({text= ''}) => {
   const {connectors: {connect, drag}, hasDraggedNode, hasSelectedNode, actions: {setProp}} = useNode((state) => ({
      hasSelectedNode: state.events.selected,
      hasDraggedNode: state.events.dragged
  }))
  const [editable, setEditable] = useState(false)
  useEffect(() => {
    !hasSelectedNode && setEditable(false)
  }, [hasSelectedNode])
  const  handleChangeEditable =() => {
    if(!hasSelectedNode) return
    setEditable(true)
  }
   return <div onClick={e => handleChangeEditable()} ref={ref => connect(drag(ref))}>
      <ContentEditable disabled={!editable} html={text} onChange={
        e => setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
      } />
   </div>
}
Text.craft = {
   rules: {
    canDrag: (node) => node.data.props.text !== 'Drog'
  }
}

const Button = ({size, variant, color, text, children}) => {
  const {connectors: {connect, drag}} = useNode()
   return <MaterialButton ref={ref => connect(drag(ref))} size={size} variant={variant} color={color}>
      {text}
      {children}
   </MaterialButton>
}

const Container = ({background, padding = 0, children}) => {
  const {connectors: {connect, drag}} = useNode()
   return <Paper  ref={ref => connect(drag(ref))} style={{margin: '5px 0', background, padding: `${padding}px`,}}>
     {children}
   </Paper>
}

export const CardTop = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text)
  }
}

export const CardBottom = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect}>
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn : (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
  }
}

const Card = ({background = '', padding = 20}) => {
 return <Container background={background} padding={padding}>
    <Element id='text' is={CardTop} canvas >
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id='buttons' canvas is={CardBottom}>
        <Button size="small" text="Learn more" variant="contained" color="primary" />
      </Element>
  </Container>
}

const Toolbox = () => {
  const {connectors, query} = useEditor()
  return (
    <Box px={2} py={2}>
      <Grid container direction="column"  alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Button text='123' />)} variant="contained">Button</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Text text='123' />)} variant="contained">Text</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={Container} canvas padding={20} />)} variant="contained">Container</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Card />)} variant="contained">Card</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
}
 const SettingsPanel = () => {  
  return  (    
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs><Typography variant="subtitle1">Selected</Typography></Grid>
              <Grid item><Chip size="small" color="primary" label="Selected" /></Grid>
            </Grid>
          </Box>
        </Grid>
        <FormControl size="small" component="fieldset">
          <FormLabel component="legend">Prop</FormLabel>
          <Slider
            defaultValue={0}
            step={1}
            min={7}
            max={50}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <MaterialButton
          variant="contained"
          color="default"
        >
          Delete
        </MaterialButton>
      </Grid>
    </Box>
  ) 
}

const Topbar = () => {
  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked={true} />}
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton size="small" variant="outlined" color="secondary">Serialize JSON to console</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};


export default function HomePage() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
    <Typography variant="h5" align="center">A super simple page editor</Typography>
    <Editor resolver={{Card, Button, Text, Container, CardBottom, CardTop}}>
    <Grid container spacing={3} style={{paddingTop: "10px"}}>
      <Topbar />
      <Grid item xs>
        <Frame>
        <Element is={Container} canvas padding={5} background="#eee">
                  <Card />
                  <Button size="small" variant="outlined">Click</Button>
                  <Text  text="Hi world!" />
                  <Element is={Container} canvas padding={6} background="#999">
                    <Text  text="It's me again!" />
                  </Element>
                </Element>
        </Frame>
      </Grid>
      <Grid item xs={3}>
        <Paper>
            <Toolbox />
            <SettingsPanel />
        </Paper>          
      </Grid>
    </Grid>
    </Editor>
  </div>
  );
}
