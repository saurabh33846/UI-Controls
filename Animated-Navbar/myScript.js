var arrow = document.querySelector('.arrow');
var navLinks = document.querySelectorAll('.nav-link');
var background = document.querySelector('.background');
var sections = document.querySelectorAll('.section');
var container = document.querySelector('.container');
var popover = document.querySelector('.popover');
let refheight = -999999;
function showSection(targetNavLink) {
	popover.classList.add('open')
	 let targetPopoverDataAtt = targetNavLink.getAttribute('data-nav');
	sections.forEach((section)=>{
		section.classList.remove('active');
	})
	if(refheight === -999999) {
		let refPopovreRect = sections[0].getBoundingClientRect();
		refheight = refPopovreRect.bottom - refPopovreRect.top;
		background.style.height = refheight;
	}
	var targetPopover = document.querySelector(`#${targetPopoverDataAtt}`);
	let popoverRect = targetPopover.getBoundingClientRect();
	let left = targetNavLink.offsetLeft;
	let targetRect = targetNavLink.getBoundingClientRect();
	let newHeight = popoverRect.bottom - popoverRect.top;
	let width = (targetRect.right-targetRect.left);
	let xShift = left + width/2;
	let yScale = newHeight/refheight
	background.style.transform = `translateX(${left}px) scaleY(${yScale})`
	arrow.style.transform = `translateX(${xShift-20}px) rotate(45deg)`
	targetPopover.style.transform = `translateX(${left}px)`
	targetPopover.classList.add('active');
}
if(navLinks){
   navLinks.forEach((navLink)=>{
  navLink.addEventListener('mouseenter', (event)=>{
    console.log('Nav is hovered');
    showSection(event.target);
  })
});
   }
container.addEventListener('mouseleave', () => {
  popover.classList.remove('open');
})

