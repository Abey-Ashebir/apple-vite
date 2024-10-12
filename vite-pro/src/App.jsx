import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pages from "./components/main/Pages";
import Fourth from "./components/fourth/Fourth";
import watch from "./images/icons/watch-series5-logo.png";
// import applecard from "./images/home/apple-card.jpg";
// import tv from "./images/icons/apple-tv-logo.png";
// import ipadlogo from "./images/icons/new-ipad-logo.png";
import servantlogo from "./images/icons/servant-logo.png";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Pages />
        <Fourth
          myImages1={watch}
          descriptionOne="With the new Always-On Retina display. You’ve never seen a watch like this."
          myImages2={servantlogo}
          descriptionTwo="Get 3% Daily Cash on purchases from Apple using Apple Card."
        />
        {/* <Fourth
        myImages1={tv}
        descriptionOne="Watch the trailer"
        myImages2={ipadlogo}
        descriptionTwo="Magic like you’ve never heard."
      />
      <Fourth
        myImages1={servantlogo}
        descriptionOne="The best for the brightest."
        myImages2={applecard}
        descriptionTwo="Like a computer. Unlike any computer."
      /> */}
        <Footer />
      </div>
    );
  }
}
export default App;
