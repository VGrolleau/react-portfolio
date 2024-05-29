import './WordCloud.scss';
import { useEffect, useRef } from "react";
import { dataCanvasGeneral } from "../../data";
import TagCloud from "TagCloud";
import { useMediaQuery } from 'react-responsive';

/**
 * Component for rendering a word cloud based on the provided data.
 */
const WordCloud = () => {
    const container = '.skill-charts';
    const dataCanvasGeneralTexts = dataCanvasGeneral.map(data => data.name);

    // Media queries for determining device type
    const isTablet = useMediaQuery({ query: '(max-width: 960px), (max-width: 1100px) and (max-height: 900px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 530px)' });

    // Options for different device sizes
    const options = {
        radius: 400,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: false
    };

    const optionsTablet = {
        radius: 250,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: false
    };

    const optionsMobile = {
        radius: 200,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: false
    };

    // Determine the current options based on device type
    const currentOptions = isMobile ? optionsMobile : isTablet ? optionsTablet : options;

    // To render WordCloud each time the page is reloaded
    const hasLoadedBefore = useRef(true);
    useEffect(() => {
        if (hasLoadedBefore.current) {
            TagCloud(container, dataCanvasGeneralTexts, currentOptions);
            hasLoadedBefore.current = false;
        }
    });

    return (
        <div className='skill-charts'></div>
    );
};

export default WordCloud;