import { HeaderCool } from "../components/Header/Header";

export default {
  title: "Example/HeaderCool",
};

const Template = (args) => HeaderCool(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
