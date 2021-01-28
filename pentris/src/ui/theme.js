import RetroEmpty from "./assets/retro/empty.png";
import RetroBlueSolid from "./assets/retro/blue_solid.png";
import RetroBlueOpen from "./assets/retro/blue_open.png";
import RetroRedSolid from "./assets/retro/red_solid.png";

/**
 * TODO:
 * Add new themes, make this smarter
 */

const theme = {};
export const COLORS = [];

export function refreshTheme(/* param for theme name */) {
  // Add support for new themes here
  theme.empty = RetroEmpty;
  theme.blueSolid = RetroBlueSolid;
  theme.blueOpen = RetroBlueOpen;
  theme.redSolid = RetroRedSolid;

  COLORS.push(RetroBlueSolid);
  COLORS.push(RetroBlueOpen);
  COLORS.push(RetroRedSolid);
}

export default theme;
