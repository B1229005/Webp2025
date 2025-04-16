var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getRecentImages() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', imglist_Url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      console.log("API 回應資料：", data); 
      if (data && data.photos && data.photos.photo && Array.isArray(data.photos.photo)) {
        var photoIds = data.photos.photo.map(photo => photo.id);  
        photoIds.forEach(function (photoId) {
          getImageSizes(photoId); 
        });
      }
    } else {
      console.log("API 請求失敗，錯誤代碼：" + xhr.status);
    }
  };
}

function getImageSizes(photoId) {
  var img_Url = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=${photoId}&format=json&nojsoncallback=1`;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', img_Url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      console.log("尺寸資料：", data); 

      if (data && data.sizes && data.sizes.size && Array.isArray(data.sizes.size)) {
        add_new_img(data.sizes.size); 
      }
    }
  };
}

// 顯示圖片
function add_new_img(sizes) {
  var gal = document.getElementById("gallery");

  sizes.forEach(function (size) {

    if (size.label === "Medium") { 
      var img = document.createElement("img");
      img.src = size.source;
      gal.appendChild(img); 
    }
  });
}