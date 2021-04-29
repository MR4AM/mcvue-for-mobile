import vue from "vue";
import ModalComponent from "./confirm.vue";

const ModalConstructor = vue.extend(ModalComponent);

function showModal(modalObject = {}) {
  // 实例化一个 modal.vue
  const modalDom = new ModalConstructor({
    el: document.createElement("div"),
    data() {
      return {
        showTitle: true,
        title: modalObject.title,
        content: modalObject.content,
        visable: true,
        needSlot: false,
        okText: modalObject.okText || "确定",
        cancelText: modalObject.cancelText || "取消",
        showFooter: true,
        onOk: () => {
          modalObject.onOk && modalObject.onOk();
        },
        onCancel: () => {
          modalObject.onOk && modalObject.onCancel();
        }
      };
    }
  });

  // 把 实例化的 modal.vue 添加到 body 里
  document.body.appendChild(modalDom.$el);
}
export default showModal;
