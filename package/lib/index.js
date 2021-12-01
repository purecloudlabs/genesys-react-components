export { default as DxAccordion } from './dxaccordion/DxAccordion';
export { default as DxAccordionGroup } from './dxaccordion/DxAccordionGroup';
export { default as DxButton } from './dxbutton/DxButton';
export { default as DxItemGroup } from './dxitemgroup/DxItemGroup';
export { default as DxTabbedContent } from './dxtabbedcontent/DxTabbedContent';
export { default as DxTabPanel } from './dxtabbedcontent/DxTabPanel';
export { default as DxTextbox } from './dxtextbox/DxTextbox';
export { default as DxToggle } from './dxtoggle/DxToggle';
// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
