import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    lineChart: {
        width: '100% !important',
        '& svg': {
            width: '100% !important',
        },
        '& .recharts-legend-wrapper': {
            width: '100% !important',
        },
    },
}));

export default useStyles;