/**
 * 本文件只做element_ui引入使用;
 *
 *
 * !!!请勿将方法写在本文件内
 */

import Vue from 'vue';


import {
  Autocomplete,
  Button,
  ButtonGroup,
  Cascader,
  CascaderPanel,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  DatePicker,
  Dialog,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Input,
  Loading,
  Message,
  MessageBox,
  Option,
  OptionGroup,
  Pagination,
  Popconfirm,
  Popover,
  Radio,
  RadioButton,
  RadioGroup,
  Select,
  Slider,
  Spinner,
  Step,
  Steps,
  Switch,
  TabPane,
  Tabs,
  TimeSelect,
  Tooltip,
  Tree,
  Image
} from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'mini' };

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Drawer);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
Vue.use(Input);
// Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
// Vue.use(Table);
// Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
// Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Popconfirm);
Vue.use(Tooltip);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
// Vue.use(Tag);
Vue.use(Tree);
// Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
// Vue.use(Container);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Upload);
// Vue.use(Progress);
Vue.use(Spinner);
// Vue.use(Badge);
// Vue.use(Card);
// Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(CascaderPanel);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);
// Vue.use(Timeline);
// Vue.use(TimelineItem);
// Vue.use(Link);
// Vue.use(Divider);
Vue.use(Image);
// Vue.use(Calendar);
// Vue.use(Backtop);
// Vue.use(PageHeader);

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$notify = Notification;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

export default Vue;
