import HelpDesk from "./App";
import Content from "./components/Content";
import Widgets from "./components/Widgets";
import Widget from "./components/Widget";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { useHelpDeskContext } from "./App";

import "../src/assets/css/variables.scss";
import "../src/assets/css/help-desk.scss";
import "../src/assets/css/faq.scss";
import "../src/assets/css/tutorials.scss";

HelpDesk.Content = Content;
HelpDesk.Header = Header;
HelpDesk.Menu = Menu;
HelpDesk.Widgets = Widgets;
HelpDesk.Widget = Widget;

export { HelpDesk };
export { useHelpDeskContext };
