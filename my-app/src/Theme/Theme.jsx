import { createMuiTheme } from '@material-ui/core/styles';

const OnStageTheme = createMuiTheme({
  palette: {
    primary:{
        main: '#fff',
        contrastText: '#4F4F4F'
    },
    secondary:{
        main: '#F5F6FA',
        contrastText: '#4F4F4F'
    },
    success:{
        main: '#45D083',
        contrastText: '#ECEFF1'
    }
  },

});
export default OnStageTheme;