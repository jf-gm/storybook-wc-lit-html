import { HelloWorld } from "../components/HelloWorld/HelloWorld";

export default {
  title: "Example/HelloWorld",
};

const Template = (args) => HelloWorld(args);

export const Hello = Template.bind({});
Hello.args = {
  name: "world",
};
