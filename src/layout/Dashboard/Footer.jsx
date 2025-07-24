import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">
        &copy; 한국종축개량협회 by Team{' '}
        <Link href="https://aiak.org" target="_blank" underline="none">
          {' '}
          우유개량사업부
        </Link>
      </Typography>
      <Stack direction="row" sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
        {/* <Link component={RouterLink} to="https://aiak.or.kr" target="_blank" variant="caption" color="text.primary">
          Home
        </Link> */}
        {/* <Link component={RouterLink} to="https://phoenixcoded.gitbook.io/able-pro" target="_blank" variant="caption" color="text.primary">
          Documentation
        </Link>
        <Link component={RouterLink} to="https://phoenixcoded.authordesk.app/" target="_blank" variant="caption" color="text.primary">
          Support
        </Link> */}
      </Stack>
    </Stack>
  );
}
