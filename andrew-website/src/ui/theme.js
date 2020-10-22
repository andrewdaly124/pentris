import RetroEmpty from './assets/retro/empty.png';
import RetroBlueSolid from './assets/retro/blue_solid.png';
import RetroBlueOpen from './assets/retro/blue_open.png';
import RetroRedSolid from './assets/retro/red_solid.png';

const theme = {};

export function refreshTheme(/* param for theme name */) {
  // Add support for new themes here
  theme.empty = RetroEmpty;
  theme.blueSolid = RetroBlueSolid;
  theme.blueOpen = RetroBlueOpen;
  theme.redSolid = RetroRedSolid;
}

export default theme;
