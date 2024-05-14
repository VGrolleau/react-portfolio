import './WordCloud.scss';
import { useEffect, useRef } from "react";
import { dataCanvasGeneral } from "../../data";
import TagCloud from "TagCloud";

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

const WordCloud = () => {
    /* To render WordCloud each time the page is reloaded */
    const hasLoadedBefore = useRef(true);
    useEffect(() => {
        if (hasLoadedBefore.current) {
            TagCloud(container, dataCanvasGeneralTexts, options);
            hasLoadedBefore.current = false;
        }
    })

    return (
        <div className='skill-charts'></div>
    )
}

export default WordCloud;