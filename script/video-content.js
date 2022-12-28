
let projectContent = document.querySelectorAll('[data-project]');
let selectedProject = null;
let video = null;
let hidableElemetns = document.querySelectorAll(".project__item-link");
let prevProject = null;

projectContent.forEach(function (item) {
   item.addEventListener('mouseover', function (obj) {
      if(video !== null) video.classList.add('hidden')
      video = document.querySelector('#' + obj.target.attributes['data-project'].value);
      video.currentTime = 0;
      video.classList.remove('hidden')
      let el = null;
      for(el in hidableElemetns) hidableElemetns.item(el).setAttribute('data-hidable', 'true');
      obj.target.setAttribute('data-hidable', 'false');
      let hidables = document.querySelectorAll('[data-hidable=true]');
      for(el in hidables) hidables.item(el).classList.add('opacity');
      prevProject = obj.target;
   })
   item.addEventListener('mouseout', function() {
      var elementsToHide = document.querySelectorAll('.opacity');
      for(var el in elementsToHide) elementsToHide.item(el).classList.remove('opacity');
      video.classList.add('hidden')
   })

})


document.addEventListener("DOMContentLoaded", function() {

   //let item = document.querySelector("[data-project='project-content-1']");
   inView.offset({
      bottom: 200
   });
   inView("[data-project]").on('enter', function (obj) {
      console.log(obj.attributes['data-project'].value)
      video = document.querySelector('#' + obj.attributes['data-project'].value);
      video.currentTime = 0;
      video.classList.remove('hidden')
   });

});
