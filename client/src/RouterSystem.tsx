import { Routes, Route } from "react-router-dom";
import Main from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import ErrorPage from "@pages/Error";
import Products from "@pages/Products";
import ContactPage from "@pages/Contact";
import Login from "@pages/Login";
import Admin from "@pages/Admin";
import LayOut from "@components/LayOut";
import User from "@pages/User";
import Blog from "@pages/Blog";
import { CategoriesList, Categories } from "@pages/Categories/Main";

// Импортируем компоненты подкатегорий String Instruments
import Guitars from "@pages/Categories/StringInstruments/Guitars";
import Cello from "@pages/Categories/StringInstruments/Cello";
import Violin from "@pages/Categories/StringInstruments/Violin";

// Импортируем компоненты подкатегорий Wind Instruments
import Flutes from "@pages/Categories/WindInstruments/Flutes";
import Saxophone from "@pages/Categories/WindInstruments/Saxophone";
import Trumpet from "@pages/Categories/WindInstruments/Trumpet";

// Импортируем компоненты подкатегорий Percussion Instruments
import Drums from "@pages/Categories/PercussionInstruments/Drums";
import Xylophone from "@pages/Categories/PercussionInstruments/Xylophone";
import Cymbals from "@pages/Categories/PercussionInstruments/Cymbals";

// Импортируем компоненты подкатегорий Keyboard Instruments
import Piano from "@pages/Categories/KeyboardInstruments/Piano";
import Organ from "@pages/Categories/KeyboardInstruments/Organ";
import Synthesizer from "@pages/Categories/KeyboardInstruments/Synthesizer";

// Импортируем компоненты подкатегорий Electronic Instruments
import ElectricGuitars from "@pages/Categories/ElectronicInstruments/ElectricGuitars";
import ElectronicDrums from "@pages/Categories/ElectronicInstruments/ElectronicDrums";
import MIDIControllers from "@pages/Categories/ElectronicInstruments/MIDIControllers";

// Импортируем компоненты подкатегорий Accessories
import Midiators from "@pages/Categories/Accessories/Midiators";
import Strings from "@pages/Categories/Accessories/Strings";
import Cases from "@pages/Categories/Accessories/Cases";

const RouterSystem: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Main />} />
        
        {/* Categories Routes */}
        <Route path="categories">
          <Route index element={<CategoriesList />} />
          <Route path=":id" element={<Categories />}>
            {/* Subcategory Routes - String Instruments */}
            <Route path="guitars" element={<Guitars />} />
            <Route path="cello" element={<Cello />} />
            <Route path="violin" element={<Violin />} />
            
            {/* Subcategory Routes - Wind Instruments */}
            <Route path="flutes" element={<Flutes />} />
            <Route path="saxophone" element={<Saxophone />} />
            <Route path="trumpet" element={<Trumpet />} />
            
            {/* Subcategory Routes - Percussion Instruments */}
            <Route path="drums" element={<Drums />} />
            <Route path="xylophone" element={<Xylophone />} />
            <Route path="cymbals" element={<Cymbals />} />
            
            {/* Subcategory Routes - Keyboard Instruments */}
            <Route path="piano" element={<Piano />} />
            <Route path="organ" element={<Organ />} />
            <Route path="synthesizer" element={<Synthesizer />} />
            
            {/* Subcategory Routes - Electronic Instruments */}
            <Route path="electric-guitars" element={<ElectricGuitars />} />
            <Route path="electronic-drums" element={<ElectronicDrums />} />
            <Route path="midi-controllers" element={<MIDIControllers />} />
            
            {/* Subcategory Routes - Accessories */}
            <Route path="midiators" element={<Midiators />} />
            <Route path="strings" element={<Strings />} />
            <Route path="cases" element={<Cases />} />
          </Route>
        </Route>
        
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default RouterSystem;