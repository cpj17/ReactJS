import React, { useState } from 'react'
import './Styles/style1.css'
import './Styles/VerticalTabs.css'

const Component2 = () => {
    const [toggleMenu, setToggleMenu] = useState("none")
    const [toggleMenuLbl, setToggleMenuLbl] = useState("Action")
    const [toggleImgSrc, setToggleImgSrc] = useState("images/menu.png")

    const tabs = [
        { label: 'AR Invoice', content: <Tab1Content /> },
        { label: 'Details', content: 'Content for Tab 2 ghfddddddddddddddddddd fdhghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghghg fghd kjfghhggggggggkjgfhjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk gfjjjjjjjjjjjjjjjjjj hggggggggg end' },
        { label: 'SAP Details', content: 'Content for Tab 3' },
    ];

    function toggleMeniIconcs() {
        if (toggleMenu === "") {
            setToggleMenu("none")
            setToggleImgSrc("images/menu.png")
            setToggleMenuLbl("Action")
        }
        else {
            setToggleMenu("")
            setToggleImgSrc("images/letter-x.png")
            setToggleMenuLbl("Close")
        }

        // console.log(toggleMenu)
    }


    return (
        <>
            <header>
                <div id="logo">
                    <img src="images/alpslogo.png" height="64" width="64" alt="" />
                    &nbsp;&nbsp;
                    <div id="logo-text">
                        <h2> ALPS </h2>
                    </div>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                    <a href="#">Logout</a>
                </nav>
            </header>
            <section className="submenu">
                <span id='spnSubMenuBtns' style={{ display: toggleMenu }}>
                    <button> <img src="images/Add icon.png" alt="" /> <br /> Add </button>
                    <button> <img src="images/Save icon.png" alt="" /> <br /> Save </button>
                    <button> <img src="images/Delete icon.png" alt="" /> <br /> Delete </button>
                    <button> <img src="images/Refresh icon.png" alt="" /> <br /> Refresh </button>
                    <button> <img src="images/Selection icon.png" alt="" /> <br /> Selection </button>
                    <button> <img src="images/Confirm icon.png" alt="" /> <br /> Confirm </button>
                    <button> <img src="images/Unconfirm icon.png" alt="" /> <br /> Unconfirm </button>
                    <button> <img src="images/Cancel icon.png" alt="" /> <br /> Cancel </button>
                    <button> <img src="images/Summary icon.png" alt="" /> <br /> Summary </button>
                    <button> <img src="images/Find by column button.png" alt="" /> <br /> Find by column </button>
                    <button> <img src="images/Audit Trial.png" alt="" /> <br /> Audit Trail </button>
                    <button> <img src="images/User Settings icon.png" alt="" /> <br /> User settings </button>
                    <button> <img src="images/Home icon.png" alt="" /> <br /> Home </button>
                </span>
                <button> <img src={toggleImgSrc} height={34} width={30} alt="" onClick={toggleMeniIconcs} /> <br /> {toggleMenuLbl} </button>
            </section>

            <section>
                <h1> AR Invoice </h1>
                <div>
                    <VerticalTabs tabs={tabs} />
                </div>
            </section>

            <footer>
                &copy; 2023 Your Brand. All rights reserved.
            </footer>
        </>
    )
}

const VerticalTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="vertical-tabs-container">
            <div className="vertical-tabs">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

function Tab1Content() {
    const inputProps = {
        style: {
            backgroundColor: 'lightgray',
        },
    }
    return (
        <div className='divTab1Container'>
            <div className='divTab1'>
                <div style={{ display: 'flex' }}>
                    <TextInput label={"Trans ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={"Date"} value={"27/12/2023 12:12"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"SL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />
            </div>

            <div className='divTab1'>
                <div style={{ display: 'flex' }}>
                    <TextInput label={"Trans ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={"Date"} value={"27/12/2023 12:12"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"SL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />

                <div style={{ display: 'flex' }}>
                    <TextInput label={"GL ID"} value={"AR000000"} inputProps={inputProps} />
                    &nbsp;&nbsp;&nbsp;
                    <TextInput label={""} value={"C08-AMT DUE NHG PHARMACY"} />
                </div>

                <TextInput label={"Inv Date"} value={"27/12/2023 12:12"} />
            </div>
        </div>
    )
}

const TextInput = ({ label, value, onChange = null, inputProps }) => {
    return (
        <div className="text-input">
            <label className="clsLabel">{label}</label>
            <input className="clsInput" type="text" value={value} {...inputProps} />
        </div>
    );
};

export default Component2