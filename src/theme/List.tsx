import {
  defineStyle,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  item: {
    bgColor: 'shape',
    rounded: 'lg',
    px: 6,
    py: 4,
  },
}));

export const listTheme = defineMultiStyleConfig({ baseStyle });
