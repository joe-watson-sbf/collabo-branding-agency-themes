

// GO in theme.js change line [3498 to 3545] to this:



// COLLABO CUSTOM JS

    
    //Pushdata
    $(quickviewId).addClass(product_handle).data('handle',product_handle);
    jQuery.getJSON('/products/' + product_handle + '.js', function(product) {
      var title = product.title;
      var type = product.type;
      var vendor = product.vendor;
      var price = 0;
      var compare_price = 0;
      var desc = product.description;
      var images = product.images;
      var variants = product.variants;
      var options = product.options;
      var url = '/products/' + product_handle;
      $('.qv-product-title').text(title);
      $('.qv-product-type').text(type);
      $('.qv-product-description').html(desc);
      $('.qv-view-product').attr('href', url);
      $('.qv-view-type').text(type);
      $('.qv-view-vendor').text(vendor)
      if(quickviewAvaible == 'true'){
        $(quickviewAddCartButton).prop('disabled', false).html(theme.strings.addToCart);
      }
      else{
        $(quickviewAddCartButton).prop('disabled', true).html(theme.strings.soldOut);
      }
      $(product.variants).each(function(i,variants) {
        if(variants.sku != null){
          $('.qv-sku').addClass("show").removeClass("hide");
          $('.qv-view-sku').text(product.variants[0].sku);
        }
        else{
          $('.qv-sku').addClass("hide").removeClass("show");
        }
        
      });

      var imageCount = $(images).length;
      image_embed = '<div class="collabo-handle-img"><img src="' + images[0] + '"></div>';
      image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
      $(quickviewThumb).append(image_embed);
      
      // END




