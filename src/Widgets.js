import React from 'react';
import './Widgets.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import InfoIcon from '@mui/icons-material/infoIcon';

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>

                <div className="widgets__articleRight">
                    <h4> {heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )

    }
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>
                    LinkedIn News

                    {/* <InfoIcon /> */}
                </h2>
            </div>

            {newsArticle("Adedoyin is back!", "Top News - 77,500 readers")}
            {newsArticle("iPhone 16 launches without key AI", "Top News - 77,325 readers")}
            {newsArticle("Youtube debuts new AI features!", "Top News - 7,815 readers")}
            {newsArticle("JP Morgan hours get oversight!", "Top News - 4,566 readers")}
            {newsArticle("Adedoyin is back!", "Top News - 77,500 readers")}
            {newsArticle("iPhone 16 launches without key AI", "Top News - 77,325 readers")}
            {newsArticle("Youtube debuts new AI features!", "Top News - 7,815 readers")}
            {newsArticle("JP Morgan hours get oversight!", "Top News - 4,566 readers")}

        </div>
    )
}

export default Widgets
