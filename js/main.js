$(document).ready(function(){
	createPriceList();
	createFaqList();
	initAllForms();
});


/*----------------HELPERS----------------------------------------------*/
function scrollTo(el) {
	if (!el) return false;

	const $el = $('#' + el);

	if($el.length) $('html, body').animate({
		scrollTop: $el.offset().top
	}, 600);

}

function initAllForms() {

	$("input[name='phone']").mask('+7 (999) 999-99-99');

	$('form').submit(function(e) {
		if (e) e.preventDefault();

		var $crntform = $(e.target);
		var data = {
			name: $crntform.find('input[name="name"]').val(),
			phone: $crntform.find('input[name="phone"]').val()
		};

		$.ajax({
		  type: "POST",
		  url: '/formdata',
		  dataType: 'json',
		  data: data,
		  success: function() {
		  	successPopupOpen();	
		  },
		  error: function() {
		  	errorPopupOpen();
		  },
		});
	})
}

/*----------------POPUPS----------------------------------------------*/
function cllbckPopupOpen() {
	ga('send', 'event', 'click', 'cllbckPopupOpen');
	$('#callbackPopup').addClass('is-shown');
	$('body').css({'overflow-y': 'hidden'});
}

function rqstPopupOpen() {
	ga('send', 'event', 'click', 'rqstPopupOpen');
	$('#requestPopup').addClass('is-shown');
	$('body').css({'overflow-y': 'hidden'});
}

function successPopupOpen() {
	ga('send', 'event', 'click', 'successSendForm');
	$('.popup').removeClass('is-shown');
	
	var $resPopup = $('#resultPopup');
	$resPopup.addClass('is-shown');
	$resPopup.find('#success').show();
	$resPopup.find('#error').hide();
}

function errorPopupOpen() {
	ga('send', 'event', 'click', 'errorSendForm');
	$('.popup').removeClass('is-shown');

	var $resPopup = $('#resultPopup');
	$resPopup.addClass('is-shown');
	$resPopup.find('#success').hide();
	$resPopup.find('#error').show();
}

function popupClose() {
	$('.popup').removeClass('is-shown');
	$('body').css({'overflow-y': 'auto'});
}


/*----------------PRICE LIST----------------------------------------------*/
function createPriceList() {
	var $priceList = $('#prices-list');

	priceList.forEach(function(price) {			
		var srvcs = '';
		price.services.forEach(function(srvc){
			srvcs += '<li>' + srvc + '</li>';
		});

		$priceList.append(
			'<div class="price-wrapper">'
				+'<li class="price-box">'
					+'<div class="price-img">'
						+'<img src="img/' + price.image + '">'
					+'</div>'

					+'<ul class="price-services">'
						+ srvcs
					+'</ul>'

					// +'<div class="price-cost">'
					// 	+'<p>от ' + price.cost + ' руб. за км2</p>'
					// +'</div>'

					+'<button class="price-btn btn" onClick="rqstPopupOpen()" >'
						+'Оставить заявку'
					+'</button>'
				+'</li>'
			+'</div>'
		);
	})
}

var priceList = [
	{
		"title": "Косметический ремонт",
		"image": "price-1.jpg",
		"cost": "XXXXX",
		"services": [
			"Замена обоев",
			"Покрытие пола",
			"Замена плинтуса",
			"Выравнивание откосов",
			"Замена дверной коробки",
			"Ремонт освещения",
			"Уборка и вынос мусора",
		],
	},

	{
		"title": "Капитальный ремонт",
		"image": "price-2.jpg",
		"cost": "XXXXX",
		"services": [
		  "Выравнивание стен ",
		  "Выравнивание пола",
		  "Укладка ламината и тд.",
		  "Устройство потолков",
		  "Демонтаж и устройство оконных и дверных проемов,перегородок",
		  "Монтаж электрических сетей, cистемы водоснабжения  систем отопления",
		  "Уборка и вынос мусора",			
		],
	},

	{
		"title": "Евроремонт",
		"image": "price-3.jpg",
		"cost": "XXXXX",
		"services": [
			"Выравнивание стен",
		  "Выравнивание пола",
		  "Укладка ламината и тд.",
		  "Устройство потолков",
		  "Демонтаж и устройство оконных и дверных проемов, перегородок",
		  "Монтаж электрических сетей",
		  "Системы водоснабжения ",
		  "Систем отопления",
		  "Уборка и вынос мусора",
		  "Эксклюзивные материалы",
		  "Нестандартные планировочные решения",
		  "Эксклюзивный дизайн-проект",
		]
	},

	{
		"title": "Ремонт премиум класса",
		"image": "price-4.jpg",
		"cost": "XXXXX",
		"services": [
			"Выравнивание стен",
		  "Выравнивание пола",
		  "Укладка ламината и тд.",
		  "Устройство потолков",
		  "Демонтаж и устройство оконных и дверных проемов,перегородок",
		  "Монтаж электрических сетей",
		  "Системы водоснабжения ",
		  "Систем отопления",
		  "Уборка и вынос мусора",
		  "Эксклюзивные материалы",
		  "Нестандартные планировочные решения",
		  "Установка аквариума, джакузи, сауны и тд.",
		  "Индивидуальный дизайн проект",
		  "Зимний сад",
		  "Художественная ковка",
		  "Укладка декоративного камня",
		]
	},
];


/*----------------FAQ LIST----------------------------------------------*/

function createFaqList() {
	var $faqList = $('#faq-list');

	faqList.forEach(function(faq, indx) {
		var srvcs = '';

		$faqList.append(
			'<div class="faq-item">'
				+'<h1 class="faq-number">' + (indx+1) + '</h2>'
				+'<h3 class="faq-question">' + faq.qstn + '</h3>'
				+'<p class="faq-answer">' + faq.answr + '</p>'
			+'</div>'
		);
	});
}


var faqList = [
	// {
	// 	qstn: 'Могу ли я доверить вам свою квартиру?',
	// 	answr: 'ООО "Инсайд" на рынке строительных услуг более 10 лет и за это время не было ни одного недовольного клиента.' 
	// 				+' Все работы ведутся с соблюдением всех технологий.',
	// },

	{
		qstn: 'Надеюсь вы качественно делаете свою работу?',
		answr: 'Качество выполняемых работ гарантируется двухсторонним договором с юридическим лицом. Также мы предоставляем гарантию 1 год на всю проделанную работу.',
	},

	{
		qstn: 'Нужно ли мне покупать материалы и заботиться о мусоре?',
		answr: 'Нет, мы выполняем работу под ключ: закупку и доставку материалов берем на себя. На объекте гарантируется чистота. Мусор тоже вывозим сами.',
	},

	{
		qstn: 'Кто будет непосредственно выполнять ремонт?',
		answr: 'У нас свой штат строителей. Все рабочие - квалифицированные специалисты.',
	},

	{
		qstn: 'Работаете ли вы по договору генподряда?',
		answr: 'Выступая в качестве генерального подрядчика, мы контролируем все этапы реализации вашего проекта, включая определение его организационной структуры, разработку индивидуальной схемы процесса строительства.',
	},
];

