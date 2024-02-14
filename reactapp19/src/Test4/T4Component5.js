import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './SplitterStyle.css'

export default function VerticalDemo() {
    return (
        <Splitter style={{ minHeight: '0px', height: '100vh' }} layout="vertical">
            <SplitterPanel style={{ overflow: 'auto', minHeight: '300px' }} className="flex align-items-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png" alt="" />
                <h2> end </h2>
            </SplitterPanel>
            <SplitterPanel style={{overflow: 'auto', minHeight: '300px'}} className="flex align-items-center justify-content-center">
                <img src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww" alt="" />
                <h2> end </h2>
            </SplitterPanel>
        </Splitter>
    )
}