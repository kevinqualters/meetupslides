import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  fluxDiagram: require('./flux-diagram-white-background.png'),
  facebookFlux: require('./flux-facebook.png')
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        {/* intro slide 1*/}

        <Slide transition={["zoom"]} bgColor="#61dafb" notes="Mention the 3 going to talk about, and how they are designed to work with React's declarative nature">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            Alt.js vs Redux vs Vanilla:
          </Heading>
          <Heading size={1} fit caps>
            An Overview of Flux Implementations
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            What is Flux?
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="#61dafb" notes="React = views, etc">
          <Image src={images.fluxDiagram.replace("/", "")} height="75%" width="75%"></Image>
          <Heading size={1} fit textColor="#fff" textFont="secondary">More of a pattern than a traditional framework...</Heading>
        </Slide>

        {/* vanilla flux overview slide 2 */}
        <Slide transition={['slide']} bgColor="#61dafb" notes="Facebook first released the paradigm, then an actual implementation">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Vanilla Flux
          </Heading>
        </Slide>
        { /*slide 3*/ }
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={2} fit textColor="#fff" textFont="secondary">
            A very brief history
          </Heading>
          <List>
            <ListItem textColor="#fff">May 2013: React released</ListItem>
            <ListItem textColor="#fff">April 2014: Facebook announces Flux at the annual F8 developer conference, first official implementation released in July</ListItem>
            <ListItem textColor="#fff">December 2014: Alt.js released</ListItem>
            <ListItem textColor="#fff">May 2015: Redux released</ListItem>
          </List>
        </Slide>


        {/*slide 5*/}
        <Slide transition={['slide']} bgColor="#61dafb">
          <Heading size={1} fit textColor="#fff" textFont="secondary">Unidirectional data flow used for building web applications</Heading>
            <List>
              <ListItem textColor="#fff">Actions -> Data Stores -> Components (Views)</ListItem>
              <ListItem textColor="#fff">All data mutations are caused by calling actions - UI or server generated</ListItem>
              <ListItem textColor="#fff">Data stores listen to the actions and mutate the data within themselves</ListItem>
              <ListItem textColor="#fff">The Virtual DOM is then re-rendered followed by the real DOM being updated very efficiently by React</ListItem>
              <ListItem textColor="#fff"><a href="https://github.com/facebook/flux">https://github.com/facebook/flux</a></ListItem>
            </List>
        </Slide>

        {/*slide 6*/}
        <Slide transition={['slide']} bgColor="#61dafb">
          <Heading size={1} fit textColor="#fff" textFont="secondary">Facebook's Flux Implementation</Heading>
        </Slide>
        {/*slide 7*/}
        <Slide transition={['slide']} bgColor="#61dafb">
          <Heading size={1} fit textColor="#fff" textFont="secondary">Implementation Specifics</Heading>
            <List>
              <Image src={images.facebookFlux.replace("/", "")} height="75%" width="75%"></Image>
              <ListItem textColor="#fff">Built around the concept of a single Dispatcher - the source of truth in your application</ListItem>
            </List>
        </Slide>



        {/* alt.js overview slide 8 */}
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">Alt js&nbsp;&nbsp;&nbsp;</Heading>
          <List>
            <ListItem textColor="#fff">Third party flux implementation that provides some additional features</ListItem>
            <ListItem textColor="#fff">Isomorphic and works with react-native</ListItem>
            <ListItem textColor="#fff">Built using Facebook's Dispatcher, and is considered a "pure" implementation of Flux</ListItem>
            <ListItem textColor="#fff"><a href="https://github.com/goatslacker/alt">https://github.com/goatslacker/alt</a></ListItem>
          </List>
        </Slide>
        {/* slide 9 */}
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Iso-what?
          </Heading>
          <Text textColor="#fff">Isomorphic simply means that the code can be run in multiple environments - in this case the browser, server, or react-native</Text>
        </Slide>
        {/*slide 10*/}
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Additional Features
          </Heading>
          <Text textColor="#fff">Alt has a few store manipulation features in addition to core flux that are very useful for developers. These include:</Text>
            <List>
              <ListItem textColor="#fff">The ability to save the state of a store at any time</ListItem>
              <ListItem textColor="#fff">Likewise, allows you to bootstrap the state of a particular store</ListItem>
              <ListItem textColor="#fff">Also gives the ability to flush, recycle or rollback the states of stores</ListItem>
              <ListItem textColor="#fff"><a href="http://alt.js.org/docs/bootstrap/">http://alt.js.org/docs/bootstrap/</a></ListItem>
            </List>
        </Slide>

        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <CodePane
            lang="javascript"
            source={"alt.bootstrap(JSON.stringify({\n"+
                    "MyStore: {\n"+
                    "  key: 'value',\n"+
                    "  key2: 'value2'\n"+
                    "}\n"+
                  "}));\n"}
            margin="20px auto"/>
          <Text textColor="#fff">Bootstraping an alt application</Text>
        </Slide>
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <CodePane
            lang="javascript"
            source={"var snapshot = alt.takeSnapshot();\n"+
                    "var partialSnapshot = alt.takeSnapshot(Store1, Store3);"}
            margin="20px auto"/>
          <Text textColor="#fff">Saving the state of an application. Easily persisted on the backend, localstorage, etc</Text>
        </Slide>




        {/* redux overview slide 11*/}
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Redux
          </Heading>
          <List>
            <ListItem textColor="#fff">Not a pure implementation of flux, but certainly inspired by it</ListItem>
            <ListItem textColor="#fff">The state of your whole application is stored in an object tree inside a single store. Flux does not mandate the use of a single store, whereas redux does</ListItem>
            <ListItem textColor="#fff">State is read-only, the only way to change it is to emit actions that described what happened</ListItem>
            <ListItem textColor="#fff">Reducers are functions that enforce a (previousState, action) => newState signature</ListItem>
            <ListItem textColor="#fff"><a href="https://github.com/rackt/redux">https://github.com/rackt/redux</a></ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Text size={1} fit textColor="#fff" textFont="secondary">
            Can Redux be considered Flux? Yes...
          </Text>
          <BlockQuote>
              <Quote>if all actions propagate to all stores & they hold all logic, expose only getters, know nothing of views, then it sounds a lot like flux to me.</Quote>
              <Cite>Bill Fisher @fisherwebdev Facebook Flux Team</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Text size={1} fit textColor="#fff" textFont="secondary">
            Can Redux be considered Flux? No...
          </Text>
          <BlockQuote>
              <Quote>Really depends how loose you want to define "Flux". To me it means: Dispatcher, Action Creators, Stores. Redux has none these.</Quote>
              <Cite>André Staltz @andrestaltz Engineer Futurice</Cite>
          </BlockQuote>
        </Slide>
        {/* redux overview slide 11*/}
        <Slide transition={['slide']} bgColor="#61dafb" notes="demo redux-devtools on this slide">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Invented by Dan Abramov
          </Heading>
          <List>
            <ListItem textColor="#fff">Dan has written some very awesome tools</ListItem>
            <ListItem textColor="#fff">React Hot Loader <a href="https://github.com/gaearon/react-hot-loader">https://github.com/gaearon/react-hot-loader</a></ListItem>
            <ListItem textColor="#fff">Redux Devtools <a href="https://github.com/gaearon/redux-devtools">https://github.com/gaearon/redux-devtools</a></ListItem>
            <ListItem textColor="#fff"><a href="https://twitter.com/dan_abramov">https://twitter.com/dan_abramov</a></ListItem>
          </List>
        </Slide>
        {/* slide 12 */}

        {/* slide 12 */}
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <CodePane
            lang="javascript"
            source={"// Create a Redux store holding the state of your app.\n"+
              "// Its API is { subscribe, dispatch, getState }.\n"+
              "let store = createStore(counter);\n"+
              "// You can subscribe to the updates manually, or use bindings to your view layer.\n"+
              "store.subscribe(() =>\n"+
              "  console.log(store.getState())\n"+
              ");\n"+
              "// The only way to mutate the internal state is to dispatch an action.\n"+
              "// The actions can be serialized, logged or stored and later replayed.\n"+
              "store.dispatch({ type: 'INCREMENT' });\n"+
              "// 1\n"+
              "store.dispatch({ type: 'INCREMENT' });\n"+
              "// 2\n"+
              "store.dispatch({ type: 'DECREMENT' });\n"+
              "// 1\n"}
            margin="20px auto"/>
          <Text textColor="#fff">The whole state of your app is stored in an object tree inside a single store. The only way to change the state tree is to emit an action, an object describing what happened.</Text>
        </Slide>

        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <CodePane
            lang="javascript"
            source={"/**\n"+
             "* Reducers are a core concept to redux, and enforce the (state, action) => state\n"+
             "* pattern\n"+
             "*/\n"+
             "function counter(state = 0, action) {\n"+
              " switch (action.type) {\n"+
              " case 'INCREMENT':\n"+
              "   return state + 1;\n"+
              " case 'DECREMENT':\n"+
              "   return state - 1;\n"+
              " default:\n"+
              "   return state;\n"+
              " }\n"+
             "}\n"}
            margin="20px auto"/>
          <Text textColor="#fff">To specify how the actions transform the state tree, you write pure reducers. Reducers listen for events and manipulate the state accordingly. Never is the state mutated directly.</Text>
        </Slide>

        {/* community adoption */}
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Community Adoption
          </Heading>
          <List>
            <ListItem textColor="#fff">Facebook's Flux: released in July 2014, 8,250 stars on Github, 19.3 stars/day</ListItem>
            <ListItem textColor="#fff">Alt.js released in December 2014, 2,050 stars on Github, 7.15 stars/day</ListItem>
            <ListItem textColor="#fff">Redux released in May 2015, 6,500 stars on Github, 55.9!!! stars/day</ListItem>
          </List>
        </Slide>


        {/* conclusions slide 13*/}
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Conclusions
          </Heading>
          <List>
            <ListItem textColor="#fff">Unsurprisingly all three libraries feel very similar as they implement the same(or at least similar) pattern</ListItem>
            <ListItem textColor="#fff">Redux support is currently exploding, and has been very well received by both the community and Facebook internally</ListItem>
            <ListItem textColor="#fff">It is clear that the Unidirectional data flow for React based apps is going to continue to be improved upon, making all of our lives easier</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="#61dafb" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={1} fit textColor="#fff" textFont="secondary">
            Questions?
          </Heading>
        <Text>Thank you!</Text>
        </Slide>

      </Deck>
    );
  }
}
