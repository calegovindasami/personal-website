import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Introduction from "../Introduction/Introduction";
import { Contact } from "../Contact/Contact";
import { About } from "../About/About";
import "./BasicTabs.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          indicatorColor="primary"
          id="tabParent"
        >
          <Tab style={{ outline: "none" }} label="Feed" {...a11yProps(0)} />
          <Tab style={{ outline: "none" }} label="About Me" {...a11yProps(1)} />
          <Tab style={{ outline: "none" }} label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel id="tbPanel" value={value} index={0}>
        <Introduction />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div id="demo">
          <About />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel>
    </Box>
  );
}
