import './WordCloud.scss';
import { useEffect, useRef } from "react";
// import { dataCanvasGeneral } from "../../data";
import TagCloud from "TagCloud";
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

/**
 * Component for rendering a word cloud based on the provided data.
 */
const WordCloud = () => {
    const { t, i18n } = useTranslation();
    // const container = '.skill-charts';
    // const containerRef = useRef(null);
    const dataCanvas = t('dataCanvas', { returnObjects: true });
    const dataCanvasTexts = dataCanvas.map(data => data.name);

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

    const wordCloudContainer = useRef(null);

    // Cleanup previous TagCloud and render new one
    useEffect(() => {
        const container = wordCloudContainer.current;
        if (container) {
            // Clear the container safely using innerHTML
            container.innerHTML = '';
            // Create the new TagCloud
            TagCloud(container, dataCanvasTexts, currentOptions);
        }
    }, [i18n.language, dataCanvasTexts, currentOptions]);

    return (
        <div className='skill-charts' ref={wordCloudContainer}></div>
    );
};

export default WordCloud;