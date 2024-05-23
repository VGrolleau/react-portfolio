import './WordCloud.scss';
import { useEffect, useRef } from "react";
import { dataCanvasGeneral } from "../../data";
import TagCloud from "TagCloud";
import { useMediaQuery } from 'react-responsive';

const container = '.skill-charts';

let dataCanvasGeneralTexts = [];

dataCanvasGeneral.forEach((data) => {
    dataCanvasGeneralTexts.push(data.name);
});

const options = {
    radius: 400,
    /* Animation speed : slow, normal, fast */
    maxSpeed: 'fast',
    initSpeed: 'fast',
    /* 0 = top, 90 = left, 135 = right-bottom */
    direction: 135,
    /* Interact with cursor move on move out */
    keep: false
}

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

const WordCloud = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 960px), (max-width: 1100px) and (max-height: 900px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 530px)' });

    let currentOptions;
    isMobile ? currentOptions = optionsMobile
        : isTablet ? currentOptions = optionsTablet
            : currentOptions = options;

    /* To render WordCloud each time the page is reloaded */
    const hasLoadedBefore = useRef(true);
    useEffect(() => {
        if (hasLoadedBefore.current) {
            TagCloud(container, dataCanvasGeneralTexts, currentOptions);
            hasLoadedBefore.current = false;
        }
    })

    return (
        <div className='skill-charts'></div>
    )
}

export default WordCloud;