;(function () {
	"use strict";
	let playList = [{
			author: "Led Zeppelin",
			song: "Stairway to heaven",
			duration: "2:03"
		},
		{
			author: "Queen",
			song: "Bohemian rhapsody",
			duration: "2:30"
		},
		{
			author: "Lynyrd Skynyrd",
			song: "Free bird",
			duration: "1:56"
		},
		{
			author: "Deep Purple",
			song: "Smoke on the water",
			duration: "3:03"
		},
		{
			author: "Jimi Hendrix",
			song: "All along the watchtower",
			duration: "2:53"
		},
		{
			author: "AC/DC",
			song: "Back in black",
			duration: "2:43"
		},
		{
			author: "Queen",
			song: "We will rock you",
			duration: "2:13"			
		},
		{
			author: "Metallica",
			song: "Enter sandman",
			duration: "3:03"			
		}
	];


	let playListEl = document.getElementById('playlist'),
		playListTmpl = document.getElementById('playlist-li').innerHTML,
		playListHTML = '';



	playList.forEach(function (item) {

		playListHTML += playListTmpl
			.replace(/{{author}}/ig, item.author)
			.replace(/{{duration}}/ig, item.duration)
			.replace(/{{song}}/ig, item.song);
	});

	playListEl.innerHTML = playListHTML;

})();