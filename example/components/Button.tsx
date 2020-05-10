import { Button as EvergreenButton } from 'evergreen-ui';
import { withPreset } from '../../dist';

const Button = withPreset('button')(EvergreenButton);

export default Button;
