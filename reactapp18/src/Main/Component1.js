import React from "react";
import imageSetting from "./Data/imageSetting.json";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import MUIBox from './Provider/MUIBox'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
// import { InputText } from "primereact/inputtext";
// import ProviderPrimeReact from './Provider/ProviderPrimeReact'
// import { Box } from "@mui/material";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const TabIcons = () => {
  return (
    <SpeedDial
      direction="left"
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "absolute", top: 16, right: 16 }}
      icon={<SpeedDialIcon icon={<MoreVertIcon />} openIcon={<CloseIcon />} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
};

const TabPanelHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: '1px solid black'
      }}
    >
      <span>
        <img
          src="images/alpslogo.png"
          height={imageSetting.alpsLogoHeight}
          width={imageSetting.alpsLogoWidth}
          alt=""
        />
      </span>
      <span> <TabIcons /> </span>
    </div>
  );
};

//#region Stack

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <MUIBox>
          <Typography component="div" sx={{ p: 3 }}>
            {children}
          </Typography>
        </MUIBox>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function StackPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MUIBox
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', border: '1px solid black' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 2,
          borderBottom: '2px solid black',
          borderColor: 'divider',
          minWidth: '150px',
          minHeight: '400px'
        }}
      >
        <Tab
          label="Tab One"
          {...a11yProps(0)}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'blue', // Background color for the active tab
              color: 'white', // Font color for the active tab
              borderRadius: '5px', // Add border-radius for a button-like appearance
            },
          }}
        />

        <Tab
          label="Tab Two"
          {...a11yProps(1)}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'blue', // Background color for the active tab
              color: 'white', // Font color for the active tab
              borderRadius: '5px', // Add border-radius for a button-like appearance
            },
          }}
        />

        <Tab
          label="Tab Three"
          {...a11yProps(2)}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'blue', // Background color for the active tab
              color: 'white', // Font color for the active tab
              borderRadius: '5px', // Add border-radius for a button-like appearance
            },
          }}
        />
      </Tabs>
      {/* <MUIBox sx={{ marginLeft: 'auto' }}> */}
      <MUIBox>
        <TabPanel value={value} index={0}>
          <Tab1Content />
        </TabPanel>

        <TabPanel value={value} index={1}>
          Tab 2 Content
        </TabPanel>

        <TabPanel value={value} index={2}>
          Tab 3 Content
        </TabPanel>
      </MUIBox>
    </MUIBox>
  );
}
//#endregion

//#region Tab 1 Content 
function Tab1Content() {
  return (
    <span> kjhjgv </span>
  )
}
//#endregion

const Component1 = () => {
  return (
    <>
      <TabPanelHeader />
      <br />
      <StackPanel />
    </>
  );
};

export default Component1;
