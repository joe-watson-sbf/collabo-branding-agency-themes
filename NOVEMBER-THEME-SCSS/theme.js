

// GO in theme.js in line 3506 remove the slice property

var desc = product.description;




// Go ahead now in lien 3533 make this change

//BEFORE CHANGE 

var imageCount = $(images).length;
$(images).each(function (i, image) {
    image_embed = '<div><img src="' + image + '"></div>';
    image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
    $(quickviewThumb).append(image_embed);
});
$(quickviewThumb).slick({
    rtl: theme.rtl,
    dots: true,
    arrows: true,
    respondTo: 'min',
    useTransform: true
}).css('opacity', '1');


//AFTER CHANGE


// COLLABO CUSTOM JS

var imageCount = $(images).length;

image_embed = '<div class="collabo-handle-img"><img src="' + images[0] + '"></div>';
image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
$(quickviewThumb).append(image_embed);

// END



