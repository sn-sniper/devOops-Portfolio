import "@styles/About.css";
import AOverlay from './ui/About-Overlay/AOverlay';
import { assets } from '@assets/assets';
import Subheader from './ui/Subhead/Subheader';
import Btnt from './ui/btns/btn-t';
import AboutBox from './ui/About-box/AboutBox';
import data from "@assets/data.json";

export default function About() {
    return (
        <div className='About-container'>
                <div className='left-section'>
                    <div className='decor-overlay'>
                        <AOverlay />
                        <img src={assets.hx_decor1} className='decor' alt="Decoration" />
                    </div>
                    <div className='left-content'>
                        <div className='left-head'>
                            <Subheader text="who we are" />
                            <h1 className='font-semibold'>
                                Crafting Ideas into<br />
                                Digital <span className="text-indigo-800">Excellence.</span>
                            </h1>
                        </div>
                        <div className='left-body'>
                            <h1>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptas delectus officia illum, accusamus molestias consectetur
                                similique saepe maiores error quasi.
                            </h1>
                            <Btnt text="book a call" bg={true} border={false} />
                        </div>
                    </div>
                </div>
                <div className='right-section'>
                    {data.about.map((item, index) => (
                        <AboutBox key={index} data={item} index={index} />
                    ))}
                </div>
            </div>
    );
}