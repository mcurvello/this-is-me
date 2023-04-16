import { Divider } from "native-base";

export default function Separator({ ...rest }) {
  return <Divider w="150" h="2" backgroundColor="primary" {...rest} />;
}
