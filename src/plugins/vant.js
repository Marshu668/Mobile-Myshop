// 导入vue
import Vue from 'vue'
import { SubmitBar, Sticky, Dialog, Divider, Button, Row, Col, Search, Tag, Card, Notify } from 'vant'
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tag)
Vue.use(Search)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Notify)
Vue.use(SubmitBar)
Vue.use(Sticky)

Vue.use(Dialog)
Vue.prototype.Dialog = Dialog
Vue.prototype.$message = Notify
