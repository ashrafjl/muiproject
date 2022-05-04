import { alpha } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme)=>({
    toolbar:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo:{
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'block'
        }
    },
    mobileLogo:{
        display: 'block',
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    search:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        width: '50%',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    input:{
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    icons:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
    }
}));
export default useStyles;