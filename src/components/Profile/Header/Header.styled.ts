import { Stack, styled } from '@mui/material';

import { IoPencilSharp } from 'react-icons/io5';

export const Header = styled('div')(() => ({
  width: '100%',
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: '12px',
  marginBlock: '20px'
}));
export const Banner = styled('div')(() => ({
  width: '100%',
  borderRadius: '12px',
  height: '260px',
  backgroundColor: '#29253C'
  // overflow: 'hidden',
}));
export const Info = styled(Stack)(() => ({
  padding: '15px',
  paddingBottom: '0',
  position: 'relative'
}));

export const WrapperAvatar = styled('div')(
  `
  &:hover .icon-pen {
    display: block;
  }
`,
  () => ({
    zIndex: '4',
    position: 'absolute',
    right: 'calc(50% - 80px)',
    transform: 'translate(-50%, -70%)'
  })
);
export const PenIcon = styled(IoPencilSharp)(``, () => ({
  position: 'absolute',
  color: '#FFF',
  bgColor: 'rgba(23, 23, 25, 0.5)',
  top: '15px',
  right: '15px',
  display: 'none'
  // transform: 'translate(-50%, 0)',
}));
