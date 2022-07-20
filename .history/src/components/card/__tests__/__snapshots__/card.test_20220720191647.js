import { createLocalVue, shallowMount } from "@vue/test-utils";
import Card from "../Card";

const factory = (propsData = {}) => {
  const localVue = createLocalVue();

  const props = {
    title: "title",
    content: "content",
  };

  return shallowMount(Card, {
    propsData: {
      ...props,
    },
    localVue,
  });
};

describe("UgapSidePanelItem", () => {
  describe("Global :", () => {
    it("mounts properly", () => {
      const wrapper = factory();
      expect(wrapper.vm).toBeTruthy();
    });

    it("renders properly", () => {
      const wrapper = factory();
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
