import { ROOT_URL } from '../../../helpers/ROOT_URL';
import { Fab, Stack, styled } from '@mui/material';

export const Header = styled('div')(() => ({
  width: '100%',
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: '12px',
  marginBlock: '20px',
}));

export const Banner = styled('label')<{ bg?: string }>(({ bg }) => ({
  width: '100%',
  borderRadius: '12px',
  height: '260px',
  backgroundColor: '#29253C',
  backgroundImage: `url(${ROOT_URL}banners/${bg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  display: 'block',
}));
export const Info = styled(Stack)(() => ({
  padding: '15px',
  paddingBottom: '0',
  position: 'relative',
}));

export const FabBanner = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  bgColor: theme.palette.primary.main,
  right: '10px',
}));

export const WrapperAvatar = styled('label')(
  `&:hover .icon-pen {
    display: block;
  }`,
  () => ({
    zIndex: '4',
    position: 'absolute',
    right: 'calc(50% - 75px)',
    transform: 'translate(-50%, -70%)',
  })
);
