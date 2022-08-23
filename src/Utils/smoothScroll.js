export default function SmoothScroll(id){
  const node= document.querySelector(id);
  window.scrollTo({top:node.offsetTop,
  behavior:"smooth"})
}