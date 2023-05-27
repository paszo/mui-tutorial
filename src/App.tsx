import React from 'react';
import {createTheme, colors, ThemeProvider} from "@mui/material";
import './App.css';
// import {MuiTypography} from './components/MuiTypography';
// import {MuiButton} from './components/MuiButton';
// import {MuiTextFields} from "./components/MuiTextFields";
// import {MuiSelect} from "./components/MuiSelect";
import {MuiRadioButton} from "./components/MuiRadioButton";
// import {MuiCheckbox} from "./components/MuiCheckbox";
import {MuiSwitch} from "./components/MuiSwitch";
import {MuiRating} from "./components/MuiRating";
import {MuiAutocomplete} from "./components/MuiAutocomplete";
import {MuiLayout} from "./components/MuiLayout";
import {MuiCard} from "./components/MuiCard";
import {MuiAccordion} from "./components/MuiAccordion";
import {MuiImageList} from "./components/MuiImageList";
import {MuiNavbar} from "./components/MuiNavbar";
import {MuiLink} from "./components/MuiLink";
import {MuiBreadcrumbs} from "./components/MuiBreadcrumbs";
import {MuiDrawer} from "./components/MuiDrawer";
import {MuiSpeedDial} from "./components/MuiSpeedDial";
import {MuiAvatar} from "./components/MuiAvatar";
import {MuiList} from "./components/MuiList";
import{MuiProgress} from "./components/MuiProgress";
import {MuiSkeleton} from "./components/MuiSkeleton";
import {MuiResponsiveness} from "./components/MuiResponsiveness";

const theme = createTheme({
    status: {
        danger: "#e53e3e"
    },
    palette: {
        secondary: {
            main: colors.orange[500]
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700]
        }
    }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              {/*<MuiTypography/>*/}
              {/*<MuiButton/>*/}
              {/*<MuiTextFields/>*/}
              {/*<MuiSelect/>*/}
              {/*<MuiRadioButton/>*/}
              {/*<MuiCheckbox/>*/}
              {/*<MuiSwitch/>*/}
              {/*<MuiRating></MuiRating>*/}
              {/*<MuiAutocomplete></MuiAutocomplete>*/}
              {/*<MuiLayout/>*/}
              {/*<MuiCard></MuiCard>*/}
              {/*<MuiAccordion/>*/}
              {/*<MuiImageList/>*/}
              {/*<MuiNavbar></MuiNavbar>*/}
              {/*<MuiLink></MuiLink>*/}
              {/*<MuiBreadcrumbs/>*/}
              {/*<MuiDrawer/>*/}
              {/*<MuiSpeedDial/>*/}
              {/*<MuiAvatar/>*/}
              {/*<MuiList></MuiList>*/}
              {/*<MuiProgress/>*/}
              {/*<MuiSkeleton/>*/}
              <MuiResponsiveness></MuiResponsiveness>
          </div>
      </ThemeProvider>
  );
}

export default App;
